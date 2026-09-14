/* eslint-disable @next/next/no-html-link-for-pages -- vinext currently fails to hydrate next/link */
import type { Metadata } from 'next';
import ActivityList from './activity-list';
import ServiceArchive from './service-archive';

export const metadata: Metadata = {
  title: 'Service & Activities — Zhiwei Liu',
  description: 'Professional service, editorial work, conference committees, workshop organization, and research milestones by Zhiwei Liu.',
};

export default function ServiceActivitiesPage() {
  return (
    <main className="servicePage">
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="/" aria-label="Zhiwei Liu, home">Zhiwei Liu</a>
        <div className="navLinks">
          <a href="/">Home</a>
          <a href="/publications">Publications</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>

      <header className="serviceHero">
        <h1>Service &amp; Activities</h1>
      </header>

      <section className="serviceSection" aria-labelledby="service-heading">
        <h2 id="service-heading">Professional service</h2>
        <ServiceArchive />
      </section>

      <section className="serviceSection activitySection" aria-labelledby="activity-heading">
        <h2 id="activity-heading">Activities</h2>
        <ActivityList />
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Zhiwei Liu</p>
        <div><a href="/">Home</a><a href="/#contact">Contact</a></div>
      </footer>
    </main>
  );
}
