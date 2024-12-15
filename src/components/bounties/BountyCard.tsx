import React from 'react';
import { CalendarIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

interface BountyCardProps {
  title: string;
  sponsorName: string;
  prize: number;
  type: 'In-Person' | 'Remote Medium' | 'Remote Large';
  deadline: string;
  status: 'Active' | 'Closed';
  category: string;
  onJoin: () => void;
}

export default function BountyCard({
  title,
  sponsorName,
  prize,
  type,
  deadline,
  status,
  category,
  onJoin,
}: BountyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">by {sponsorName}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {status}
        </span>
      </div>
      
      <div className="mt-4 space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <CurrencyDollarIcon className="h-5 w-5 text-gray-400 mr-2" />
          ${prize.toLocaleString()}
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <UserGroupIcon className="h-5 w-5 text-gray-400 mr-2" />
          {type}
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
          Due {deadline}
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
          {category}
        </span>
        
        <button
          onClick={onJoin}
          disabled={status === 'Closed'}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            status === 'Active'
              ? 'bg-primary-600 text-white hover:bg-primary-700'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          Join Bounty
        </button>
      </div>
    </div>
  );
} 