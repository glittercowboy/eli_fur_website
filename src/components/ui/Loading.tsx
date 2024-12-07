'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function Loading({ size = 'medium', className = '' }: LoadingProps) {
  const { theme } = useTheme();

  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  };

  const spinTransition = {
    repeat: Infinity,
    duration: 1,
    ease: "linear"
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizes[size]} rounded-full border-2 border-t-transparent`}
        style={{ borderColor: `${theme.accentColor} transparent transparent transparent` }}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
}
