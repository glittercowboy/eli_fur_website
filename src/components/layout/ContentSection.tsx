'use client';

import { motion } from 'framer-motion';
import { Typography } from '@/components/ui/Typography';

interface ContentSectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function ContentSection({
  title,
  subtitle,
  children,
  className = '',
  fullWidth = false,
}: ContentSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      className={`mb-12 md:mb-16 ${fullWidth ? 'w-full' : 'max-w-4xl mx-auto'} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {title && (
        <motion.div variants={containerVariants} className="mb-6">
          <Typography variant="h2" className="mb-2">
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body" className="text-gray-600 dark:text-gray-400">
              {subtitle}
            </Typography>
          )}
        </motion.div>
      )}
      <motion.div variants={containerVariants}>{children}</motion.div>
    </motion.section>
  );
}
