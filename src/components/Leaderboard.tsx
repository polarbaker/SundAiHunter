'use client'

import React from 'react';
import Image from 'next/image';
import { TrophyIcon } from '@heroicons/react/24/solid';

type LeaderboardEntry = {
  rank: number;
  hacker: {
    id: string;
    name: string;
    image?: string;
    score: number;
    bountiesCompleted: number;
    totalEarnings: number;
  };
};

const mockLeaderboardData: LeaderboardEntry[] = [
  {
    rank: 1,
    hacker: {
      id: '1',
      name: 'CryptoNinja',
      image: '/avatars/avatar1.png',
      score: 2500,
      bountiesCompleted: 15,
      totalEarnings: 25000,
    },
  },
  {
    rank: 2,
    hacker: {
      id: '2',
      name: 'ByteMaster',
      image: '/avatars/avatar2.png',
      score: 2200,
      bountiesCompleted: 12,
      totalEarnings: 20000,
    },
  },
  {
    rank: 3,
    hacker: {
      id: '3',
      name: 'CodePhantom',
      image: '/avatars/avatar3.png',
      score: 1800,
      bountiesCompleted: 10,
      totalEarnings: 15000,
    },
  },
];

export default function Leaderboard() {
  return (
    <div className="bg-background-secondary rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-3 mb-8">
        <TrophyIcon className="w-6 h-6 text-yellow-500" />
        <h2 className="text-2xl font-bold text-gradient">Top Hackers</h2>
      </div>
      
      {/* Column Headers */}
      <div className="grid grid-cols-12 gap-4 px-4 mb-4 text-sm text-text-secondary">
        <div className="col-span-5">Hacker</div>
        <div className="col-span-2 text-right">Score</div>
        <div className="col-span-2 text-right">Bounties</div>
        <div className="col-span-3 text-right">Earnings</div>
      </div>

      <div className="space-y-3">
        {mockLeaderboardData.map((entry) => (
          <div
            key={entry.hacker.id}
            className="grid grid-cols-12 gap-4 items-center p-4 rounded-lg bg-background hover:bg-background-hover transition-all duration-200 hover:shadow-lg"
          >
            {/* Rank and Hacker Info */}
            <div className="col-span-5 flex items-center gap-4">
              <div className="flex items-center justify-center w-8 h-8">
                {entry.rank === 1 ? (
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500 font-bold">
                    1
                  </div>
                ) : entry.rank === 2 ? (
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300/10 text-gray-300 font-bold">
                    2
                  </div>
                ) : (
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-600/10 text-amber-600 font-bold">
                    3
                  </div>
                )}
              </div>

              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-background-secondary border border-card-border">
                {entry.hacker.image ? (
                  <Image
                    src={entry.hacker.image}
                    alt={entry.hacker.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-xl">
                      {entry.hacker.name[0]}
                    </span>
                  </div>
                )}
              </div>

              <div className="min-w-0">
                <h3 className="font-semibold text-text-primary truncate">
                  {entry.hacker.name}
                </h3>
              </div>
            </div>

            {/* Score */}
            <div className="col-span-2 text-right">
              <span className="font-medium text-text-primary">
                {entry.hacker.score.toLocaleString()}
              </span>
            </div>

            {/* Bounties Completed */}
            <div className="col-span-2 text-right">
              <span className="font-medium text-text-primary">
                {entry.hacker.bountiesCompleted}
              </span>
            </div>

            {/* Total Earnings */}
            <div className="col-span-3 text-right">
              <span className="font-medium text-gradient">
                ${entry.hacker.totalEarnings.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
