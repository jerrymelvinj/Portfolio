import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TLJV8TNQ6B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TLJV8TNQ6B');
          `}
        </Script>
      </head>
      <body className={spaceGrotesk.variable} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
