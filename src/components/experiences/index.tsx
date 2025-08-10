'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'

import Link from '@/components/link'
import { Badge } from '@/components/ui/badge'

import { EXPERIENCES } from '@/constants'
import { ANIMATION_VARIANTS } from '@/lib/animations'

/**
 * Professional experiences section component.
 * Displays a timeline of work experiences with companies and roles.
 * 
 * Features:
 * - Responsive grid layout with proper breakpoints
 * - Smooth entrance animation with optimized timing
 * - Interactive hover effects on individual items
 * - Present role indication with badge
 * - Memoized for performance optimization
 * - Accessible with proper semantic structure
 * 
 * @returns JSX.Element - The professional experiences section
 */
function Experiences() {
  return (
    <motion.section
      className="grid gap-5 pt-5"
      initial={ANIMATION_VARIANTS.immediate.initial}
      animate={ANIMATION_VARIANTS.immediate.animate}
      transition={ANIMATION_VARIANTS.immediate.transition}
      aria-labelledby="experiences-heading"
    >
      <h2 id="experiences-heading" className="sr-only">
        Professional Experiences
      </h2>

      {EXPERIENCES.map((experience) => (
        <article
          className="grid grid-cols-[150px_1fr] gap-2 md:gap-5 items-baseline group hover:translate-x-1 transition-transform duration-200"
          key={experience.company}
        >
          <div className="flex gap-2 items-center">
            <time 
              className="text-sm text-muted-foreground"
              dateTime={experience.year}
            >
              {experience.year}
            </time>

            {experience.present && (
              <Badge 
                className="rounded-full" 
                variant="secondary"
                aria-label="Current position"
              >
                Present
              </Badge>
            )}
          </div>

          <div>
            <span className="sr-only">Position:</span>
            <span>{experience.role} at </span>
            <Link href={experience.url}>
              {experience.company}
            </Link>
          </div>
        </article>
      ))}
    </motion.section>
  )
}

// Export memoized component to prevent unnecessary re-renders
export default memo(Experiences)
