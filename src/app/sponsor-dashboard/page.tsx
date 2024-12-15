'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
  ClockIcon,
  PlusIcon,
  CheckCircleIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

export default function SponsorDashboard() {
  const [activeTab, setActiveTab] = useState('active');

  // Mock data
  const stats = [
    {
      title: 'Total Invested',
      value: '$45,000',
      icon: CurrencyDollarIcon,
      change: '+12%',
      trend: 'up'
    },
    {
      title: 'Active Hackers',
      value: '34',
      icon: UserGroupIcon,
      change: '+8',
      trend: 'up'
    },
    {
      title: 'Completion Rate',
      value: '88%',
      icon: ChartBarIcon,
      change: '+3%',
      trend: 'up'
    },
    {
      title: 'Avg. Completion Time',
      value: '12 days',
      icon: ClockIcon,
      change: '-2 days',
      trend: 'down'
    },
  ];

  const activeBounties = [
    {
      id: 1,
      title: 'Smart Contract Security Audit',
      applicants: 12,
      deadline: '2024-12-30',
      prize: 5000,
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'Frontend Bug Fixes',
      applicants: 8,
      deadline: '2024-12-25',
      prize: 2000,
      status: 'Open',
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gradient mb-2">
              Sponsor Dashboard
            </h1>
            <p className="text-text-secondary">
              Manage your bounties and track hacker progress
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary flex items-center space-x-2"
          >
            <PlusIcon className="h-5 w-5" />
            <span>Create Bounty</span>
          </motion.button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bounty-card group"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-text-secondary text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1 group-hover:text-gradient">{stat.value}</p>
                </div>
                <div className="text-primary">
                  <stat.icon className="h-8 w-8" />
                </div>
              </div>
              <div className={`flex items-center text-sm ${
                stat.trend === 'up' ? 'text-success' : 'text-error'
              }`}>
                <span>{stat.change}</span>
                <span className="text-text-secondary ml-2">vs last month</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Bounties */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Active Bounties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeBounties.map((bounty) => (
              <motion.div
                key={bounty.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bounty-card group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-gradient">
                      {bounty.title}
                    </h3>
                    <div className="flex items-center space-x-4 mt-2 text-text-secondary text-sm">
                      <span>{bounty.applicants} applicants</span>
                      <span>Due {new Date(bounty.deadline).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span className="text-primary font-semibold">${bounty.prize}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`tag ${
                    bounty.status === 'In Progress' ? 'tag-primary' : 'tag-secondary'
                  }`}>
                    {bounty.status}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-sm btn-primary"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
