'use client'

import { useTheme } from 'next-themes'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

/**
 * Configuration constants for background behavior
 */
const BACKGROUND_CONFIG = {
  THROTTLE_MS: 32, // ~30fps throttling for smoother animation
  DEFAULT_POSITION: { x: 50, y: 50 }, // Default center position
  TRANSITION_DURATION: 300, // Theme transition duration in ms
  IDLE_TIMEOUT: 2000, // Time to wait before idle animation (ms)
  MOBILE_BREAKPOINT: 768, // Mobile breakpoint in pixels
} as const

/**
 * Position coordinates interface
 */
interface Position {
  x: number
  y: number
}

/**
 * Fluid animated background component with theme-aware gradients.
 * Creates an interactive background that follows mouse movement with smooth animations.
 * 
 * Features:
 * - Mouse-following gradient effects
 * - Dark/light theme support with different gradient styles
 * - Performance optimized with throttling and RAF
 * - Server-side rendering safe with mounted state
 * - Smooth theme transitions
 * - Hardware-accelerated animations
 * 
 * @returns JSX.Element - A full-screen animated background
 */
export default function FluidBackground() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState<Position>(BACKGROUND_CONFIG.DEFAULT_POSITION)
  const [isIdle, setIsIdle] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const lastUpdateTime = useRef<number>(0)
  const idleTimeoutRef = useRef<NodeJS.Timeout>()

  // Memoize current theme calculation
  const currentTheme = useMemo(() => {
    return theme === 'system' ? systemTheme : theme
  }, [theme, systemTheme])

  const isDark = useMemo(() => {
    return currentTheme === 'dark'
  }, [currentTheme])

  /**
   * Throttled mouse move handler with idle detection
   */
  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Skip on mobile devices
    if (isMobile) return
    
    const now = performance.now()
    if (now - lastUpdateTime.current < BACKGROUND_CONFIG.THROTTLE_MS) return
    
    lastUpdateTime.current = now
    
    // Reset idle state and timeout
    setIsIdle(false)
    if (idleTimeoutRef.current) {
      clearTimeout(idleTimeoutRef.current)
    }
    
    // Set new idle timeout
    idleTimeoutRef.current = setTimeout(() => {
      setIsIdle(true)
    }, BACKGROUND_CONFIG.IDLE_TIMEOUT)
    
    // Use requestAnimationFrame for smooth updates
    requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePosition({ x, y })
    })
  }, [isMobile])

  /**
   * Check if device is mobile
   */
  const checkMobile = useCallback(() => {
    if (typeof window === 'undefined') return false
    return window.innerWidth < BACKGROUND_CONFIG.MOBILE_BREAKPOINT || 
           !window.matchMedia('(hover: hover) and (pointer: fine)').matches
  }, [])

  // Generate background styles based on mouse position and device type
  const backgroundStyle = useMemo(() => {
    const { x, y } = mousePosition
    const inverseX = 100 - x
    const inverseY = 100 - y
    
    // Subtle base gradient for elegance
    const baseGradient = isDark 
      ? 'linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 50%, rgba(15, 23, 42, 1) 100%)'
      : 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 1) 50%, rgba(255, 255, 255, 1) 100%)'
    
    // Reduced opacities for more elegance
    const opacity = isMobile ? 0.08 : (isIdle ? 0.06 : 0.12)
    const secondaryOpacity = isMobile ? 0.06 : (isIdle ? 0.04 : 0.1)
    
    // Simple static gradient for mobile
    if (isMobile) {
      return `
        radial-gradient(circle 800px at 30% 40%, 
          rgba(249, 115, 22, ${opacity}) 0%, 
          transparent 70%),
        radial-gradient(circle 600px at 70% 60%, 
          rgba(59, 130, 246, ${opacity}) 0%, 
          transparent 70%),
        ${baseGradient}
      `
    }

    return `
      radial-gradient(circle 900px at ${x}% ${y}%, 
        rgba(249, 115, 22, ${opacity}) 0%, 
        rgba(234, 88, 12, ${secondaryOpacity}) 30%, 
        rgba(194, 65, 12, ${secondaryOpacity * 0.7}) 60%, 
        transparent 100%),
      radial-gradient(circle 700px at ${inverseX}% ${inverseY}%, 
        rgba(59, 130, 246, ${opacity * 0.9}) 0%, 
        rgba(37, 99, 235, ${secondaryOpacity}) 40%, 
        transparent 100%),
      radial-gradient(circle 800px at ${x * 0.7}% ${y * 1.2}%, 
        rgba(251, 146, 60, ${secondaryOpacity}) 0%, 
        rgba(245, 101, 101, ${secondaryOpacity * 0.8}) 50%, 
        transparent 100%),
      radial-gradient(circle 600px at ${inverseX * 0.8}% ${inverseY * 0.6}%, 
        rgba(99, 102, 241, ${secondaryOpacity}) 0%, 
        rgba(79, 70, 229, ${secondaryOpacity * 0.8}) 50%, 
        transparent 100%),
      ${baseGradient}
    `
  }, [mousePosition, isDark, isMobile, isIdle])

  useEffect(() => {
    setMounted(true)
    
    // Check mobile on mount and resize
    const updateMobile = () => {
      setIsMobile(checkMobile())
    }
    
    updateMobile()
    window.addEventListener('resize', updateMobile, { passive: true })
    
    // Add passive mouse listener for better performance (only on desktop)
    if (!checkMobile()) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true })
    }
    
    return () => {
      window.removeEventListener('resize', updateMobile)
      window.removeEventListener('mousemove', handleMouseMove)
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current)
      }
    }
  }, [handleMouseMove, checkMobile])

  // Show loading state with theme-appropriate background
  if (!mounted) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-slate-950" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div 
        className="absolute inset-0 transition-all ease-out"
        style={{
          background: backgroundStyle,
          transitionDuration: `${BACKGROUND_CONFIG.TRANSITION_DURATION}ms`,
          willChange: isMobile ? 'auto' : 'background', // Optimize for background changes on desktop only
          transform: 'translate3d(0, 0, 0)', // Force hardware acceleration
        }}
      />
    </div>
  )
}
