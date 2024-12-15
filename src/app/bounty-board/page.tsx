'use client';

import { useState } from 'react'
import { MagnifyingGlassIcon, FunnelIcon, ArrowsUpDownIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

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

// Enhanced BountyCard component with more animations and features
const BountyCard = ({ bounty }: { bounty: any }) => {
  return (
    <motion.div
      className="bounty-card group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition-colors">
            {bounty.title}
          </h3>
          <p className="text-text-secondary text-sm mb-3">{bounty.description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-primary font-semibold">${bounty.prize}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-sm btn-primary"
          >
            Apply
          </motion.button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {bounty.tags?.map((tag: string, index: number) => (
          <span
            key={index}
            className="px-2 py-1 text-xs rounded-full bg-background/50 border border-border/40 text-text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border/40 flex justify-between items-center text-sm text-text-secondary">
        <div className="flex items-center space-x-2">
          <span>Posted by {bounty.sponsorName}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>Deadline: {new Date(bounty.deadline).toLocaleDateString()}</span>
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced search and filter section
const SearchAndFilters = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory,
  selectedType,
  setSelectedType,
  filterOpen,
  setFilterOpen
}: any) => {
  return (
    <motion.div 
      className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-border/40 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search bounties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-background-secondary rounded-lg border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary placeholder:text-text-secondary"
            />
            <MagnifyingGlassIcon className="absolute right-3 top-2.5 h-5 w-5 text-text-secondary" />
          </div>
          
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => setFilterOpen(!filterOpen)}
              className="btn btn-sm flex items-center space-x-2 bg-background-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FunnelIcon className="h-4 w-4" />
              <span>Filters</span>
            </motion.button>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-background-secondary rounded-lg border border-border/40 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
        
        {filterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 p-4 bg-background-secondary rounded-lg border border-border/40"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-background rounded-lg border border-border/40 px-3 py-2"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Sort By</label>
                <select
                  className="w-full bg-background rounded-lg border border-border/40 px-3 py-2"
                >
                  <option value="latest">Latest</option>
                  <option value="prize-high">Highest Prize</option>
                  <option value="prize-low">Lowest Prize</option>
                  <option value="deadline">Deadline</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default function BountyBoardPage() {
  const [sortBy, setSortBy] = useState('latest')
  const [filterOpen, setFilterOpen] = useState(false)
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

  const featuredBounties = [
    {
      id: 1,
      title: "Implement Dark Mode for React Component Library",
      description: "Add dark mode support to our open source React component library using CSS variables and theme context.",
      prize: 500,
      tags: ["React", "TypeScript"],
    },
    {
      id: 2,
      title: "Add Authentication to Open Source API",
      description: "Implement JWT authentication for our REST API including user registration and login endpoints.",
      prize: 750,
      tags: ["Node.js", "Express", "JWT"],
    },
    {
      id: 3,
      title: "Create Data Visualization Components",
      description: "Build reusable chart components using D3.js for our analytics dashboard library.",
      prize: 1000,
      tags: ["React", "D3.js", "TypeScript"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Bounties for Open Source Projects
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Connect with developers and fund open source projects. Our platform makes it easy to post bounties, find contributors, and get work done.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                href="/bounty-board" 
                className="btn btn-primary text-lg px-8 py-3"
              >
                View Bounties
              </Link>
              <button 
                onClick={() => {/* Handle submit bounty */}} 
                className="btn btn-secondary text-lg px-8 py-3"
              >
                Submit a Bounty
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Bounties Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2 
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Bounties
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBounties.map((bounty, index) => (
            <BountyCard key={bounty.id} bounty={bounty} />
          ))}
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2 
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          All Bounties
        </motion.h2>
        <SearchAndFilters 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          filterOpen={filterOpen}
          setFilterOpen={setFilterOpen}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBounties.map((bounty) => (
            <BountyCard key={bounty.id} bounty={bounty} />
          ))}
        </div>
      </div>
    </div>
  )
}
