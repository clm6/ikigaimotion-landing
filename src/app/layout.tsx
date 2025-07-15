import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ikigai Motion - Find Your Purpose',
  description: 'Discover your ikigai and unlock your true potential with our curated learning resources and personal development tools.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name='impact-site-verification' value='aba57c2c-bccb-499d-a353-dc98bbdf722f' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 