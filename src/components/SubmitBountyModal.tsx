import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, CurrencyDollarIcon, DocumentTextIcon, TagIcon, CalendarIcon } from '@heroicons/react/24/outline'

interface SubmitBountyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SubmitBountyModal({ isOpen, onClose }: SubmitBountyModalProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
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
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-lg bg-background-secondary border border-card-border p-6 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                <div className="absolute right-4 top-4">
                  <button
                    type="button"
                    className="rounded-lg p-2 text-text-secondary hover:text-text-primary hover:bg-background-hover"
                    onClick={onClose}
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>

                <div className="mb-6">
                  <Dialog.Title as="h3" className="text-2xl font-bold text-gradient">
                    Submit a Bounty
                  </Dialog.Title>
                  <p className="mt-2 text-text-secondary">
                    Create a new bounty to find talented hackers for your project.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1">
                        Title
                      </label>
                      <div className="relative">
                        <DocumentTextIcon className="absolute left-3 top-2.5 h-5 w-5 text-text-secondary" />
                        <input
                          type="text"
                          className="pl-10 w-full"
                          placeholder="Enter bounty title"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1">
                        Description
                      </label>
                      <textarea
                        rows={4}
                        className="w-full"
                        placeholder="Describe your bounty requirements..."
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1">
                          Prize Amount
                        </label>
                        <div className="relative">
                          <CurrencyDollarIcon className="absolute left-3 top-2.5 h-5 w-5 text-text-secondary" />
                          <input
                            type="number"
                            className="pl-10 w-full"
                            placeholder="Enter prize amount"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1">
                          Deadline
                        </label>
                        <div className="relative">
                          <CalendarIcon className="absolute left-3 top-2.5 h-5 w-5 text-text-secondary" />
                          <input
                            type="date"
                            className="pl-10 w-full"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1">
                        Tags
                      </label>
                      <div className="relative">
                        <TagIcon className="absolute left-3 top-2.5 h-5 w-5 text-text-secondary" />
                        <input
                          type="text"
                          className="pl-10 w-full"
                          placeholder="Add tags (comma separated)"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
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
    </Transition.Root>
  )
}
