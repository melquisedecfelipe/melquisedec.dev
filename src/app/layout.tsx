import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Container from '@/components/container'
import { ME } from '@/constants'
import { ThemeProvider } from '@/providers/theme-provider'
import { Analytics } from '@vercel/analytics/react'

const jetbrains = JetBrains_Mono({ subsets: ['latin'] })

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
      <body className={jetbrains.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Container>
            {children}

            <Analytics />
          </Container>
        </ThemeProvider>
      </body>
    </html>
  )
}
