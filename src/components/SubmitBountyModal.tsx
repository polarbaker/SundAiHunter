'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/contexts/ThemeContext';

interface SubmitBountyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubmitBountyModal({ isOpen, onClose }: SubmitBountyModalProps) {
  const { isDarkMode } = useTheme();

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={`w-full max-w-2xl transform overflow-hidden rounded-2xl ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } p-6 text-left align-middle shadow-xl transition-all`}>
                <div className="flex justify-between items-start mb-6">
                  <Dialog.Title
                    as="h3"
                    className={`text-2xl font-bold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Submit a Bounty
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className={`rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
                  >
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                  </button>
                </div>

                <form className="space-y-6">
                  <div>
                    <label className={`block text-sm font-medium ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-700'
                    } mb-2`}>
                      Title
                    </label>
                    <input
                      type="text"
                      className={`w-full rounded-lg border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary`}
                      placeholder="Enter bounty title"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-700'
                    } mb-2`}>
                      Description
                    </label>
                    <textarea
                      rows={4}
                      className={`w-full rounded-lg border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary`}
                      placeholder="Describe the bounty requirements"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-700'
                    } mb-2`}>
                      Reward Amount (USD)
                    </label>
                    <input
                      type="number"
                      className={`w-full rounded-lg border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary`}
                      placeholder="Enter reward amount"
                    />
                  </div>

                  <div className="flex justify-end gap-4 mt-8">
                    <button
                      type="button"
                      onClick={onClose}
                      className={`px-4 py-2 rounded-lg border ${
                        isDarkMode 
                          ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                          : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                      } transition-colors`}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors"
                    >
                      Submit Bounty
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
