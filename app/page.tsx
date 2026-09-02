const links = [
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?hl=en&user=dfjWd2oAAAAJ' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zhiwei-liu-08272713a/' },
  { label: 'ORCID', href: 'https://orcid.org/0000-0003-1525-1067' },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Zhiwei Liu, home">
          ZL<span>.</span>
        </a>
        <div className="navLinks">
          <a href="#work">Research</a>
          <a href="/publications">Publications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Senior Applied Scientist · Microsoft AI</p>
          <h1>
            Building intelligent systems that <em>reason</em>, retrieve, and recommend.
          </h1>
          <p className="intro">
            I’m Zhiwei Liu, a researcher working at the intersection of AI agents,
            large language models, information retrieval, and recommender systems.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#work">Explore my research</a>
            <a className="textLink" href="mailto:zhiweiliu@microsoft.com">Get in touch <span>↗</span></a>
          </div>
        </div>

        <aside className="profileCard" aria-label="Profile summary">
          <div className="monogram" aria-hidden="true">ZL</div>
          <div className="profileMeta">
            <p className="profileName">Dr. Zhiwei Liu</p>
            <p>Bing Search · Microsoft AI</p>
          </div>
          <div className="profileRule" />
          <div className="profileStats">
            <div><strong>100+</strong><span>papers</span></div>
            <div><strong>12</strong><span>patents</span></div>
            <div><strong>Ph.D.</strong><span>UIC ’22</span></div>
          </div>
        </aside>
      </section>

      <section className="marquee" aria-label="Research areas">
        <span>AI Agents</span><i>✦</i><span>Large Language Models</span><i>✦</i>
        <span>Information Retrieval</span><i>✦</i><span>Recommender Systems</span>
      </section>

      <section className="firstSection" id="work">
        <p className="sectionLabel">Current focus</p>
        <h2>Research that moves from ideas to impact.</h2>
        <p>
          I develop capable, reliable AI systems—connecting advances in agentic
          reasoning with the real-world demands of search and recommendation.
        </p>
      </section>

      <section className="researchGrid" aria-label="Research areas">
        <article>
          <span>01</span>
          <h3>AI agents</h3>
          <p>Designing agents that can plan, reason, use tools, and be evaluated rigorously in real-world environments.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Search & retrieval</h3>
          <p>Connecting language intelligence with dependable information access at the scale and speed modern search demands.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Recommendation</h3>
          <p>Building personalized systems that understand intent, sequences, context, and the relationships between users and items.</p>
        </article>
      </section>

      <section className="selectedWork">
        <div className="sectionHeading">
          <div>
            <p className="sectionLabel">Selected publications</p>
            <h2>A few recent threads.</h2>
          </div>
          <a className="textLink" href="/publications">View publications <span>↗</span></a>
        </div>
        <div className="paperList">
          <a href="https://arxiv.org/abs/2507.12806" target="_blank" rel="noreferrer" className="paperRow">
            <span className="paperYear">2025</span>
            <div><h3>MCPEval: Automatic MCP-based Deep Evaluation for AI Agent Models</h3><p>AI Agents · Evaluation</p></div>
            <b aria-hidden="true">↗</b>
          </a>
          <a href="https://arxiv.org/abs/2409.03215" target="_blank" rel="noreferrer" className="paperRow">
            <span className="paperYear">2024</span>
            <div><h3>xLAM: A Family of Large Action Models to Empower AI Agent Systems</h3><p>Large Action Models · Agents</p></div>
            <b aria-hidden="true">↗</b>
          </a>
          <a href="https://arxiv.org/abs/2308.05960" target="_blank" rel="noreferrer" className="paperRow">
            <span className="paperYear">2024</span>
            <div><h3>BOLAA: Benchmarking and Orchestrating LLM-augmented Autonomous Agents</h3><p>ICLR LLMAgent Workshop</p></div>
            <b aria-hidden="true">↗</b>
          </a>
        </div>
      </section>

      <section className="aboutSection">
        <div className="aboutTitle">
          <p className="sectionLabel">About</p>
          <h2>Curious by nature.<br/><em>Practical</em> by design.</h2>
        </div>
        <div className="aboutCopy">
          <p>
            I am a Senior Applied Scientist with Bing Search at Microsoft AI. Before joining Microsoft in 2026,
            I spent four years at Salesforce AI Research, advancing agent systems, language models, and recommendation.
          </p>
          <p>
            I received my Ph.D. from the University of Illinois Chicago in 2022. My work has appeared at ICLR,
            SIGIR, KDD, EMNLP, and other leading venues. I also serve the research community as an Associate Editor
            of JMLC, a Guest Editor of ACM TORS, and a program committee member for major AI conferences.
          </p>
          <div className="aboutLinks">
            {links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} <span>↗</span></a>)}
          </div>
        </div>
      </section>

      <section className="newsSection">
        <p className="sectionLabel">Latest news</p>
        <div className="newsItem">
          <time dateTime="2026-05">May 2026</time>
          <p>I joined Bing Search at Microsoft AI as a Senior Applied Scientist.</p>
        </div>
      </section>

      <section className="contactBand" id="contact-cta">
        <p className="sectionLabel">Let’s connect</p>
        <h2>Interested in agents, search, or recommendation?</h2>
        <a href="mailto:zhiweiliu@microsoft.com">zhiweiliu@microsoft.com <span>↗</span></a>
      </section>

      <footer id="contact">
        <p>© {new Date().getFullYear()} Zhiwei Liu</p>
        <div>{links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}</div>
      </footer>
    </main>
  );
}
