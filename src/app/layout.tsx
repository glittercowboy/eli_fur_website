import type { Metadata } from 'next';
import { cormorant, neueHaas } from '@/lib/fonts';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Navigation } from '@/components/navigation/Navigation';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eli & Fur',
  description: 'Official website of electronic music duo Eli & Fur',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${neueHaas.variable} antialiased`}>
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
