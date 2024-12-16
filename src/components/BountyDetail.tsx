'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BountyDetailProps {
  bounty: {
    id: string;
    title: string;
    prize: number;
    deadline: string;
    status: string;
    description: string;
    sponsorName: string;
    type: string;
    category: string;
  };
  onBack?: () => void;
}

export default function BountyDetail({ bounty, onBack }: BountyDetailProps) {
  return (
    <div className="min-h-screen bg-background-secondary pt-20">
      {/* Header with back button */}
      <div className="bg-background shadow fixed top-16 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to all Bounties
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-background rounded-lg shadow-lg p-6">
              {/* Prize and Status Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-text-primary mb-2">
                    Earn {bounty.prize.toLocaleString()} (${(bounty.prize * 0.01).toFixed(2)})
                  </h1>
                  <h2 className="text-2xl text-text-primary mb-4">{bounty.title}</h2>
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  {bounty.status}
                </span>
              </div>

              {/* Problem Description */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Problem Description</h3>
                <p className="text-text-secondary">{bounty.description}</p>
              </section>

              {/* Acceptance Criteria */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Acceptance Criteria</h3>
                <div className="bg-background-secondary rounded-lg p-4">
                  <p className="text-text-secondary">
                    Have a working solution that meets all requirements and passes all tests.
                  </p>
                </div>
              </section>

              {/* Technical Details */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Technical Details</h3>
                <div className="bg-background-secondary rounded-lg p-4">
                  <ul className="list-disc list-inside text-text-secondary">
                    <li>Category: {bounty.category}</li>
                    <li>Type: {bounty.type}</li>
                    <li>Deadline: {new Date(bounty.deadline).toLocaleDateString()}</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-background rounded-lg shadow-lg p-6 sticky top-48">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Sponsor</h3>
                <p className="text-text-secondary">{bounty.sponsorName}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Timeline</h3>
                <p className="text-text-secondary">
                  Due: {new Date(bounty.deadline).toLocaleDateString()}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn btn-primary py-3 text-lg font-medium"
              >
                Apply
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 