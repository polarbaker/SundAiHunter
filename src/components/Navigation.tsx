'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:h-16 md:items-center md:justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-base font-medium text-gray-900">
              Sundai Club
            </Link>
            <Link href="/bounty-board" className="text-base text-gray-600 hover:text-gray-900">
              Bounty Board
            </Link>
            <Link href="/submit-bounty" className="text-base text-gray-600 hover:text-gray-900">
              Submit a Bounty
            </Link>
            <Link href="/sponsor-dashboard" className="text-base text-gray-600 hover:text-gray-900">
              Sponsor Dashboard
            </Link>
          </div>
          <button className="text-base text-gray-600 hover:text-gray-900">
            Sign In
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex h-16 items-center justify-between md:hidden">
          <Link href="/" className="text-base font-medium text-gray-900">
            Sundai Club
          </Link>
          <button
            type="button"
            className="text-gray-600 hover:text-gray-900"
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
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/bounty-board"
              className="block py-2 text-base text-gray-600 hover:text-gray-900"
            >
              Bounty Board
            </Link>
            <Link
              href="/submit-bounty"
              className="block py-2 text-base text-gray-600 hover:text-gray-900"
            >
              Submit a Bounty
            </Link>
            <Link
              href="/sponsor-dashboard"
              className="block py-2 text-base text-gray-600 hover:text-gray-900"
            >
              Sponsor Dashboard
            </Link>
            <button className="block w-full text-left py-2 text-base text-gray-600 hover:text-gray-900">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
