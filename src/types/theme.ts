export type Mode = 'club' | 'studio';

export type NavSection = 'FEEL' | 'HEAR' | 'MOVE' | 'CREATE' | 'WEAR' | 'CONNECT';

export interface ThemeConfig {
  mode: Mode;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  fontFamily: string;
}

export interface NavItem {
  section: NavSection;
  href: string;
  label: string;
  description?: string;
}
