const profiles = [
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?hl=en&user=dfjWd2oAAAAJ' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zhiwei-liu-08272713a/' },
  { label: 'ORCID', href: 'https://orcid.org/0000-0003-1525-1067' },
];

const selectedPublications = [
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
            <a href="mailto:zhiweiliu@microsoft.com">Contact</a>
          </nav>
        </div>
      </header>

      <main className="academicPage">
        <section className="academicIntro" id="about">
          <div>
            <h1>Zhiwei Liu</h1>
            <p className="role">Senior Applied Scientist, Bing Search · Microsoft AI</p>
            <p>
              I am a Senior Applied Scientist at Microsoft AI, where I work on Bing Search.
              Previously, I was a Senior Research Scientist at Salesforce AI Research from
              2022 to 2026. I received my Ph.D. from the University of Illinois Chicago in 2022.
            </p>
            <p>
              My research interests include <strong>AI agents</strong>, <strong>large language models</strong>,
              <strong> information retrieval</strong>, <strong>recommender systems</strong>, and
              <strong> multimodal learning</strong>. I have authored more than 100 papers in venues
              including ICLR, SIGIR, KDD, and EMNLP, and hold 12 patents globally.
            </p>
          </div>
          <aside className="contactDetails">
            <h2>Contact</h2>
            <p>Microsoft AI<br />Redmond, Washington</p>
            <p><a href="mailto:zhiweiliu@microsoft.com">zhiweiliu@microsoft.com</a><br /><a href="mailto:jim96liu@gmail.com">jim96liu@gmail.com</a></p>
            <div className="profileLinks">
              {profiles.map((profile) => <a key={profile.label} href={profile.href} target="_blank" rel="noreferrer">{profile.label}</a>)}
            </div>
          </aside>
        </section>

        <section className="academicSection" id="news">
          <h2>News</h2>
          <ul className="newsList">
            <li><time dateTime="2026-05">May 2026</time><span>I joined Bing Search at Microsoft AI as a Senior Applied Scientist.</span></li>
          </ul>
        </section>

        <section className="academicSection">
          <h2>Research interests</h2>
          <ul className="interestList">
            <li>AI agents and tool-using language models</li>
            <li>Information retrieval and search</li>
            <li>Recommender systems and personalization</li>
            <li>Large language models and multimodal learning</li>
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
          <h2>Professional service</h2>
          <p>
            Associate Editor of JMLC; Guest Editor of ACM TORS; program committee member
            for conferences including NeurIPS, ICLR, ACL, WWW, and KDD.
          </p>
        </section>
      </main>

      <footer className="academicFooter">
        <p>© {new Date().getFullYear()} Zhiwei Liu. Last updated September 2026.</p>
      </footer>
    </>
  );
}
