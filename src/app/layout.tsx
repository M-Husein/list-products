import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'List Products',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="p-4 border-b shadow sticky top-0 z-10 bg-gray-100">
          <Link href="/" className="outline-none focus_ring hover_text-sky-600 font-medium">List Products</Link>
        </nav>

        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
