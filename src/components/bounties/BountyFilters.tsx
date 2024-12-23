'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { FunnelIcon } from '@heroicons/react/24/outline';

// Move constants outside component to prevent recreating on each render
const BOUNTY_TYPES = ['Remote Small', 'Remote Medium', 'Remote Large', 'On-site'] as const;
const CATEGORIES = [
  'AI Optimization',
  'Social Impact',
  'Web Development',
  'Mobile Development',
  'Data Science',
  'Blockchain',
] as const;

const MIN_PRIZE = 0;
const MAX_PRIZE = 10000;

// Improve type safety with literal types
type BountyType = typeof BOUNTY_TYPES[number];
type Category = typeof CATEGORIES[number];

interface BountyFiltersProps {
  onFilterChange: (filters: {
    type: BountyType[];
    category: Category[];
    prizeRange: [number, number];
  }) => void;
}

export default function BountyFilters({ onFilterChange }: BountyFiltersProps) {
  const [selectedTypes, setSelectedTypes] = useState<BountyType[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [prizeRange, setPrizeRange] = useState<[number, number]>([MIN_PRIZE, MAX_PRIZE]);

  // Memoize handlers to prevent unnecessary rerenders
  const handleTypeToggle = useCallback((type: BountyType) => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  }, []);

  const handleCategoryToggle = useCallback((category: Category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  }, []);

  const handlePrizeRangeChange = useCallback((index: 0 | 1, value: number) => {
    setPrizeRange(prev => {
      const newRange: [number, number] = [...prev] as [number, number];
      newRange[index] = value;
      // Ensure min doesn't exceed max and vice versa
      if (index === 0 && value > newRange[1]) {
        newRange[1] = value;
      } else if (index === 1 && value < newRange[0]) {
        newRange[0] = value;
      }
      return newRange;
    });
  }, []);

  // Debounce filter changes to prevent too frequent updates
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onFilterChange({
        type: selectedTypes,
        category: selectedCategories,
        prizeRange,
      });
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [selectedTypes, selectedCategories, prizeRange, onFilterChange]);

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
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
              min={MIN_PRIZE}
              max={MAX_PRIZE}
              value={prizeRange[0]}
              onChange={(e) => handlePrizeRangeChange(0, parseInt(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500">Max: ${prizeRange[1]}</label>
            <input
              type="range"
              min={MIN_PRIZE}
              max={MAX_PRIZE}
              value={prizeRange[1]}
              onChange={(e) => handlePrizeRangeChange(1, parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 