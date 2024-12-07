'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Mode, ThemeConfig } from '@/types/theme';
import { themeConfig } from '@/lib/theme';

interface ThemeContextType {
  mode: Mode;
  theme: ThemeConfig;
  toggleMode: () => void;
  setMode: (mode: Mode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>('club');

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === 'club' ? 'studio' : 'club'));
  }, []);

  const value = {
    mode,
    theme: themeConfig[mode],
    toggleMode,
    setMode,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
