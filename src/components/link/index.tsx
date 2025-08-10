import { ArrowUpRight } from 'lucide-react'
import NextLink from 'next/link'
import { memo } from 'react'

import { cn } from '@/lib/utils'

interface LinkProps {
  children: React.ReactNode
  className?: string
  href: string
}

/**
 * Custom Link component with external link styling and security enhancements.
 * Automatically opens external links in new tab with security attributes.
 * 
 * @param children - The content to be rendered inside the link
 * @param className - Optional additional CSS classes
 * @param href - The destination URL
 * @returns JSX.Element - A styled external link with arrow icon
 */
function Link({ children, className, href }: LinkProps) {
  // Determine if link is external
  const isExternal = href.startsWith('http') || href.startsWith('https')
  
  return (
    <NextLink
      className={cn(
        'inline-flex items-center w-max transition-all break-words hover:text-foreground text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 cursor-none',
        className
      )}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined} // Security: Prevent window.opener access
      aria-label={isExternal ? `${children} (opens in new tab)` : undefined}
    >
      {children}

      {isExternal && <ArrowUpRight className="size-4" aria-hidden="true" />}
    </NextLink>
  )
}

// Export memoized component to prevent unnecessary re-renders
export default memo(Link)
