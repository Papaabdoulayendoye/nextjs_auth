import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js 14 Complete Auth',
  description: 'Get Started with an complete next.js 14 authentication by Antonio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={'logo.svg'} type="image/x-icon" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
