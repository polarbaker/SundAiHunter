'use client';

import React, { useState } from 'react';
import { CalendarIcon, CurrencyDollarIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

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
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gradient mb-2">Submit a Bounty</h1>
          <p className="text-text-secondary">Create a new bounty to find talented hackers for your project</p>
        </div>
        
        <div className="card p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="form-label">
                Bounty Title
              </label>
              <div className="relative">
                <DocumentTextIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="form-input pl-10"
                  placeholder="Enter a clear, descriptive title"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="form-input"
                placeholder="Describe the bounty in detail, including context and goals"
                required
              />
            </div>

            {/* Prize */}
            <div>
              <label htmlFor="prize" className="form-label">
                Prize Amount (USD)
              </label>
              <div className="relative">
                <CurrencyDollarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
                <input
                  type="number"
                  id="prize"
                  name="prize"
                  value={formData.prize}
                  onChange={handleChange}
                  className="form-input pl-10"
                  placeholder="Enter prize amount"
                  min="0"
                  required
                />
              </div>
            </div>

            {/* Category and Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="type" className="form-label">
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="form-input"
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
              <label htmlFor="deadline" className="form-label">
                Submission Deadline
              </label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="form-input pl-10"
                  required
                />
              </div>
            </div>

            {/* Requirements */}
            <div>
              <label htmlFor="requirements" className="form-label">
                Requirements
              </label>
              <textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows={4}
                className="form-input"
                placeholder="List specific requirements, skills needed, and submission guidelines"
                required
              />
            </div>

            {/* Contact Info */}
            <div>
              <label htmlFor="contactInfo" className="form-label">
                Contact Information
              </label>
              <input
                type="text"
                id="contactInfo"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleChange}
                className="form-input"
                placeholder="How should hackers contact you?"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-end gap-4 pt-4">
              <button type="button" className="btn btn-secondary">
                Save Draft
              </button>
              <button type="submit" className="btn btn-primary">
                Publish Bounty
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
