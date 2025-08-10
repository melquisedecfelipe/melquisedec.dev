'use client'

import { motion } from 'framer-motion'
import { memo, useMemo } from 'react'

import { CURRENT_COMPANY, ME } from '@/constants'
import { ANIMATION_VARIANTS } from '@/lib/animations'
import Icon from '../icon'

/**
 * Header component displaying profile information with smooth entrance animation.
 * Shows name, description, and current role with conditional cursor styling.
 * 
 * @returns JSX.Element - The header component
 */
function Header() {
  // Memoize device capabilities check
  const hasHoverCapability = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches
  }, [])

  return (
    <motion.nav
      initial={ANIMATION_VARIANTS.immediate.initial}
      animate={ANIMATION_VARIANTS.immediate.animate}
      transition={ANIMATION_VARIANTS.immediate.transition}
      className={hasHoverCapability ? 'cursor-none' : ''}
    >
      <Icon />

      <div className="flex flex-col md:flex-row md:gap-2 items-baseline mt-2">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {ME.title}
        </h3>

        <p className="text-sm text-muted-foreground">
          {ME.description}
        </p>
      </div>

      <p className="hidden md:block text-lg font-semibold">
        {CURRENT_COMPANY.role}
      </p>
    </motion.nav>
  )
}

// Export memoized component to prevent unnecessary re-renders
export default memo(Header)
