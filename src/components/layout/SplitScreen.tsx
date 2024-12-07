'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Mode } from '@/types/theme';

interface SplitScreenProps {
  clubContent: React.ReactNode;
  studioContent: React.ReactNode;
}

export function SplitScreen({ clubContent, studioContent }: SplitScreenProps) {
  const { mode, setMode } = useTheme();
  const [hoveredSide, setHoveredSide] = useState<Mode | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const variants = {
    club: {
      flex: mode === 'club' ? 2 : 1,
      opacity: mode === 'club' || hoveredSide === 'club' ? 1 : 0.7,
    },
    studio: {
      flex: mode === 'studio' ? 2 : 1,
      opacity: mode === 'studio' || hoveredSide === 'studio' ? 1 : 0.7,
    },
  };

  if (isMobile) {
    return (
      <div className="w-full h-screen">
        <motion.div
          className="w-full h-1/2 bg-club-dark"
          animate={{ height: mode === 'club' ? '100%' : '50%' }}
          transition={{ duration: 0.5 }}
          onClick={() => setMode('club')}
        >
          {clubContent}
        </motion.div>
        <motion.div
          className="w-full h-1/2 bg-studio-light"
          animate={{ height: mode === 'studio' ? '100%' : '50%' }}
          transition={{ duration: 0.5 }}
          onClick={() => setMode('studio')}
        >
          {studioContent}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex w-full h-screen">
      <motion.div
        className="relative h-full bg-club-dark"
        animate={variants.club}
        transition={{ duration: 0.5 }}
        onHoverStart={() => setHoveredSide('club')}
        onHoverEnd={() => setHoveredSide(null)}
        onClick={() => setMode('club')}
      >
        {clubContent}
      </motion.div>
      <motion.div
        className="relative h-full bg-studio-light"
        animate={variants.studio}
        transition={{ duration: 0.5 }}
        onHoverStart={() => setHoveredSide('studio')}
        onHoverEnd={() => setHoveredSide(null)}
        onClick={() => setMode('studio')}
      >
        {studioContent}
      </motion.div>
    </div>
  );
}
