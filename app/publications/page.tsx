/* eslint-disable @next/next/no-html-link-for-pages -- vinext currently fails to hydrate next/link */
import type { Metadata } from 'next';
import PublicationList from './publication-list';

export const metadata: Metadata = {
  title: 'Publications — Zhiwei Liu',
  description: 'Selected publications by Zhiwei Liu across AI agents, large language models, recommendation, and information retrieval.',
};

export default function PublicationsPage() {
  return (
    <main className="publicationsPage">
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="/" aria-label="Zhiwei Liu, home">ZL<span>.</span></a>
        <div className="navLinks">
          <a href="/">Home</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>

      <header className="publicationsHero">
        <p className="eyebrow">Research archive</p>
        <h1>Publications<span>.</span></h1>
        <p>
          Selected work spanning agent systems, large language models,
          multimodal intelligence, search, and recommender systems.
        </p>
      </header>

      <PublicationList />

      <section className="scholarBand">
        <p>Looking for the complete citation record?</p>
        <a href="https://scholar.google.com/citations?hl=en&user=dfjWd2oAAAAJ" target="_blank" rel="noreferrer">
          View Google Scholar <span>↗</span>
        </a>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Zhiwei Liu</p>
        <div><a href="/">Home</a><a href="/#contact">Contact</a></div>
      </footer>
    </main>
  );
}
