import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Sundai Club',
  description: 'Connect with developers and fund open source projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background">
        <Navigation />
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  )
}