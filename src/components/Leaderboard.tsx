'use client'

import React from 'react';
import Image from 'next/image';

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
      <h2 className="text-2xl font-bold text-text-primary mb-6">Top Hackers</h2>
      
      <div className="space-y-4">
        {mockLeaderboardData.map((entry) => (
          <div
            key={entry.hacker.id}
            className="flex items-center justify-between p-4 rounded-lg bg-background hover:bg-background-hover transition-colors duration-200"
          >
            {/* Rank and Avatar */}
            <div className="flex items-center space-x-4">
              <span className={`
                w-8 h-8 flex items-center justify-center rounded-full
                ${entry.rank === 1 ? 'bg-yellow-500' : 
                  entry.rank === 2 ? 'bg-gray-300' :
                  entry.rank === 3 ? 'bg-amber-600' : 'bg-gray-700'}
                text-background font-bold
              `}>
                {entry.rank}
              </span>
              
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
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
              
              <div>
                <h3 className="font-semibold text-text-primary">
                  {entry.hacker.name}
                </h3>
                <p className="text-sm text-text-secondary">
                  {entry.hacker.bountiesCompleted} bounties completed
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="text-right">
                <p className="text-sm text-text-secondary">Score</p>
                <p className="font-semibold text-text-primary">
                  {entry.hacker.score.toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-text-secondary">Earnings</p>
                <p className="font-semibold text-text-primary">
                  ${entry.hacker.totalEarnings.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
