'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { navigationItems } from '@/lib/theme';
import { Typography } from '@/components/ui/Typography';

export function Navigation() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <button
        className="fixed top-6 right-6 z-50 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <motion.div
          className={`w-6 h-0.5 mb-1.5 ${isOpen ? 'bg-white' : \`bg-\${theme.mode}-accent\`}\`}
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
        />
        <motion.div
          className={`w-6 h-0.5 mb-1.5 ${isOpen ? 'bg-white' : \`bg-\${theme.mode}-accent\`}\`}
          animate={{ opacity: isOpen ? 0 : 1 }}
        />
        <motion.div
          className={`w-6 h-0.5 ${isOpen ? 'bg-white' : \`bg-\${theme.mode}-accent\`}\`}
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed inset-0 bg-black bg-opacity-95 z-40"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="container mx-auto h-full flex items-center justify-center">
              <motion.ul className="space-y-8">
                {navigationItems.map((item) => (
                  <motion.li key={item.section} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className="group relative block"
                      onClick={() => setIsOpen(false)}
                    >
                      <Typography
                        variant="h2"
                        className="text-white hover:text-gray-300 transition-colors"
                      >
                        {item.section}
                      </Typography>
                      <Typography
                        variant="caption"
                        className="absolute -bottom-2 left-0 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        {item.description}
                      </Typography>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
