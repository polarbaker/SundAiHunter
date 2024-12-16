'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import { usePullToRefresh } from "@/hooks/usePullToRefresh";
import { useTheme } from "@/contexts/ThemeContext";
import StatsSection from "@/components/StatsSection";
import SubmitBountyModal from '@/components/SubmitBountyModal';
import { BountyType } from '@/app/bounty-board/page';

export default function Home() {
  const [isTypingDone, setIsTypingDone] = useState(false);
  const { isDarkMode } = useTheme();
  const [submitModalOpen, setSubmitModalOpen] = useState(false);

  usePullToRefresh();

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

  const topHunters = [
    { rank: 1, name: "Guido Vranken", points: "52100", trophy: "🏆" },
    { rank: 2, name: "Martin Holst Swende", points: "45000", trophy: "🥈" },
    { rank: 3, name: "protolambda", points: "42400", trophy: "🥉" },
    { rank: 4, name: "Sam Sun", points: "35000" },
    { rank: 5, name: "nrv (@nervoir)", points: "31000" },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-900 to-black text-gray-100"
          : "bg-gradient-to-b from-[#E5E5E5] to-[#F0F0F0] text-gray-800"
      } font-space-mono`}
    >
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-26 px-4 md:px-8 overflow-hidden">
        <div className="container mx-auto relative z-10 h-[400px] overflow-hidden">
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

          {/* Updated Hero Content */}
          <div className="relative z-20">
            <motion.div
              className="max-w-4xl mx-auto text-left"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
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
                      .callFunction(() => {
                        setIsTypingDone(true);
                      })
                      .start();
                  }}
                  options={{
                    cursor: '|',
                    cursorClassName: `${isDarkMode ? "text-gray-100" : "text-gray-900"}`,
                    wrapperClassName: `${isDarkMode ? "text-gray-100" : "text-gray-900"}`
                  }}
                />
              </h1>
              <p className={`text-lg md:text-xl mb-8 max-w-2xl ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                The Bounties Network empowers humans to incentivize and self-organize, from freelancing 
                to grassroots social action, and anything in between. Whether it's for research, content 
                translation, or video production, create projects, collaborate, and get paid for doing 
                great work in any domain.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/bounty-board" 
                  className="btn btn-primary text-lg px-8 py-3"
                >
                  Explore Bounties
                </Link>
                <button
                  onClick={() => setSubmitModalOpen(true)}
                  className="btn btn-secondary text-lg px-8 py-3 flex items-center gap-2"
                >
                  <span>Join our Slack</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.4 2.4c-.3-.3-.7-.4-1.1-.4-.4 0-.8.1-1.1.4l-14 14c-.3.3-.4.7-.4 1.1 0 .4.1.8.4 1.1.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4l14-14c.3-.3.4-.7.4-1.1 0-.4-.1-.8-.4-1.1z"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bounties and Leaderboard Grid */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bounties Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="py-24"
          >
            <div className="max-w-screen-xl">
              <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Featured Bounties
              </h2>
              <div className="grid gap-6">
                {featuredBounties.map((bounty) => (
                  <Link 
                    key={bounty.id}
                    href={`/bounty/${bounty.id}`}
                  >
                    <div 
                      className={`rounded-xl overflow-hidden transition-all duration-200 ${
                        isDarkMode 
                          ? 'bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700' 
                          : 'bg-white/50 hover:bg-white shadow-lg'
                      }`}
                    >
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
                ))}
              </div>
            </div>
          </motion.section>

          {/* Leaderboard Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } rounded-xl shadow-lg p-6 h-fit mt-24`}
          >
            <h2 className="text-2xl font-bold mb-6">Top Hunters</h2>
            <div className="space-y-4">
              {topHunters.map((hunter) => (
                <div 
                  key={hunter.rank} 
                  className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                    isDarkMode 
                      ? 'hover:bg-gray-700' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500 w-6">{hunter.rank}</span>
                    <span className="font-medium">{hunter.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {hunter.points} points
                    </span>
                    {hunter.trophy && <span>{hunter.trophy}</span>}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/leaderboard"
                className="text-primary hover:text-primary-hover font-medium"
              >
                See full leaderboards
              </Link>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Stats Section - Added right before the footer */}
      <div className="mt-24">
        <StatsSection />
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={`${
          isDarkMode
            ? "bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200"
            : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700"
        } py-6 md:py-2`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © 2024 Sundai Club. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/sundai-club"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href="https://twitter.com/sundai_club"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com/company/sundaiclub"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
            <Link
              href="https://instagram.com/sundai_club"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.footer>

      <SubmitBountyModal
        isOpen={submitModalOpen}
        onClose={() => setSubmitModalOpen(false)}
      />
    </div>
  );
}
