'use client';

import './globals.css'
import { Space_Mono, Fira_Code, Montserrat } from 'next/font/google'
import Navigation from '@/components/Navigation'
import { ThemeProvider } from '@/contexts/ThemeContext'
import SubmitBountyModal from '@/components/SubmitBountyModal'
import { useState } from 'react';
import { ModalProvider } from '@/contexts/ModalContext'

// Font configurations
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceMono.variable} ${firaCode.variable} ${montserrat.variable}`}>
        <ThemeProvider>
          <ModalProvider>
            <div className="min-h-screen flex flex-col bg-background text-text-primary">
              <Navigation />
              <main className="flex-1 pt-16">
                {children}
              </main>
              <SubmitBountyModal />
            </div>
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}