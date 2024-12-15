'use client';

import React, { useState } from 'react';

const categories = ['Security', 'Frontend', 'Backend', 'Smart Contracts', 'Design'];
const types = ['Remote Small', 'Remote Medium', 'Remote Large', 'On-site'];

export default function SubmitBountyPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    prize: '',
    category: '',
    type: '',
    deadline: '',
    requirements: '',
    contactInfo: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-text-primary mb-8">Submit a Bounty</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-text-secondary mb-2">
              Bounty Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-background border border-text-secondary/10 text-text-primary"
              placeholder="Enter a clear, descriptive title"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-text-secondary mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 rounded-lg bg-background border border-text-secondary/10 text-text-primary"
              placeholder="Describe the bounty in detail"
              required
            />
          </div>

          {/* Prize */}
          <div>
            <label htmlFor="prize" className="block text-sm font-medium text-text-secondary mb-2">
              Prize Amount (USD)
            </label>
            <input
              type="number"
              id="prize"
              name="prize"
              value={formData.prize}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-background border border-text-secondary/10 text-text-primary"
              placeholder="Enter prize amount"
              min="0"
              required
            />
          </div>

          {/* Category and Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-text-secondary mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-background border border-text-secondary/10 text-text-primary"
                required
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium text-text-secondary mb-2">
                Type
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-background border border-text-secondary/10 text-text-primary"
                required
              >
                <option value="">Select a type</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Deadline */}
          <div>
            <label htmlFor="deadline" className="block text-sm font-medium text-text-secondary mb-2">
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-background border border-text-secondary/10 text-text-primary"
              required
            />
          </div>

          {/* Requirements */}
          <div>
            <label htmlFor="requirements" className="block text-sm font-medium text-text-secondary mb-2">
              Requirements
            </label>
            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 rounded-lg bg-background border border-text-secondary/10 text-text-primary"
              placeholder="List specific requirements, skills needed, and deliverables"
              required
            />
          </div>

          {/* Contact Information */}
          <div>
            <label htmlFor="contactInfo" className="block text-sm font-medium text-text-secondary mb-2">
              Contact Information
            </label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-background border border-text-secondary/10 text-text-primary"
              placeholder="How should hackers contact you?"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Submit Bounty
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
