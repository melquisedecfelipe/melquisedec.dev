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
        'hover:underline inline-flex items-center w-max transition-all break-words hover:text-foreground',
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
