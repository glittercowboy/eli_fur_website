import { Inter, Cormorant_Garamond } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
});

export const neueHaas = localFont({
  src: [
    {
      path: '../fonts/NeueHaasDisplayLight.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/NeueHaasDisplayRoman.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/NeueHaasDisplayMedium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/NeueHaasDisplayBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-neue-haas',
  display: 'swap',
});
