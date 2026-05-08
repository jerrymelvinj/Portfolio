import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Jerry Melvin J - Portfolio',
  description:
    'Senior product designer with 7+ years shipping 0-to-1 and 1-to-N products. Specialized in complex workflows: checkout, onboarding, health dashboards.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
