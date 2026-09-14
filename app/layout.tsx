import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rahuloriganti.com'),
  title: {
    default: 'Rahul Origanti | Senior Software Engineer',
    template: '%s | Rahul Origanti',
  },
  description:
    "Senior Software Engineer based in O'Fallon, Missouri, building scalable, user-centric digital experiences across frontend and backend.",
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://rahuloriganti.com',
    title: 'Rahul Origanti | Senior Software Engineer',
    description: 'Scalable, user-centric engineering across frontend and backend.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
