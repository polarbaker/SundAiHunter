'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import { usePullToRefresh } from "@/hooks/usePullToRefresh";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
  const [isTypingDone, setIsTypingDone] = useState(false);
  const { isDarkMode } = useTheme();

  usePullToRefresh();

  const bounties = [
    {
      id: 1,
      title: "Implement Dark Mode for React Component Library",
      description: "Add dark mode support to our open source React component library using CSS variables and theme context.",
      amount: "$500",
      status: "Open",
      technologies: ["React", "TypeScript"]
    },
    {
      id: 2,
      title: "Build AI-Powered Code Review Bot",
      description: "Create a GitHub bot that uses AI to provide intelligent code review suggestions and improvements.",
      amount: "$750",
      status: "Open",
      technologies: ["Python", "OpenAI", "GitHub API"]
    },
    {
      id: 3,
      title: "Develop Real-time Collaboration Features",
      description: "Implement real-time collaboration features for our AI prototype platform using WebSocket.",
      amount: "$1000",
      status: "Open",
      technologies: ["WebSocket", "Node.js", "Redis"]
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

          {/* Hero Content */}
          <div className="relative z-20">
            <motion.div
              className="w-full text-center mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1
                className={`font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 font-space-mono tracking-tight ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Sundai
              </h1>
              <p
                className={`text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto font-fira-code ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Building & Launching AI Prototypes Every Sunday.
              </p>

              <div
                className={`grid grid-cols-1 sm:grid-cols-3 gap-4 items-center max-w-lg mx-auto mb-12 ${
                  isDarkMode
                    ? "bg-gray-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"
                    : "bg-gray-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
                } rounded-xl p-4 sm:p-6`}
              >
                <motion.div
                  className="flex justify-center items-center relative rounded-lg p-2 sm:p-4"
                  variants={stompVariants}
                  initial="hidden"
                  animate={isTypingDone ? "visible" : "hidden"}
                  transition={{ delay: 0.2 }}
                >
                  <Image
                    src="/affiliations/mit_logo_std_rgb_silver-gray.svg"
                    style={{ filter: "brightness(1.2)" }}
                    className="w-16 h-16 sm:w-24 sm:h-24 opacity-90"
                    alt="Logo MIT"
                    width={96}
                    height={96}
                  />
                </motion.div>
                <div
                  className={`text-base sm:text-xl font-mono h-full mt-2 sm:mt-8 text-center px-2 sm:px-4 py-1 sm:py-2 rounded-lg ${
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .changeDelay(70)
                        .typeString("We are hackers from")
                        .callFunction(() => {
                          setIsTypingDone(true);
                        })
                        .start();
                    }}
                  />
                </div>
                <motion.div
                  className="flex justify-center items-center relative rounded-lg p-2 sm:p-4"
                  variants={stompVariants}
                  initial="hidden"
                  animate={isTypingDone ? "visible" : "hidden"}
                  transition={{ delay: 0.4 }}
                >
                  <Image
                    src="/affiliations/harvard-university-seeklogo.svg"
                    className="w-14 h-14 sm:w-20 sm:h-20 opacity-90"
                    style={{ filter: "grayscale(100%)" }}
                    alt="Logo Harvard"
                    width={80}
                    height={80}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bounties Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="container mx-auto px-4 py-24"
      >
        <div className="max-w-screen-xl mx-auto">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Featured Bounties
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bounties.map((bounty) => (
              <div 
                key={bounty.id} 
                className={`rounded-xl p-6 transition-all duration-200 ${
                  isDarkMode 
                    ? 'bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700' 
                    : 'bg-white/50 hover:bg-white shadow-lg'
                }`}
              >
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
                    {bounty.amount}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {bounty.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Bounties Button */}
          <div className="mt-12 text-center">
            <Link
              href="/bounty-board"
              className={`inline-flex items-center justify-center gap-2 ${
                isDarkMode
                  ? "bg-indigo-700 hover:bg-indigo-600"
                  : "bg-indigo-600 hover:bg-indigo-700"
              } text-white font-semibold px-8 py-4 rounded-full transition-all duration-300`}
            >
              View All Bounties
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.section>

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
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm md:text-base order-2 md:order-1 mt-4 md:mt-0">
              &copy; 2024 Sundai Club. All rights reserved.
            </p>
            <ul className="flex justify-center order-1 md:order-2">
              {/* GitHub */}
              <li>
                <Link
                  href="https://github.com/sundai-club"
                  className={`flex justify-center items-center w-8 h-8 ${
                    isDarkMode
                      ? "text-gray-200 hover:text-purple-400"
                      : "text-gray-700 hover:text-purple-600"
                  } rounded-full transition duration-150 ease-in-out`}
                  aria-label="Github"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              {/* X (Twitter) */}
              <li className="ml-4">
                <Link
                  href="https://twitter.com/sundai_club"
                  className={`flex justify-center items-center w-8 h-8 ${
                    isDarkMode
                      ? "text-gray-200 hover:text-purple-400"
                      : "text-gray-700 hover:text-purple-600"
                  } rounded-full transition duration-150 ease-in-out`}
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </Link>
              </li>
              {/* LinkedIn */}
              <li className="ml-4">
                <Link
                  href="https://www.linkedin.com/company/sundaiclub"
                  className={`flex justify-center items-center w-8 h-8 ${
                    isDarkMode
                      ? "text-gray-200 hover:text-purple-400"
                      : "text-gray-700 hover:text-purple-600"
                  } rounded-full transition duration-150 ease-in-out`}
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </Link>
              </li>
              {/* Instagram */}
              <li className="ml-4">
                <Link
                  href="https://instagram.com/sundai_club"
                  className={`flex justify-center items-center w-8 h-8 ${
                    isDarkMode
                      ? "text-gray-200 hover:text-purple-400"
                      : "text-gray-700 hover:text-purple-600"
                  } rounded-full transition duration-150 ease-in-out`}
                  aria-label="Instagram"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
