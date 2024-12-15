'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

export default function HackerDashboard() {
  const [activeTab, setActiveTab] = useState('active');

  const stats = [
    {
      title: 'Total Earnings',
      value: '$12,500',
      change: '+25%',
      icon: CurrencyDollarIcon,
      color: 'emerald',
    },
    {
      title: 'Active Bounties',
      value: '8',
      change: '+2',
      icon: ChartBarIcon,
      color: 'purple',
    },
    {
      title: 'Completed',
      value: '24',
      change: '+5',
      icon: CheckCircleIcon,
      color: 'blue',
    },
    {
      title: 'Time Spent',
      value: '156h',
      change: '+12h',
      icon: ClockIcon,
      color: 'amber',
    },
  ];

  const activeBounties = [
    {
      title: 'Implement Dark Mode',
      reward: '$500',
      progress: 75,
      daysLeft: 3,
      techStack: ['React', 'TypeScript', 'CSS'],
    },
    {
      title: 'API Integration',
      reward: '$750',
      progress: 40,
      daysLeft: 5,
      techStack: ['Node.js', 'Express', 'JWT'],
    },
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
          Hacker Dashboard
        </h1>
        <p className="text-text-secondary mt-2">
          Track your bounty progress and earnings
        </p>
      </header>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.title} className="dashboard-stat-card">
            <div className={`stat-icon-wrapper bg-${stat.color}-500/10`}>
              <stat.icon className={`stat-icon text-${stat.color}-500`} />
            </div>
            <div className="stat-content">
              <h3 className="stat-title">{stat.title}</h3>
              <p className="dashboard-stat-value">{stat.value}</p>
              <p className={`dashboard-stat-change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
                {stat.change}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-tabs">
        <div className="tab-buttons">
          {['active', 'completed', 'available'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`dashboard-tab ${activeTab === tab ? 'active' : ''}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <motion.div
                  className="dashboard-tab-indicator"
                  layoutId="tab-indicator"
                />
              )}
            </button>
          ))}
        </div>

        <div className="bounties-grid">
          {activeBounties.map((bounty) => (
            <div key={bounty.title} className="bounty-card">
              <div className="bounty-header">
                <h3 className="bounty-title">{bounty.title}</h3>
                <span className="bounty-reward">{bounty.reward}</span>
              </div>
              
              <div className="bounty-progress">
                <div className="progress-stats">
                  <span className="progress-text">{bounty.progress}% Complete</span>
                  <span className="days-left">{bounty.daysLeft} days left</span>
                </div>
                <div className="dashboard-progress-bar">
                  <div
                    className="dashboard-progress-bar-fill"
                    style={{ width: `${bounty.progress}%` }}
                  />
                </div>
              </div>

              <div className="tech-stack">
                {bounty.techStack.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
