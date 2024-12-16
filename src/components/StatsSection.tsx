'use client';

import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const stats = [
  {
    number: "25+",
    label: "Years of Open Innovation & Technology Scouting"
  },
  {
    number: "150k+",
    label: "Global marketplace subscribers and online network each"
  },
  {
    number: "1,000+",
    label: "Global syndication and broker partners"
  },
  {
    number: "20+",
    label: "Annual Deals"
  },
  {
    number: "10k+",
    label: "Introductions successfully delivered to our clients"
  },
  {
    number: "92%",
    label: "Success Rate"
  }
];

export default function StatsSection() {
  const { isDarkMode } = useTheme();

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className={`text-4xl font-bold mb-6 ${
            isDarkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>
            Who We Are
          </h2>
          
          <p className={`text-xl mb-12 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            We are experts at harnessing Open Innovation to drive growth within your innovation strategy.
          </p>

          <p className={`text-lg mb-12 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-700'
          }`}>
            From our roots as an open innovation marketplace (the original crowdsourcing platform) we have evolved to become expert Open Innovation consultants with proven services and methodologies for enabling clients to execute Open Innovation successfully.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <motion.a
              href="/our-approach"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg ${
                isDarkMode
                  ? 'bg-primary hover:bg-primary-hover'
                  : 'bg-primary hover:bg-primary-hover'
              } text-white transition-colors`}
            >
              Our Approach
            </motion.a>
            <motion.a
              href="/team"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg border ${
                isDarkMode
                  ? 'border-gray-700 hover:bg-gray-800'
                  : 'border-gray-300 hover:bg-gray-100'
              } transition-colors`}
            >
              Meet The Team
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 