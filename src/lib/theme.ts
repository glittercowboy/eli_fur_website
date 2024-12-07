import { ThemeConfig, Mode, NavItem } from '@/types/theme';

export const themeConfig: Record<Mode, ThemeConfig> = {
  club: {
    mode: 'club',
    backgroundColor: '#0A0A0A',
    textColor: '#FFFFFF',
    accentColor: '#FF0066',
    fontFamily: 'var(--font-neue-haas)',
  },
  studio: {
    mode: 'studio',
    backgroundColor: '#F5F5F5',
    textColor: '#0A0A0A',
    accentColor: '#00C2FF',
    fontFamily: 'var(--font-cormorant)',
  },
};

export const navigationItems: NavItem[] = [
  {
    section: 'FEEL',
    href: '/feel',
    label: 'Experience',
    description: 'Immerse yourself in our world',
  },
  {
    section: 'HEAR',
    href: '/hear',
    label: 'Music',
    description: 'Listen to our latest releases',
  },
  {
    section: 'MOVE',
    href: '/move',
    label: 'Tour',
    description: 'Find us on the road',
  },
  {
    section: 'CREATE',
    href: '/create',
    label: 'Studio',
    description: 'Explore our creative process',
  },
  {
    section: 'WEAR',
    href: '/wear',
    label: 'Shop',
    description: 'Official merchandise',
  },
  {
    section: 'CONNECT',
    href: '/connect',
    label: 'Contact',
    description: 'Get in touch',
  },
];
