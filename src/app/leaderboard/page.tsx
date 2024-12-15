import React from 'react';
import Leaderboard from '@/components/Leaderboard';

export default function LeaderboardPage() {
  return (
    <main className="container mx-auto px-4 py-8">
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
  );
}
