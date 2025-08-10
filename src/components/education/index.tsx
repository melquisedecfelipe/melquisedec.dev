'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'

import { EDUCATION } from '@/constants'
import { ANIMATION_VARIANTS } from '@/lib/animations'

/**
 * Education section component displaying academic background.
 * Shows educational history with institutions and time periods.
 * 
 * Features:
 * - Responsive grid layout optimized for different screen sizes
 * - Smooth entrance animation with staggered timing
 * - Interactive hover effects on individual items
 * - Memoized for performance optimization
 * - Accessible with proper semantic structure
 * - Clear visual hierarchy with emphasized course names
 * 
 * @returns JSX.Element - The education section with academic history
 */
function Education() {
  return (
    <motion.section
      className="grid gap-5 pt-5"
      initial={ANIMATION_VARIANTS.immediate.initial}
      animate={ANIMATION_VARIANTS.immediate.animate}
      transition={ANIMATION_VARIANTS.immediate.transition}
      aria-labelledby="education-heading"
    >
      <h2 id="education-heading" className="sr-only">
        Education Background
      </h2>

      {EDUCATION.map((education) => (
        <article
          className="grid grid-cols-[150px_1fr] gap-2 md:gap-5 items-baseline group hover:translate-x-1 transition-transform duration-200"
          key={education.institution}
        >
          <time 
            className="text-sm text-muted-foreground"
            dateTime={education.period.replace(' ', '-')} // Convert "2021 2022" to "2021-2022" for better datetime format
          >
            {education.period}
          </time>

          <div>
            <h3 className="text-primary font-medium">
              {education.course}
            </h3>

            <p className="text-sm text-muted-foreground">
              {education.institution}
            </p>
          </div>
        </article>
      ))}
    </motion.section>
  )
}

// Export memoized component to prevent unnecessary re-renders
export default memo(Education)
