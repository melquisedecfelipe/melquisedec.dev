import { memo } from 'react'

interface ContainerProps {
  children: React.ReactNode
}

/**
 * Main container component that provides responsive layout and spacing.
 * Centers content with maximum width constraints and responsive padding.
 * 
 * Features:
 * - Responsive max-width (700px) for optimal reading experience
 * - Adaptive padding that scales with screen size
 * - Full height layout for proper viewport utilization
 * - Semantic main element for accessibility
 * - Memoized for performance optimization
 * 
 * @param children - The content to be rendered inside the container
 * @returns JSX.Element - A centered, responsive main container
 */
function Container({ children }: ContainerProps) {
  return (
    <main className="max-w-[700px] xl:max-w-full m-auto p-5 md:p-10 lg:p-20 h-screen">
      {children}
    </main>
  )
}

// Export memoized component to prevent unnecessary re-renders
export default memo(Container)
