'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-secondary border-b border-text-secondary/10">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:h-16 md:items-center md:justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-base font-medium text-text-primary hover:text-primary">
              Sundai Club
            </Link>
            <Link href="/bounty-board" className="text-base text-text-secondary hover:text-text-primary">
              Bounty Board
            </Link>
            <Link href="/submit-bounty" className="text-base text-text-secondary hover:text-text-primary">
              Submit a Bounty
            </Link>
            <Link href="/hacker-dashboard" className="text-base text-text-secondary hover:text-text-primary">
              Hacker Dashboard
            </Link>
          </div>
          <button className="text-base text-text-secondary hover:text-text-primary">
            Connect Wallet
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex h-16 items-center justify-between md:hidden">
          <Link href="/" className="text-base font-medium text-text-primary hover:text-primary">
            Sundai Club
          </Link>
          <button
            type="button"
            className="text-text-secondary hover:text-text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/bounty-board"
                className="block rounded-md px-3 py-2 text-base text-text-secondary hover:bg-background hover:text-text-primary"
              >
                Bounty Board
              </Link>
              <Link
                href="/submit-bounty"
                className="block rounded-md px-3 py-2 text-base text-text-secondary hover:bg-background hover:text-text-primary"
              >
                Submit a Bounty
              </Link>
              <Link
                href="/hacker-dashboard"
                className="block rounded-md px-3 py-2 text-base text-text-secondary hover:bg-background hover:text-text-primary"
              >
                Hacker Dashboard
              </Link>
              <button
                className="block w-full text-left rounded-md px-3 py-2 text-base text-text-secondary hover:bg-background hover:text-text-primary"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
