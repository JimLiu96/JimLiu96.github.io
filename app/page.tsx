/* eslint-disable @next/next/no-html-link-for-pages -- vinext currently fails to hydrate next/link */
import Image from 'next/image';
import siteContent from './data/site-content.json';

const profiles = [
  { label: 'Google Scholar', icon: 'scholar', href: 'https://scholar.google.com/citations?hl=en&user=dfjWd2oAAAAJ' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/zhiwei-liu-08272713a/' },
  { label: 'ORCID', icon: 'orcid', href: 'https://orcid.org/0000-0003-1525-1067' },
];

function ProfileIcon({ name }: { name: string }) {
  if (name === 'scholar') {
    return (
      <svg className="profileIcon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 3 1.5 9 12 15l8.5-4.86V16h2V9L12 3Z" />
        <path fill="currentColor" d="M5 12.15v4.35C5 18.43 8.13 20 12 20s7-1.57 7-3.5v-4.35L12 16l-7-3.85Z" />
      </svg>
    );
  }

  if (name === 'linkedin') {
    return (
      <svg className="profileIcon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.1 20.45H3.54V8.98H7.1v11.47Z" />
      </svg>
    );
  }

  return (
    <svg className="profileIcon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <text x="12" y="15.2" fill="white" fontSize="8.5" fontFamily="Arial, sans-serif" fontWeight="700" textAnchor="middle">iD</text>
    </svg>
  );
}

const selectedPublications = [
  {
    year: '2026',
    title: 'Test-Time Adaptation for LLM Agents via Environment Interaction',
    authors: 'A. Chen, Z. Liu, J. Zhang, A. Prabhakar, Z. Liu, S. Heinecke, S. Savarese, et al.',
    venue: 'International Conference on Learning Representations (ICLR)',
    href: 'https://scholar.google.com/citations?view_op=view_citation&user=dfjWd2oAAAAJ&citation_for_view=dfjWd2oAAAAJ:kRWSkSYxWN8C',
  },
  {
    year: '2026',
    title: 'WebScale-RL: Automated Data Pipeline for Scaling RL Data to Pretraining Levels',
    authors: 'Z. Cen, H. Chen, S. Wang, Z. Liu, Z. Liu, D. Zhao, C. Xiong, H. Wang, W. Yao',
    venue: 'International Conference on Learning Representations (ICLR)',
    href: 'https://scholar.google.com/citations?view_op=view_citation&user=dfjWd2oAAAAJ&citation_for_view=dfjWd2oAAAAJ:sSrBHYA8nusC',
  },
  {
    year: '2026',
    title: 'UserBench: An Interactive Gym Environment for User-Centric Agents',
    authors: 'Cheng Qian, Zuxin Liu, Akshara Prabhakar, Zhiwei Liu, et al.',
    venue: 'Conference on Empirical Methods in Natural Language Processing (EMNLP)',
    href: 'https://openreview.net/forum?id=4kOvQ62Q0k',
  },
  {
    year: '2026',
    title: 'UserRL: A Gym-Based Testbed for User-Centric Reinforcement Learning',
    authors: 'Cheng Qian, Zuxin Liu, Akshara Prabhakar, Jielin Qiu, Zhiwei Liu, et al.',
    venue: 'Conference on Empirical Methods in Natural Language Processing (EMNLP)',
    href: 'https://openreview.net/forum?id=5Vwmy68Vto',
  },
  {
    year: '2025',
    title: 'MCPEval: Automatic MCP-based Deep Evaluation for AI Agent Models',
    authors: 'Zhiwei Liu, Jielin Qiu, Shiyu Wang, Jianguo Zhang, et al.',
    venue: 'arXiv preprint',
    href: 'https://arxiv.org/abs/2507.12806',
  },
  {
    year: '2024',
    title: 'xLAM: A Family of Large Action Models to Empower AI Agent Systems',
    authors: 'Jianguo Zhang, Tian Lan, Ming Zhu, Zuxin Liu, et al.',
    venue: 'arXiv preprint',
    href: 'https://arxiv.org/abs/2409.03215',
  },
  {
    year: '2024',
    title: 'PRACT: Optimizing Principled Reasoning and Acting of LLM Agent',
    authors: 'Zhiwei Liu, Weiran Yao, Jianguo Zhang, Rithesh Murthy, et al.',
    venue: 'Conference on Natural Language Learning (CoNLL)',
    href: 'https://arxiv.org/abs/2410.18528',
  },
  {
    year: '2024',
    title: 'BOLAA: Benchmarking and Orchestrating LLM-augmented Autonomous Agents',
    authors: 'Zhiwei Liu, Weiran Yao, Jianguo Zhang, Le Xue, et al.',
    venue: 'LLMAgent Workshop at ICLR',
    href: 'https://arxiv.org/abs/2308.05960',
  },
  {
    year: '2023',
    title: 'DialogStudio: Towards Richest and Most Diverse Unified Dataset Collection for Conversational AI',
    authors: 'Jianguo Zhang, Kun Qian, Zhiwei Liu, Shelby Heinecke, et al.',
    venue: 'arXiv preprint',
    href: 'https://arxiv.org/abs/2307.10172',
  },
];

export default function Home() {
  return (
    <>
      <header className="siteHeader">
        <div className="siteHeaderInner">
          <a className="siteName" href="/">Zhiwei Liu</a>
          <nav aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#news">News</a>
            <a href="#publications">Publications</a>
            <a href="/service-activities">Service &amp; Activities</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="academicPage">
        <section className="academicIntro" id="about">
          <div>
            <h1>Zhiwei Liu</h1>
            <p className="role">Member of Technical Staff · Recursive</p>
            <p>
              I am a Member of Technical Staff at Recursive. Previously, I was a Senior Applied
              Scientist at Microsoft AI, where I worked on Bing Search, and a Senior Research
              Scientist at Salesforce AI Research from 2022 to 2026. I received my Ph.D. from
              the University of Illinois Chicago in 2022, advised by{' '}
              <a href="https://cs.uic.edu/profiles/philip-yu/" target="_blank" rel="noreferrer">Philip S. Yu</a>.
              {' '}I completed my undergraduate studies at the Yingcai Honor School at the
              University of Electronic Science and Technology of China (UESTC).
            </p>
            <p>
              My current research focuses on <strong>Recursive Super-intelligence (RSI)</strong>,
              <strong> Agent Data &amp; Evaluation</strong>, and <strong>Agentic Information Retrieval</strong>.
              I have authored more than 100 papers in venues including NeurIPS, ICLR, KDD, SIGIR,
              WSDM, WWW, CIKM, and EMNLP, and hold 12 patents globally.
            </p>
            <p>
              I also contribute to the research community as an Associate Editor, guest editor,
              workshop organizer, and program committee member across AI, natural language
              processing, information retrieval, data mining, and recommender systems.
            </p>
          </div>
          <aside className="profileSidebar">
            <figure className="profileFigure">
              <Image
                src="/images/profile-sd-2025.jpg"
                alt="Zhiwei Liu by the ocean at sunset in San Diego"
                width={3024}
                height={4032}
                priority
                sizes="(max-width: 680px) 100vw, 250px"
              />
              <figcaption>Photo in 2025, San Diego.</figcaption>
            </figure>
            <div className="contactDetails" id="contact">
              <h2>Contact</h2>
              <p>Recursive</p>
              <p>zhiweiliu@recursive.com<br />jim96liu [at] gmail.com</p>
              <div className="profileLinks">
                {profiles.map((profile) => (
                  <a key={profile.label} href={profile.href} target="_blank" rel="noreferrer">
                    <ProfileIcon name={profile.icon} />
                    <span>{profile.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="academicSection" id="news">
          <h2>News</h2>
          <ul className="newsList">
            {siteContent.homeNews.map((item) => (
              <li key={`${item.date}-${item.title}`}>
                <time dateTime={item.date}>{item.label}</time>
                <span>
                  {'href' in item && item.href ? <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a> : item.title}
                  {item.detail && <> {item.detail}</>}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="academicSection">
          <h2>Research interests</h2>
          <ul className="interestList">
            <li>Recursive Super-intelligence (RSI)</li>
            <li>Agent Data &amp; Evaluation</li>
            <li>Agentic Information Retrieval</li>
          </ul>
        </section>

        <section className="academicSection" id="publications">
          <div className="sectionTitleRow">
            <h2>Selected publications</h2>
            <a href="/publications">View more publications →</a>
          </div>
          <ol className="publicationList">
            {selectedPublications.map((paper) => (
              <li key={paper.title}>
                <a className="publicationTitle" href={paper.href} target="_blank" rel="noreferrer">{paper.title}</a>
                <span className="publicationAuthors">{paper.authors}</span>
                <span className="publicationVenue"><em>{paper.venue}</em>, {paper.year}.</span>
              </li>
            ))}
          </ol>
          <p className="allPublications">
            For a complete and current list, see my <a href="https://scholar.google.com/citations?hl=en&user=dfjWd2oAAAAJ" target="_blank" rel="noreferrer">Google Scholar profile</a>.
          </p>
        </section>

        <section className="academicSection">
          <div className="sectionTitleRow">
            <h2>Professional service</h2>
            <a href="/service-activities">View full service &amp; activities →</a>
          </div>
          <p>
            Associate Editor of the International Journal of Machine Learning and Cybernetics;
            Guest Editor for ACM TORS and Electronics; co-chair and organizer of Agent4IR workshops
            at KDD and CIKM; and program committee member for NeurIPS, CIKM, WWW, RecSys, AAAI,
            IJCAI, ACL, NAACL, EACL, KDD, SDM, and ECML-PKDD.
          </p>
        </section>
      </main>

      <footer className="academicFooter">
        <p>© {new Date().getFullYear()} Zhiwei Liu. Last updated September 2026.</p>
      </footer>
    </>
  );
}
