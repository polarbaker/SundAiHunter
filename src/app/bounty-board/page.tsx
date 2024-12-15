'use client';

import React, { useState } from 'react';
import { BountyType } from '@/types/bounty';

const mockBounties: BountyType[] = [
  {
    id: '1',
    title: 'Smart Contract Security Audit',
    sponsorName: 'DeFi Protocol',
    prize: 5000,
    type: 'Remote Large',
    deadline: '2024-01-15',
    status: 'Active',
    category: 'Security',
  },
  {
    id: '2',
    title: 'Frontend Bug Fix',
    sponsorName: 'Web3 Startup',
    prize: 500,
    type: 'Remote Small',
    deadline: '2024-01-10',
    status: 'Active',
    category: 'Frontend',
  },
  {
    id: '3',
    title: 'API Integration',
    sponsorName: 'Crypto Exchange',
    prize: 2000,
    type: 'Remote Medium',
    deadline: '2024-01-20',
    status: 'Active',
    category: 'Backend',
  },
];

const categories = ['All', 'Security', 'Frontend', 'Backend', 'Smart Contracts', 'Design'];
const types = ['All', 'Remote Small', 'Remote Medium', 'Remote Large', 'On-site'];

export default function BountyBoardPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBounties = mockBounties.filter(bounty => {
    const matchesCategory = selectedCategory === 'All' || bounty.category === selectedCategory;
    const matchesType = selectedType === 'All' || bounty.type === selectedType;
    const matchesSearch = bounty.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         bounty.sponsorName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-text-primary mb-8">Bounty Board</h1>
        
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search bounties..."
            className="w-full p-3 rounded-lg bg-background border border-text-secondary/10 text-text-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label className="block text-sm text-text-secondary mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 rounded-lg bg-background border border-text-secondary/10 text-text-primary"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div className="flex-1">
              <label className="block text-sm text-text-secondary mb-2">Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-3 rounded-lg bg-background border border-text-secondary/10 text-text-primary"
              >
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Bounties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBounties.map(bounty => (
            <div
              key={bounty.id}
              className="bg-background-secondary rounded-lg p-6 space-y-4 hover:ring-2 hover:ring-primary transition-all cursor-pointer"
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
      </div>
    </main>
  );
}
