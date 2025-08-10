'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { memo, useCallback } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

/**
 * Theme toggle component with dropdown menu for theme selection.
 * Provides options for light, dark, and system theme preferences.
 * 
 * Features:
 * - Animated icon transitions between light/dark states
 * - Keyboard accessible dropdown menu
 * - System theme detection support
 * - Optimized click handlers with useCallback
 * - Memoized for performance optimization
 * - Custom styling with proper focus states
 * 
 * @returns JSX.Element - A theme toggle dropdown button
 */
function ThemeToggle() {
  const { setTheme } = useTheme()

  // Memoize theme selection handlers to prevent unnecessary re-renders
  const handleLightTheme = useCallback(() => {
    setTheme('light')
  }, [setTheme])

  const handleDarkTheme = useCallback(() => {
    setTheme('dark')
  }, [setTheme])

  const handleSystemTheme = useCallback(() => {
    setTheme('system')
  }, [setTheme])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="cursor-none hover:bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0" 
          size="icon"
          aria-label="Toggle theme"
        >
          <SunIcon 
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-200 dark:-rotate-90 dark:scale-0" 
            aria-hidden="true"
          />
          <MoonIcon 
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100" 
            aria-hidden="true"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        <DropdownMenuItem onClick={handleLightTheme}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDarkTheme}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSystemTheme}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// Export memoized component to prevent unnecessary re-renders
export default memo(ThemeToggle)
