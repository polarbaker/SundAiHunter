'use client';

import React from 'react';
import { BountyType } from '@/types/bounty';

const mockActiveBounties: BountyType[] = [
  {
    id: '1',
    title: 'Smart Contract Audit',
    sponsorName: 'DeFi Protocol',
    prize: 3000,
    type: 'Remote Medium',
    deadline: '2024-01-20',
    status: 'Active',
    category: 'Security',
  },
  {
    id: '2',
    title: 'Frontend Bug Fix',
    sponsorName: 'Web3 Startup',
    prize: 500,
    type: 'Remote Small',
    deadline: '2024-01-15',
    status: 'Active',
    category: 'Frontend',
  },
];

const mockCompletedBounties: BountyType[] = [
  {
    id: '3',
    title: 'API Integration',
    sponsorName: 'Crypto Exchange',
    prize: 2000,
    type: 'Remote Medium',
    deadline: '2023-12-01',
    status: 'Completed',
    category: 'Backend',
  },
];

const stats = {
  totalEarnings: 15000,
  completedBounties: 8,
  successRate: 92,
  averageRating: 4.8,
};

export default function HackerDashboardPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-text-primary">Hacker Dashboard</h1>
          <div className="text-right">
            <p className="text-text-secondary">Wallet</p>
            <p className="text-text-primary font-mono">0x1234...5678</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-background-secondary rounded-lg p-6">
            <h3 className="text-text-secondary mb-2">Total Earnings</h3>
            <p className="text-3xl font-bold text-text-primary">
              ${stats.totalEarnings.toLocaleString()}
            </p>
          </div>
          
          <div className="bg-background-secondary rounded-lg p-6">
            <h3 className="text-text-secondary mb-2">Completed Bounties</h3>
            <p className="text-3xl font-bold text-text-primary">
              {stats.completedBounties}
            </p>
          </div>
          
          <div className="bg-background-secondary rounded-lg p-6">
            <h3 className="text-text-secondary mb-2">Success Rate</h3>
            <p className="text-3xl font-bold text-text-primary">
              {stats.successRate}%
            </p>
          </div>
          
          <div className="bg-background-secondary rounded-lg p-6">
            <h3 className="text-text-secondary mb-2">Average Rating</h3>
            <p className="text-3xl font-bold text-text-primary">
              {stats.averageRating}/5
            </p>
          </div>
        </div>

        {/* Active Bounties */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Active Bounties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockActiveBounties.map(bounty => (
              <div
                key={bounty.id}
                className="bg-background-secondary rounded-lg p-6 space-y-4"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-text-primary">{bounty.title}</h3>
                  <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                    ${bounty.prize.toLocaleString()}
                  </span>
                </div>
                
                <div>
                  <p className="text-text-secondary">Sponsored by {bounty.sponsorName}</p>
                  <p className="text-sm text-text-secondary mt-1">
                    Deadline: {new Date(bounty.deadline).toLocaleDateString()}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded-md text-sm bg-background text-text-secondary">
                    {bounty.category}
                  </span>
                  <span className="px-2 py-1 rounded-md text-sm bg-background text-text-secondary">
                    {bounty.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Completed Bounties */}
        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-6">Completed Bounties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockCompletedBounties.map(bounty => (
              <div
                key={bounty.id}
                className="bg-background-secondary rounded-lg p-6 space-y-4"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-text-primary">{bounty.title}</h3>
                  <span className="px-3 py-1 rounded-full text-sm bg-green-500/10 text-green-500">
                    Completed
                  </span>
                </div>
                
                <div>
                  <p className="text-text-secondary">Sponsored by {bounty.sponsorName}</p>
                  <p className="text-text-primary font-semibold mt-1">
                    Earned: ${bounty.prize.toLocaleString()}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded-md text-sm bg-background text-text-secondary">
                    {bounty.category}
                  </span>
                  <span className="px-2 py-1 rounded-md text-sm bg-background text-text-secondary">
                    {bounty.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
