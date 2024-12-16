'use client';

import React from 'react';
import Leaderboard from '@/components/Leaderboard';
import { useTheme } from '@/contexts/ThemeContext';

// Add BackgroundPattern component
const BackgroundPattern = () => (
  <div
    className="absolute inset-0 opacity-50"
    style={{
      backgroundImage: "url('/images/background_sundai.svg')",
      backgroundSize: "300px auto",
      backgroundRepeat: "repeat",
      WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
      maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
      transform: "rotate(0deg)",
      pointerEvents: "none"
    }}
  />
);

export default function LeaderboardPage() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen relative ${
      isDarkMode
        ? "bg-gradient-to-b from-gray-900 to-black text-gray-100"
        : "bg-gradient-to-b from-[#E5E5E5] to-[#F0F0F0] text-gray-800"
    }`}>
      <BackgroundPattern />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gradient mb-2">
              Hacker Leaderboard
            </h1>
            <p className="text-text-secondary max-w-2xl">
              Top performing hackers on the Sundai Bounties platform. Rankings are based on completed bounties, 
              total earnings, and overall contribution to the community.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="stats-card">
              <h3 className="text-text-secondary mb-1">Total Bounties</h3>
              <p className="text-3xl font-bold text-gradient">156</p>
            </div>
            
            <div className="stats-card">
              <h3 className="text-text-secondary mb-1">Active Hackers</h3>
              <p className="text-3xl font-bold text-gradient">89</p>
            </div>
            
            <div className="stats-card">
              <h3 className="text-text-secondary mb-1">Total Earnings</h3>
              <p className="text-3xl font-bold text-gradient">$258,900</p>
            </div>
          </div>

          <Leaderboard />
        </div>
      </main>
    </div>
  );
}
