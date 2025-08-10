'use client'

import { motion } from 'framer-motion'
import { memo, useMemo } from 'react'

/**
 * Interactive icon component with animated hover and tap effects.
 * Displays a gradient circular icon that responds to user interactions.
 * 
 * Features:
 * - Responsive sizing (smaller on mobile, larger on desktop)
 * - Smooth hover and tap animations
 * - Dark mode support with adaptive gradients
 * - Optimized animations with memoized configurations
 * - Accessible with proper ARIA attributes
 * 
 * @returns JSX.Element - An interactive animated icon
 */
function Icon() {
  // Memoize animation configurations to prevent recreation on each render
  const hoverAnimation = useMemo(() => ({
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.2, ease: 'easeOut' as const }
  }), [])

  const tapAnimation = useMemo(() => ({
    scale: 0.95,
    rotate: -5,
    transition: { duration: 0.1 }
  }), [])

  const initialState = useMemo(() => ({
    rotate: 0,
    scale: 1
  }), [])

  return (
    <motion.button
      className="size-6 md:size-8 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 grid place-content-center rounded-full cursor-none"
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
      initial={initialState}
      aria-label="Profile icon"
      type="button"
      tabIndex={0}
    />
  )
}

// Export memoized component to prevent unnecessary re-renders
export default memo(Icon)
