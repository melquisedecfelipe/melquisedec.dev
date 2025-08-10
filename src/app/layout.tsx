import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Container from '@/components/container'
import CustomCursor from '@/components/custom-cursor'
import FluidBackground from '@/components/fluid-background'

import { ThemeProvider } from '@/providers/theme-provider'

import { ME } from '@/constants'

import './globals.css'

const font = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: {
    template: '%s | melqui',
    default: 'melqui'
  },
  description: ME.binary
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <FluidBackground />

          <Container>
            {children}

            <Analytics />
          </Container>
        </ThemeProvider>
      </body>
    </html>
  )
}
