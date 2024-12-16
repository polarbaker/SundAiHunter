'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, CalendarIcon, CurrencyDollarIcon, DocumentTextIcon, ChatBubbleLeftIcon, GlobeAltIcon, WrenchIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/contexts/ModalContext';

const categories = ['Security', 'Frontend', 'Backend', 'Smart Contracts', 'Design'];
const types = ['Remote Small', 'Remote Medium', 'Remote Large', 'On-site'];

const bountyTemplates = [
  {
    id: 'ai-tool',
    icon: <ChatBubbleLeftIcon className="w-8 h-8" />,
    title: 'AI Tool',
    description: 'Get a custom bot, automated system, or AI app.',
    typicalPrice: '~$500.00'
  },
  {
    id: 'web-app',
    icon: <GlobeAltIcon className="w-8 h-8" />,
    title: 'Web Application',
    description: 'Build an interactive website to share with the world.',
    typicalPrice: '~$1,500.00'
  },
  {
    id: 'get-help',
    icon: <WrenchIcon className="w-8 h-8" />,
    title: 'Get Help',
    description: 'Fix a bug, build a feature, or learn something new.',
    typicalPrice: '~$50.00'
  },
  {
    id: 'custom',
    icon: <LightBulbIcon className="w-8 h-8" />,
    title: 'Custom',
    description: 'Need something else? Describe your Bounty.',
    typicalPrice: 'Custom'
  }
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

export default function SubmitBountyModal() {
  const { submitModalOpen, setSubmitModalOpen } = useModal();
  const { isDarkMode } = useTheme();
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    prize: '',
    communicationMethod: 'Email',
    email: '',
    deadline: '',
  });

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    const template = bountyTemplates.find(t => t.id === templateId);
    if (template) {
      setFormData(prev => ({
        ...prev,
        title: `${template.title} Development`,
        prize: templateId === 'ai-tool' ? '500' : 
               templateId === 'web-app' ? '1500' : 
               templateId === 'get-help' ? '50' : '',
        category: templateId === 'ai-tool' ? 'Backend' :
                 templateId === 'web-app' ? 'Frontend' :
                 templateId === 'get-help' ? 'Frontend' : '',
      }));
    }
    setStep(2);
  };

  const handleClose = () => {
    setSubmitModalOpen(false);
    setTimeout(() => {
      setStep(1);
      setSelectedTemplate('');
      setFormData({
        title: '',
        description: '',
        prize: '',
        communicationMethod: 'Email',
        email: '',
        deadline: '',
      });
    }, 300);
  };

  const inputClasses = `w-full bg-gray-800 border-none rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary/50 focus:outline-none`;
  const labelClasses = `block text-gray-300 text-sm font-medium mb-2`;

  return (
    <Transition appear show={submitModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel 
              className="w-full max-w-2xl rounded-2xl bg-[#1B1F2D] p-6 shadow-xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="flex justify-between items-start mb-6">
                    <Dialog.Title className="text-2xl font-bold text-white">
                      {step === 1 ? 'Create a Bounty' : 'Bounty Details'}
                    </Dialog.Title>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleClose}
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </motion.button>
                  </div>

                  {step === 1 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {bountyTemplates.map((template, index) => (
                        <motion.button
                          key={template.id}
                          variants={itemVariants}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleTemplateSelect(template.id)}
                          className={`p-6 rounded-xl text-left transition-all ${
                            isDarkMode 
                              ? 'bg-gray-700/50 hover:bg-gray-600/50' 
                              : 'bg-gray-50 hover:bg-gray-100'
                          } border border-gray-200 dark:border-gray-600`}
                        >
                          <motion.div 
                            className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-3`}
                            whileHover={{ rotate: 15 }}
                          >
                            {template.icon}
                          </motion.div>
                          <h4 className={`text-lg font-semibold mb-2 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {template.title}
                          </h4>
                          <p className={`text-sm mb-3 ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {template.description}
                          </p>
                          <p className="text-primary font-mono text-sm">
                            {template.typicalPrice}
                          </p>
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    <motion.form
                      className="space-y-6"
                      onSubmit={(e) => {
                        e.preventDefault();
                        console.log(formData);
                        handleClose();
                      }}
                    >
                      {/* Bounty Title */}
                      <div>
                        <label className={labelClasses}>
                          Bounty Title
                        </label>
                        <input
                          type="text"
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          className={inputClasses}
                          placeholder="Give your Bounty a descriptive name"
                          required
                        />
                      </div>

                      {/* Target Completion Date */}
                      <div>
                        <label className={labelClasses}>
                          Target Completion Date
                        </label>
                        <input
                          type="date"
                          value={formData.deadline}
                          onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                          className={inputClasses}
                          required
                        />
                      </div>

                      {/* Communication Method */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelClasses}>
                            Communication Method
                          </label>
                          <select
                            value={formData.communicationMethod}
                            onChange={(e) => setFormData({ ...formData, communicationMethod: e.target.value })}
                            className={inputClasses}
                          >
                            <option value="Email">Email</option>
                            <option value="Discord">Discord</option>
                            <option value="Telegram">Telegram</option>
                          </select>
                        </div>
                        <div>
                          <label className={labelClasses}>
                            Email
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={inputClasses}
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <label className={labelClasses}>
                          Description
                        </label>
                        <textarea
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          rows={6}
                          className={`${inputClasses} font-mono`}
                          placeholder="# Problem Description

# Acceptance Criteria

# Technical Details"
                          required
                        />
                        <div className="flex justify-between mt-2">
                          <span className="text-sm text-gray-500">Style your description with Markdown</span>
                          <button type="button" className="text-sm text-primary hover:text-primary/80">
                            Markdown Guide
                          </button>
                        </div>
                      </div>

                      {/* Bounty Amount */}
                      <div>
                        <label className={labelClasses}>
                          Bounty Amount
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            value={formData.prize}
                            onChange={(e) => setFormData({ ...formData, prize: e.target.value })}
                            className={`${inputClasses} pl-8`}
                            placeholder="50000"
                            required
                          />
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₡</span>
                        </div>
                        <div className="mt-4 space-y-2 text-sm text-gray-400">
                          <div className="flex justify-between">
                            <span>Solver Payout</span>
                            <span>₡45,000 ($450.00)</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Bounty Marketplace Fee</span>
                            <span>₡5,000 ($50.00)</span>
                          </div>
                          <div className="flex justify-between font-medium pt-2 border-t border-gray-700">
                            <span>Bounty Amount</span>
                            <span>₡50,000 ($500.00)</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-400 mt-6">
                        By posting a Bounty, you agree to the <a href="#" className="text-primary hover:underline">Terms</a>. 
                        You'll get rights to the work when Cycles transfer after completion.
                      </div>

                      <motion.div 
                        className="flex justify-end gap-4 mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setStep(1)}
                          className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700"
                        >
                          Back
                        </motion.button>
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-4 py-2 rounded-lg bg-primary text-white"
                        >
                          Submit Bounty
                        </motion.button>
                      </motion.div>
                    </motion.form>
                  )}
                </motion.div>
              </AnimatePresence>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
