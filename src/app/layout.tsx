import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { Analytics } from '@vercel/analytics/react'

const jetbrains = JetBrains_Mono({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: {
    template: '%s | melquisedec',
    default: 'melquisedec.dev'
  },
  description:
    '01001111 01101100 11100001 00100000 01001101 01110101 01101110 01100100 01101111 00100001'
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
          {children}

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
