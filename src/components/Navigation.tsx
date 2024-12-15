'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/bounty-board', label: 'Bounty Board' },
    { href: '/leaderboard', label: 'Leaderboard' },
    { href: '/submit-bounty', label: 'Submit a Bounty' },
    { href: '/hacker-dashboard', label: 'Hacker Dashboard' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-secondary/80 backdrop-blur-lg border-b border-text-secondary/10">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:h-16 md:items-center md:justify-between">
          <div className="flex items-center space-x-1">
            <Link 
              href="/" 
              className={`nav-link ${pathname === '/' ? 'active' : ''}`}
            >
              Sundai Club
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${pathname === item.href ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button className="primary-button">
            Connect Wallet
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex h-16 items-center justify-between md:hidden">
          <Link 
            href="/" 
            className={`nav-link ${pathname === '/' ? 'active' : ''}`}
          >
            Sundai Club
          </Link>
          <button
            type="button"
            className="text-text-secondary hover:text-text-primary transition-colors duration-200"
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
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-nav-link ${pathname === item.href ? 'text-primary' : 'text-text-secondary'}`}
                >
                  {item.label}
                </Link>
              ))}
              <button className="w-full primary-button mt-4">
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
