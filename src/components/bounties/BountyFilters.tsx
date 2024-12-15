'use client';

import React, { useState, useEffect } from 'react';
import { FunnelIcon } from '@heroicons/react/24/outline';

// Define filter options
const BOUNTY_TYPES = ['Remote Small', 'Remote Medium', 'Remote Large', 'On-site'];
const CATEGORIES = [
  'AI Optimization',
  'Social Impact',
  'Web Development',
  'Mobile Development',
  'Data Science',
  'Blockchain',
];

interface BountyFiltersProps {
  onFilterChange: (filters: {
    type: string[];
    category: string[];
    prizeRange: [number, number];
  }) => void;
}

export default function BountyFilters({ onFilterChange }: BountyFiltersProps) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [prizeRange, setPrizeRange] = useState<[number, number]>([0, 10000]);

  useEffect(() => {
    onFilterChange({
      type: selectedTypes,
      category: selectedCategories,
      prizeRange,
    });
  }, [selectedTypes, selectedCategories, prizeRange, onFilterChange]);

  const handleTypeToggle = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="flex items-center mb-4">
        <FunnelIcon className="h-5 w-5 text-gray-500 mr-2" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      {/* Bounty Types */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Bounty Type</h3>
        <div className="space-y-2">
          {BOUNTY_TYPES.map(type => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeToggle(type)}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-600">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Category</h3>
        <div className="space-y-2">
          {CATEGORIES.map(category => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryToggle(category)}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-600">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Prize Range */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Prize Range</h3>
        <div className="space-y-4">
          <div>
            <label className="text-xs text-gray-500">Min: ${prizeRange[0]}</label>
            <input
              type="range"
              min="0"
              max="10000"
              value={prizeRange[0]}
              onChange={(e) => setPrizeRange([parseInt(e.target.value), prizeRange[1]])}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500">Max: ${prizeRange[1]}</label>
            <input
              type="range"
              min="0"
              max="10000"
              value={prizeRange[1]}
              onChange={(e) => setPrizeRange([prizeRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 