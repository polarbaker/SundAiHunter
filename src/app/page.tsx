'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import { usePullToRefresh } from "@/hooks/usePullToRefresh";
import { useTheme } from "@/contexts/ThemeContext";
import { BountyType } from '@/app/bounty-board/page';
import Leaderboard from '@/components/Leaderboard';

// Constants
const featuredBounties: BountyType[] = [
  {
    id: "1",
    title: "Implement Dark Mode for React Component Library",
    description: "Add dark mode support to our open source React component library using CSS variables and theme context.",
    sponsorName: "OpenSource Labs",
    prize: 500,
    type: "Remote Small",
    deadline: "2024-02-01",
    status: "Open",
    category: "Frontend",
    image: "/images/default_project_thumbnail_dark.svg"
  },
  {
    id: "2",
    title: "Build AI-Powered Code Review Bot",
    description: "Create a GitHub bot that uses AI to provide intelligent code review suggestions and improvements.",
    sponsorName: "AI Solutions Inc",
    prize: 750,
    type: "Remote Medium",
    deadline: "2024-02-15",
    status: "Open",
    category: "Backend",
    image: "/images/default_project_thumbnail_dark.svg"
  },
  {
    id: "3",
    title: "Develop Real-time Collaboration Features",
    description: "Implement real-time collaboration features for our AI prototype platform using WebSocket.",
    sponsorName: "Tech Innovators",
    prize: 1000,
    type: "Remote Large",
    deadline: "2024-02-28",
    status: "Open",
    category: "Backend",
    image: "/images/default_project_thumbnail_dark.svg"
  }
];

const topHunters = [
  { rank: 1, name: "Guido Vranken", points: "52100", trophy: "🏆" },
  { rank: 2, name: "Martin Holst Swende", points: "45000", trophy: "🥈" },
  { rank: 3, name: "protolambda", points: "42400", trophy: "🥉" },
  { rank: 4, name: "Sam Sun", points: "35000" },
  { rank: 5, name: "nrv (@nervoir)", points: "31000" },
];

// Animation variants
const stompVariants = {
  hidden: { scale: 2, opacity: 0, y: -50 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.5,
    },
  },
};

// Add this constant (matching the one from Navigation)
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Bounty Board', href: '/bounty-board' },
  { name: 'Leaderboard', href: '/leaderboard' },
];

// Components
const BackgroundPattern = () => (
  <div
    className="absolute inset-0 animate-scroll-vertical"
    style={{
      backgroundImage: "url('/images/background_sundai.svg')",
      backgroundSize: "300px auto",
      backgroundRepeat: "repeat",
      WebkitMaskImage: "linear-gradient(to bottom, transparent, black 50%, transparent)",
      maskImage: "linear-gradient(to bottom, transparent, black 50%, transparent)"
    }}
  />
);

export default function Home() {
  const [isTypingDone, setIsTypingDone] = useState(false);
  const { isDarkMode } = useTheme();
  const [submitModalOpen, setSubmitModalOpen] = useState(false);

  usePullToRefresh();

  const FeaturedBountyCard = ({ bounty }: { bounty: BountyType }) => (
    <Link href={`/bounty/${bounty.id}`}>
      <div className={`rounded-xl overflow-hidden transition-all duration-200 ${
        isDarkMode 
          ? 'bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700' 
          : 'bg-white/50 hover:bg-white shadow-lg'
      }`}>
        <div className="relative h-48 w-full">
          <Image
            src={bounty.image}
            alt={bounty.title}
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className={`text-lg font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                {bounty.title}
              </h3>
              <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {bounty.description}
              </p>
            </div>
            <span className="text-primary font-mono font-bold">
              ${bounty.prize.toLocaleString()}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary border border-primary/20">
              {bounty.category}
            </span>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary border border-primary/20">
              {bounty.type}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className={`min-h-screen ${
      isDarkMode
        ? "bg-gradient-to-b from-gray-900 to-black text-gray-100"
        : "bg-gradient-to-b from-[#E5E5E5] to-[#F0F0F0] text-gray-800"
    } font-space-mono relative`}>
      <BackgroundPattern />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-26 px-4 md:px-8">
        <div className="container mx-auto relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-left"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Hero Title */}
            <h1 className={`font-semibold text-4xl sm:text-5xl md:text-6xl mb-6 font-space-mono tracking-tight ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(70)
                    .typeString("Changing the way")
                    .pauseFor(300)
                    .typeString("<br />we collaborate.")
                    .callFunction(() => setIsTypingDone(true))
                    .start();
                }}
                options={{
                  cursor: '|',
                  cursorClassName: isDarkMode ? "text-gray-100" : "text-gray-900",
                  wrapperClassName: isDarkMode ? "text-gray-100" : "text-gray-900"
                }}
              />
            </h1>

            {/* Hero Description */}
            <motion.p
              className={`text-lg md:text-xl mb-8 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isTypingDone ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              Join a community of innovators building the future of AI. 
              Find exciting bounties, collaborate with talented developers, 
              and earn rewards for your contributions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isTypingDone ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSubmitModalOpen(true)}
                className="px-8 py-3 rounded-lg bg-primary text-white font-medium text-lg hover:bg-primary-hover transition-colors"
              >
                Submit a Bounty
              </motion.button>
              <Link href="/bounty-board">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-lg font-medium text-lg border-2 ${
                    isDarkMode 
                      ? "border-gray-700 text-gray-300 hover:bg-gray-800" 
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  } transition-colors`}
                >
                  Explore Bounties
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isTypingDone ? 1 : 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className={`p-6 rounded-xl ${
                isDarkMode ? "bg-gray-800/50" : "bg-white/50"
              } backdrop-blur-sm`}>
                <h3 className="text-3xl font-bold text-primary mb-2">$50K+</h3>
                <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Total Bounties Awarded
                </p>
              </div>
              <div className={`p-6 rounded-xl ${
                isDarkMode ? "bg-gray-800/50" : "bg-white/50"
              } backdrop-blur-sm`}>
                <h3 className="text-3xl font-bold text-primary mb-2">200+</h3>
                <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Active Hunters
                </p>
              </div>
              <div className={`p-6 rounded-xl ${
                isDarkMode ? "bg-gray-800/50" : "bg-white/50"
              } backdrop-blur-sm`}>
                <h3 className="text-3xl font-bold text-primary mb-2">98%</h3>
                <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Satisfaction Rate
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Featured Bounties Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="py-24"
          >
            <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Featured Bounties
            </h2>
            <div className="grid gap-6">
              {featuredBounties.map((bounty) => (
                <FeaturedBountyCard key={bounty.id} bounty={bounty} />
              ))}
            </div>
          </motion.section>

          {/* Leaderboard Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-24"
          >
            <Leaderboard />
          </motion.section>
        </div>
      </div>

      {/* Footer */}
      <footer className={`mt-24 py-12 border-t ${
        isDarkMode ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className={`text-lg font-bold ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>
                Sundai Club
              </h3>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Building & Launching AI Prototypes Every Sunday
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className={`text-lg font-bold ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>
                Quick Links
              </h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className={`text-sm ${
                        isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div className="space-y-4">
              <h3 className={`text-lg font-bold ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>
                Community
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://twitter.com/sundaiclub" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm ${
                      isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a 
                    href="https://discord.gg/sundaiclub" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm ${
                      isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/sundaiclub" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm ${
                      isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className={`text-lg font-bold ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>
                Stay Updated
              </h3>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Subscribe to our newsletter for weekly updates
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`flex-1 px-4 py-2 rounded-lg ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder:text-gray-500' 
                      : 'bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-500'
                  } border focus:outline-none focus:ring-2 focus:ring-primary/50`}
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className={`mt-12 pt-8 border-t ${
            isDarkMode ? 'border-gray-800' : 'border-gray-200'
          } text-center`}>
            <p className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © {new Date().getFullYear()} Sundai Club. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
