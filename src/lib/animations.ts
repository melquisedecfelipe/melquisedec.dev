/**
 * Elegant animation configurations for smooth, natural motion
 */

// Fade in animation - more subtle and elegant
const FADE_IN_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1] as const, // Custom cubic-bezier for smooth easing
  },
} as const

// Gentle slide with blur effect - very modern
const BLUR_SLIDE_ANIMATION = {
  initial: { opacity: 0, y: 8, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: {
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1] as const, // Smooth ease-out curve
  },
} as const

// Scale with fade - subtle growth effect
const SCALE_FADE_ANIMATION = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.6,
    ease: [0.23, 1, 0.32, 1] as const, // Smooth spring-like easing
  },
} as const

// Animation with custom delay
export const createDelayedAnimation = (baseAnimation: typeof FADE_IN_ANIMATION, delay: number = 0) => ({
  ...baseAnimation,
  transition: {
    ...baseAnimation.transition,
    delay,
  },
} as const)

// Animation variants with different styles and delays
export const ANIMATION_VARIANTS = {
  // Immediate animations (no delay)
  immediate: FADE_IN_ANIMATION,
  
  // Staggered fade animations
  short: createDelayedAnimation(FADE_IN_ANIMATION, 0.1),
  medium: createDelayedAnimation(FADE_IN_ANIMATION, 0.2),
  long: createDelayedAnimation(FADE_IN_ANIMATION, 0.3),
  
  // Alternative styles for variety
  blur: BLUR_SLIDE_ANIMATION,
  scale: SCALE_FADE_ANIMATION,
} as const

// Export individual animations for custom use
export { FADE_IN_ANIMATION, BLUR_SLIDE_ANIMATION, SCALE_FADE_ANIMATION }
