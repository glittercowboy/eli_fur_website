'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption';
  as?: keyof JSX.IntrinsicElements;
  animate?: boolean;
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ variant = 'body', as, animate = false, children, className = '', ...props }, ref) => {
    const { theme } = useTheme();

    const variants = {
      h1: `text-4xl md:text-5xl lg:text-6xl font-bold ${theme.fontFamily}`,
      h2: `text-3xl md:text-4xl lg:text-5xl font-bold ${theme.fontFamily}`,
      h3: `text-2xl md:text-3xl lg:text-4xl font-bold ${theme.fontFamily}`,
      h4: `text-xl md:text-2xl lg:text-3xl font-bold ${theme.fontFamily}`,
      h5: `text-lg md:text-xl lg:text-2xl font-bold ${theme.fontFamily}`,
      h6: `text-base md:text-lg lg:text-xl font-bold ${theme.fontFamily}`,
      body: `text-base ${theme.fontFamily}`,
      caption: `text-sm ${theme.fontFamily}`,
    };

    const Component = motion[as || variant];

    const animationProps = animate
      ? {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
        }
      : {};

    return (
      <Component
        ref={ref}
        className={\`\${variants[variant]} \${className}\`}
        {...animationProps}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
