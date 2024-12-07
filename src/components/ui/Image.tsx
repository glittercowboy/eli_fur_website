'use client';

import { useState } from 'react';
import NextImage from 'next/image';
import { motion } from 'framer-motion';

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  animate?: boolean;
}

export function Image({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  animate = true,
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={animate ? { opacity: 0, y: 20 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : false}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'}
        `}
        onLoadingComplete={() => setIsLoading(false)}
        priority={priority}
      />
    </motion.div>
  );
}
