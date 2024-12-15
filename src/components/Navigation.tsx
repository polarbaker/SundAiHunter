'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon, HomeIcon, TrophyIcon, PlusIcon, UserIcon } from '@heroicons/react/24/outline'
import SubmitBountyModal from './SubmitBountyModal'

const navItems = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/bounty-board', label: 'Bounties', icon: TrophyIcon },
  { href: '/hacker-dashboard', label: 'Dashboard', icon: UserIcon },
]

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [submitModalOpen, setSubmitModalOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-b border-border/40 z-50">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="relative group"
            >
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Sundai Club
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-light transition-all group-hover:w-full" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      relative px-4 py-2 rounded-lg flex items-center space-x-2 transition-all
                      ${isActive 
                        ? 'text-primary bg-primary/10' 
                        : 'text-text-secondary hover:text-text-primary hover:bg-background-hover'
                      }
                    `}
                  >
                    <Icon className={`h-5 w-5 transition-colors ${isActive ? 'text-primary' : ''}`} />
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setSubmitModalOpen(true)}
                className="px-4 py-2 rounded-lg bg-background-secondary text-text-primary hover:bg-background-hover transition-colors flex items-center space-x-2"
              >
                <PlusIcon className="h-5 w-5" />
                <span>Submit Bounty</span>
              </button>
              <button className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors">
                Connect Wallet
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-background-hover transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden border-t border-border/40"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`
                        flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                        ${isActive 
                          ? 'text-primary bg-primary/10' 
                          : 'text-text-secondary hover:text-text-primary hover:bg-background-hover'
                        }
                      `}
                    >
                      <Icon className={`h-5 w-5 ${isActive ? 'text-primary' : ''}`} />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
                
                <div className="pt-4 space-y-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setSubmitModalOpen(true)
                    }}
                    className="w-full px-4 py-3 rounded-lg bg-background-secondary text-text-primary hover:bg-background-hover transition-colors flex items-center justify-center space-x-2"
                  >
                    <PlusIcon className="h-5 w-5" />
                    <span>Submit Bounty</span>
                  </button>
                  
                  <button className="w-full px-4 py-3 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors">
                    Connect Wallet
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {submitModalOpen && (
          <SubmitBountyModal
            isOpen={submitModalOpen}
            onClose={() => setSubmitModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
