import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zhiwei-liu-ai-research.recursive-su-6382.chatgpt.site'),
  title: 'Zhiwei Liu — AI Researcher',
  description: 'Zhiwei Liu is a Senior Applied Scientist at Microsoft AI researching AI agents, information retrieval, large language models, and recommender systems.',
  openGraph: {
    title: 'Zhiwei Liu — AI Researcher',
    description: 'Research in AI agents, search, large language models, and recommender systems.',
    type: 'website',
    images: [{ url: 'https://zhiwei-liu-ai-research.recursive-su-6382.chatgpt.site/og.png', width: 1730, height: 909, alt: 'Zhiwei Liu — AI Agents, Search, Recommendation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zhiwei Liu — AI Researcher',
    description: 'Research in AI agents, search, large language models, and recommender systems.',
    images: ['https://zhiwei-liu-ai-research.recursive-su-6382.chatgpt.site/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
