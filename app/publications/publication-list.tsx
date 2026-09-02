'use client';

import { useMemo, useState } from 'react';

const publications = [
  { year: 2025, title: 'MCPEval: Automatic MCP-based Deep Evaluation for AI Agent Models', venue: 'arXiv', topic: 'Agents', href: 'https://arxiv.org/abs/2507.12806' },
  { year: 2025, title: 'LATTE: Learning to Think with Vision Specialists', venue: 'EMNLP', topic: 'Multimodal', href: 'https://arxiv.org/abs/2412.05479' },
  { year: 2024, title: 'PRACT: Optimizing Principled Reasoning and Acting of LLM Agent', venue: 'CoNLL', topic: 'Agents', href: 'https://arxiv.org/abs/2410.18528' },
  { year: 2024, title: 'xLAM: A Family of Large Action Models to Empower AI Agent Systems', venue: 'arXiv', topic: 'Agents', href: 'https://arxiv.org/abs/2409.03215' },
  { year: 2024, title: 'AgentLite: A Lightweight Library for Building and Advancing Task-Oriented LLM Agent System', venue: 'arXiv', topic: 'Agents', href: 'https://arxiv.org/abs/2402.15538' },
  { year: 2024, title: 'BOLAA: Benchmarking and Orchestrating LLM-augmented Autonomous Agents', venue: 'ICLR LLMAgent', topic: 'Agents', href: 'https://arxiv.org/abs/2308.05960' },
  { year: 2024, title: 'Retroformer: Retrospective Large Language Agents with Policy Gradient Optimization', venue: 'ICLR', topic: 'Agents', href: 'https://arxiv.org/abs/2308.02151' },
  { year: 2023, title: 'DialogStudio: Towards Richest and Most Diverse Unified Dataset Collection for Conversational AI', venue: 'arXiv', topic: 'Language', href: 'https://arxiv.org/abs/2307.10172' },
  { year: 2021, title: 'Contrastive Self-supervised Sequential Recommendation with Robust Augmentation', venue: 'Sequential recommendation', topic: 'Recommendation', href: 'https://arxiv.org/abs/2108.06479' },
  { year: 2021, title: 'Continuous-Time Sequential Recommendation with Temporal Graph Collaborative Transformer', venue: 'CIKM', topic: 'Recommendation', href: 'https://arxiv.org/abs/2108.06625' },
  { year: 2021, title: 'Augmenting Sequential Recommendation with Pseudo-Prior Items via Reversely Pre-training Transformer', venue: 'SIGIR', topic: 'Recommendation', href: 'https://arxiv.org/abs/2105.00522' },
];

const topics = ['All', 'Agents', 'Multimodal', 'Language', 'Recommendation'];

export default function PublicationList() {
  const [query, setQuery] = useState('');
  const [topic, setTopic] = useState('All');

  const filtered = useMemo(() => publications.filter((paper) => {
    const matchesTopic = topic === 'All' || paper.topic === topic;
    const haystack = `${paper.title} ${paper.venue} ${paper.topic} ${paper.year}`.toLowerCase();
    return matchesTopic && haystack.includes(query.toLowerCase().trim());
  }), [query, topic]);

  return (
    <section className="publicationArchive" aria-label="Selected publications">
      <div className="publicationTools">
        <label className="searchBox">
          <span className="srOnly">Search publications</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search titles, topics, or venues…" />
          <b aria-hidden="true">⌕</b>
        </label>
        <div className="topicFilters" aria-label="Filter publications by topic">
          {topics.map((item) => (
            <button key={item} className={topic === item ? 'active' : ''} onClick={() => setTopic(item)}>{item}</button>
          ))}
        </div>
      </div>

      <div className="publicationCount">{filtered.length} selected {filtered.length === 1 ? 'paper' : 'papers'}</div>
      <div className="archiveList">
        {filtered.map((paper, index) => (
          <a href={paper.href} target="_blank" rel="noreferrer" className="archiveRow" key={paper.title}>
            <span className="archiveIndex">{String(index + 1).padStart(2, '0')}</span>
            <div className="archiveTitle"><h2>{paper.title}</h2><p>{paper.topic}</p></div>
            <div className="archiveMeta"><span>{paper.venue}</span><strong>{paper.year}</strong></div>
            <b aria-hidden="true">↗</b>
          </a>
        ))}
        {filtered.length === 0 && <p className="emptyState">No papers match that search. Try another topic or phrase.</p>}
      </div>
    </section>
  );
}
