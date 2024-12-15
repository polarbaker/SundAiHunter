import React from 'react';
import Leaderboard from '@/components/Leaderboard';

export default function LeaderboardPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-text-primary mb-8">
          Hacker Leaderboard
        </h1>
        <p className="text-text-secondary mb-8">
          Top performing hackers on the Sundai Bounties platform. Rankings are based on completed bounties, 
          total earnings, and overall contribution to the community.
        </p>
        <Leaderboard />
      </div>
    </main>
  );
}
