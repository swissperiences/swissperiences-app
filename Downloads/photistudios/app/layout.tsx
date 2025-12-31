import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Optimize Inter font loading with subset and display strategy
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

/**
 * SEO Metadata Configuration
 * Optimized for search engines and social media sharing
 */
export const metadata: Metadata = {
  title: 'Photi Studios | Professional Podcast Production',
  description:
    "We help the world's best podcasts & organizations grow through podcasting. Expert production, strategy, and marketing services.",
  keywords: [
    'podcast production',
    'professional podcasting',
    'podcast studio',
    'podcast marketing',
    'podcast strategy',
  ],
  authors: [{ name: 'Photi Studios' }],
  creator: 'Photi Studios',
  publisher: 'Photi Studios',
  openGraph: {
    title: 'Photi Studios | Professional Podcast Production',
    description:
      "We help the world's best podcasts & organizations grow through podcasting.",
    url: 'https://photistudios.com',
    siteName: 'Photi Studios',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photi Studios | Professional Podcast Production',
    description:
      "We help the world's best podcasts & organizations grow through podcasting.",
    creator: '@photistudios',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

/**
 * Root Layout Component
 * Provides global HTML structure and font configuration
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
