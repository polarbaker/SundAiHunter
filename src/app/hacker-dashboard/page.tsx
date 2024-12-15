'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  ChartBarIcon, 
  ClockIcon, 
  CurrencyDollarIcon,
  FireIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

interface DashboardStats {
  totalEarnings: number;
  activeBounties: number;
  completedBounties: number;
  successRate: number;
}

interface BountyActivity {
  id: string;
  title: string;
  status: 'in_progress' | 'completed' | 'submitted';
  reward: number;
  daysLeft?: number;
  progress: number;
  priority: 'high' | 'medium' | 'low';
}

export default function HackerDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalEarnings: 15420,
    activeBounties: 3,
    completedBounties: 12,
    successRate: 92
  });

  const [recentActivity, setRecentActivity] = useState<BountyActivity[]>([
    {
      id: '1',
      title: 'Smart Contract Audit',
      status: 'in_progress',
      reward: 2500,
      daysLeft: 5,
      progress: 75,
      priority: 'high'
    },
    {
      id: '2',
      title: 'Frontend Security Review',
      status: 'in_progress',
      reward: 1800,
      daysLeft: 3,
      progress: 40,
      priority: 'medium'
    },
    {
      id: '3',
      title: 'API Penetration Testing',
      status: 'submitted',
      reward: 3000,
      progress: 100,
      priority: 'high'
    }
  ]);

  const containerAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-secondary p-6">
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerAnimation}
        className="max-w-7xl mx-auto space-y-8"
      >
        {/* Header Section */}
        <motion.div variants={itemAnimation} className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-white">Hacker Dashboard</h1>
            <p className="text-gray-400 mt-2">Track your bounty progress and earnings</p>
          </div>
          <button className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2">
            <FireIcon className="w-5 h-5" />
            Find New Bounties
          </button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={itemAnimation}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="stat-card">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-400">Total Earnings</h3>
              <CurrencyDollarIcon className="w-8 h-8 text-primary" />
            </div>
            <p className="text-3xl font-bold mt-2">${stats.totalEarnings.toLocaleString()}</p>
            <div className="mt-2 text-success text-sm flex items-center gap-1">
              <ArrowTrendingUpIcon className="w-4 h-4" />
              +12.5% from last month
            </div>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-400">Active Bounties</h3>
              <ClockIcon className="w-8 h-8 text-primary" />
            </div>
            <p className="text-3xl font-bold mt-2">{stats.activeBounties}</p>
            <div className="mt-2 text-gray-400 text-sm">
              {stats.activeBounties} in progress
            </div>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-400">Completed</h3>
              <CheckCircleIcon className="w-8 h-8 text-primary" />
            </div>
            <p className="text-3xl font-bold mt-2">{stats.completedBounties}</p>
            <div className="mt-2 text-gray-400 text-sm">
              Total completed bounties
            </div>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-400">Success Rate</h3>
              <ChartBarIcon className="w-8 h-8 text-primary" />
            </div>
            <p className="text-3xl font-bold mt-2">{stats.successRate}%</p>
            <div className="mt-2 text-success text-sm">
              Above average performance
            </div>
          </div>
        </motion.div>

        {/* Active Bounties Section */}
        <motion.div variants={itemAnimation} className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Active Bounties</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {recentActivity.map((bounty) => (
              <motion.div
                key={bounty.id}
                className="bounty-card"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{bounty.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`priority-badge ${bounty.priority}`}>
                        {bounty.priority.charAt(0).toUpperCase() + bounty.priority.slice(1)} Priority
                      </span>
                      {bounty.daysLeft && (
                        <span className="text-sm text-gray-400">
                          {bounty.daysLeft} days left
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-primary">${bounty.reward}</p>
                    <p className="text-sm text-gray-400">Reward</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Progress</span>
                    <span>{bounty.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${bounty.progress}%` }}
                    />
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <span className={`status-badge ${bounty.status}`}>
                    {bounty.status.split('_').join(' ').charAt(0).toUpperCase() + 
                     bounty.status.split('_').join(' ').slice(1)}
                  </span>
                  <button className="text-primary hover:text-primary-light transition-colors">
                    View Details →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
