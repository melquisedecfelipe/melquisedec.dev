'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'

import Link from '@/components/link'
import ThemeToggle from '@/components/theme-toggle'

import { SOCIALS } from '@/constants'
import { ANIMATION_VARIANTS } from '@/lib/animations'

/**
 * Social links section component with theme toggle.
 * Displays social media links with smooth entrance animation.
 * 
 * Features:
 * - Animated entrance with staggered timing
 * - Responsive layout with proper spacing
 * - Memoized for performance optimization
 * - Accessible with screen reader support
 * 
 * @returns JSX.Element - The social links section with theme toggle
 */
function Socials() {
  return (
    <motion.section
      className="relative group hover:translate-x-1 transition-transform duration-200"
      initial={ANIMATION_VARIANTS.immediate.initial}
      animate={ANIMATION_VARIANTS.immediate.animate}
      transition={ANIMATION_VARIANTS.immediate.transition}
      aria-labelledby="socials-heading"
    >
      <h2 id="socials-heading" className="sr-only">
        Social Media Links
      </h2>

      <div className="flex justify-between items-center mt-5 gap-2 md:gap-5 xl:justify-normal">
        <nav aria-label="Social media links" className="flex gap-2 md:gap-5 relative">
          {SOCIALS.map(social => (
            <Link key={social.name} href={social.url}>
              {social.name}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </motion.section>
  )
}

// Export memoized component to prevent unnecessary re-renders
export default memo(Socials)
