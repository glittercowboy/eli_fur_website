'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className = '' }: PageContainerProps) {
  const { theme } = useTheme();

  return (
    <motion.div
      className={`min-h-screen w-full ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
      }}
    >
      <div className="container mx-auto px-4 py-8 md:py-12">
        {children}
      </div>
    </motion.div>
  );
}
