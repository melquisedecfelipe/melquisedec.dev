import { ArrowUpRight } from 'lucide-react'
import NextLink from 'next/link'

import { cn } from '@/lib/utils'

interface LinkProps {
  children: React.ReactNode
  className?: string
  href: string
}

export default function Link({ children, className, href }: LinkProps) {
  return (
    <NextLink
      className={cn(
        'hover:underline inline-flex items-center w-max transition-all break-words hover:text-foreground text-violet-500 hover:text-violet-600 dark:text-violet-400 dark:hover:text-violet-500',
        className
      )}
      href={href}
      target="_blank"
    >
      {children}

      <ArrowUpRight className="size-4" />
    </NextLink>
  )
}
