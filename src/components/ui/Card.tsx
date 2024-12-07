'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
  padding?: 'none' | 'small' | 'medium' | 'large';
}

export function Card({
  children,
  className = '',
  onClick,
  hover = true,
  padding = 'medium',
}: CardProps) {
  const { theme } = useTheme();

  const paddings = {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  };

  const hoverAnimation = hover
    ? {
        whileHover: { scale: 1.02, y: -4 },
        whileTap: { scale: 0.98 },
      }
    : {};

  return (
    <motion.div
      className={`
        rounded-lg
        backdrop-blur-sm
        ${paddings[padding]}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={{
        backgroundColor: theme.mode === 'club' 
          ? 'rgba(255, 255, 255, 0.05)'
          : 'rgba(0, 0, 0, 0.05)',
        borderColor: theme.mode === 'club'
          ? 'rgba(255, 255, 255, 0.1)'
          : 'rgba(0, 0, 0, 0.1)',
      }}
      {...hoverAnimation}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
