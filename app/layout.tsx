import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://jimliu96.github.io';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Zhiwei Liu — AI Researcher',
  description: 'Zhiwei Liu is a Senior Applied Scientist at Microsoft AI researching AI agents, information retrieval, large language models, and recommender systems.',
  openGraph: {
    title: 'Zhiwei Liu — AI Researcher',
    description: 'Research in AI agents, search, large language models, and recommender systems.',
    type: 'website',
    images: [{ url: `${siteUrl}/og.png`, width: 1730, height: 909, alt: 'Zhiwei Liu — AI Agents, Search, Recommendation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zhiwei Liu — AI Researcher',
    description: 'Research in AI agents, search, large language models, and recommender systems.',
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
