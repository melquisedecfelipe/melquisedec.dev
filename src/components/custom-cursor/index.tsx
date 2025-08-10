'use client'

import { useTheme } from 'next-themes'
import { useCallback, useEffect, useMemo, useRef } from 'react'

/**
 * Configuration constants for cursor behavior
 */
const CURSOR_CONFIG = {
  CURSOR_SIZE: 16, // Total cursor size (width/height)
  CURSOR_OFFSET: 8, // Half of cursor size for centering
  THROTTLE_MS: 16, // ~60fps throttling for smooth animation
  INTERACTION_SELECTOR: 'a, button, [role="button"], input, textarea, select, .cursor-pointer, [data-cursor-hover]',
} as const

/**
 * Custom cursor component that replaces the default cursor on desktop devices.
 * Provides hover states for interactive elements and smooth animation.
 * Only renders on devices with hover capability (desktop/laptop).
 * 
 * Features:
 * - Smooth cursor tracking with RAF optimization
 * - Automatic hover state detection for interactive elements
 * - Memory leak prevention with proper cleanup
 * - Performance optimized with throttling and memoization
 * 
 * @returns null - This component doesn't render anything to the DOM
 */
export default function CustomCursor() {
  const { theme, systemTheme } = useTheme()
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const animationIdRef = useRef<number>()
  const lastUpdateTime = useRef<number>(0)
  const mousePosition = useRef({ x: 0, y: 0 })
  const isHovering = useRef(false)

  // Memoize device capabilities check
  const hasHoverCapability = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches
  }, [])

  // Memoize current theme calculation
  const currentTheme = useMemo(() => {
    return theme === 'system' ? systemTheme : theme
  }, [theme, systemTheme])

  const isDark = useMemo(() => {
    return currentTheme === 'dark'
  }, [currentTheme])

  // Get cursor color based on theme
  const cursorColor = useMemo(() => {
    return isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
  }, [isDark])

  /**
   * Update cursor transform with current position and scale
   */
  const updateCursorTransform = useCallback(() => {
    if (!cursorRef.current) return
    
    const scale = isHovering.current ? 2 : 1
    const x = mousePosition.current.x - CURSOR_CONFIG.CURSOR_OFFSET
    const y = mousePosition.current.y - CURSOR_CONFIG.CURSOR_OFFSET
    
    cursorRef.current.style.transform = 
      `translate3d(${x}px, ${y}px, 0) scale(${scale})`
  }, [])

  /**
   * Throttled cursor position update for better performance
   */
  const updateCursorPosition = useCallback((e: MouseEvent) => {
    const now = performance.now()
    if (now - lastUpdateTime.current < CURSOR_CONFIG.THROTTLE_MS) return
    
    lastUpdateTime.current = now
    
    mousePosition.current = { x: e.clientX, y: e.clientY }
    updateCursorTransform()
  }, [updateCursorTransform])

  /**
   * Optimized hover state handlers
   */
  const handleHoverEnter = useCallback(() => {
    isHovering.current = true
    updateCursorTransform()
  }, [updateCursorTransform])

  const handleHoverLeave = useCallback(() => {
    isHovering.current = false
    updateCursorTransform()
  }, [updateCursorTransform])

  /**
   * Add hover listeners to interactive elements
   * Returns the elements for cleanup purposes
   */
  const addHoverListeners = useCallback(() => {
    const interactiveElements = document.querySelectorAll(CURSOR_CONFIG.INTERACTION_SELECTOR)
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleHoverEnter, { passive: true })
      element.addEventListener('mouseleave', handleHoverLeave, { passive: true })
    })

    return interactiveElements
  }, [handleHoverEnter, handleHoverLeave])

  /**
   * Remove hover listeners from elements
   */
  const removeHoverListeners = useCallback((elements: NodeListOf<Element>) => {
    elements.forEach(element => {
      element.removeEventListener('mouseenter', handleHoverEnter)
      element.removeEventListener('mouseleave', handleHoverLeave)
    })
  }, [handleHoverEnter, handleHoverLeave])

  useEffect(() => {
    // Only setup on devices with hover capability
    if (!hasHoverCapability) return

    // Create cursor element with optimized styles
    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    cursor.style.cssText = `
      position: fixed;
      width: ${CURSOR_CONFIG.CURSOR_SIZE}px;
      height: ${CURSOR_CONFIG.CURSOR_SIZE}px;
      pointer-events: none;
      z-index: -1;
      will-change: transform;
      top: 0;
      left: 0;
      background: ${cursorColor};
      border-radius: 50%;
      transition: transform 0.2s ease-out;
    `
    
    document.body.appendChild(cursor)
    cursorRef.current = cursor

    // Initial hover listeners setup
    let interactiveElements = addHoverListeners()

    // Observer for dynamically added elements - optimized with debouncing
    let observerTimeout: NodeJS.Timeout
    const observer = new MutationObserver(() => {
      // Debounce observer callbacks to prevent excessive re-binding
      clearTimeout(observerTimeout)
      observerTimeout = setTimeout(() => {
        removeHoverListeners(interactiveElements)
        interactiveElements = addHoverListeners()
      }, 100)
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      // Only observe what we need
      attributes: false,
      characterData: false,
    })

    // Add passive mouse listener for better performance
    document.addEventListener('mousemove', updateCursorPosition, { passive: true })

    return () => {
      // Cleanup all event listeners and observers
      document.removeEventListener('mousemove', updateCursorPosition)
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      
      clearTimeout(observerTimeout)
      removeHoverListeners(interactiveElements)
      observer.disconnect()
      
      // Safe cursor removal
      if (cursor?.parentNode) {
        cursor.parentNode.removeChild(cursor)
      }
      
      cursorRef.current = null
    }
  }, [hasHoverCapability, updateCursorPosition, addHoverListeners, removeHoverListeners, cursorColor])

  // Effect to update cursor color when theme changes
  useEffect(() => {
    if (cursorRef.current && hasHoverCapability) {
      cursorRef.current.style.background = cursorColor
    }
  }, [cursorColor, hasHoverCapability])

  return null
}
