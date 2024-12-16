'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useModal } from '@/contexts/ModalContext'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { isDarkMode, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { setSubmitModalOpen } = useModal()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Bounty Board', href: '/bounty-board' },
    { name: 'Leaderboard', href: '/leaderboard' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`w-full transition-all duration-300 font-space-mono ${
          isDarkMode
            ? isScrolled
              ? "bg-gray-900/90 shadow-md backdrop-blur-sm"
              : "bg-gray-900"
            : isScrolled
              ? "bg-[#E5E5E5]/90 shadow-md backdrop-blur-sm"
              : "bg-[#E5E5E5]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Updated Logo Section */}
            <div className="text-lg font-space-mono text-indigo-800 font-semibold tracking-wider">
              <Link
                href="/"
                className="text-center group flex items-center"
              >
                <Image
                  src={isDarkMode ? "/images/logos/sundai_logo_dark_horizontal.svg" : "/images/logos/sundai_logo_light_horizontal.svg"}
                  alt="Sundai Club Logo"
                  width={150}
                  height={100}
                  className="transition-transform duration-300 transform group-hover:scale-110 mr-2"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    pathname === item.href
                      ? 'text-primary bg-primary/10'
                      : `${isDarkMode ? 'text-gray-200' : 'text-gray-800'} hover:text-primary`
                  }`}
                >
                  <span className="text-sm font-fira-code">
                    {item.name}
                  </span>
                </Link>
              ))}

              <button
                onClick={() => setSubmitModalOpen(true)}
                className={`px-4 py-2 rounded-lg ${
                  isDarkMode
                    ? "bg-indigo-700 hover:bg-indigo-600"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } text-white transition-colors`}
              >
                <span className="text-sm font-fira-code">
                  Submit Bounty
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg"
                aria-label="Toggle menu"
              >
                <div className={`w-6 h-0.5 mb-1.5 transition-all ${isDarkMode ? 'bg-white' : 'bg-black'} ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
                <div className={`w-6 h-0.5 mb-1.5 ${isDarkMode ? 'bg-white' : 'bg-black'} ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-black'} ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-2 rounded-lg ${
                  pathname === item.href
                    ? 'text-primary bg-primary/10'
                    : `${isDarkMode ? 'text-gray-200' : 'text-gray-800'} hover:text-primary`
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-sm font-fira-code">
                  {item.name}
                </span>
              </Link>
            ))}
            
            <button
              onClick={() => setSubmitModalOpen(true)}
              className={`block px-4 py-2 mt-2 rounded-lg text-center ${
                isDarkMode
                  ? "bg-indigo-700 hover:bg-indigo-600"
                  : "bg-indigo-600 hover:bg-indigo-700"
              } text-white transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-sm font-fira-code">
                Submit Bounty
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
