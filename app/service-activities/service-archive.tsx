'use client';

import { useState } from 'react';

type ServiceCategory = 'Editorial' | 'Workshop' | 'Conference';

type ServiceRecord = {
  period: string;
  role: string;
  organization: string;
  category: ServiceCategory;
  href?: string;
};

const serviceRecords: ServiceRecord[] = [
  { period: 'Current', role: 'Associate Editor', organization: 'International Journal of Machine Learning and Cybernetics (JMLC)', category: 'Editorial', href: 'https://link.springer.com/journal/13042/editorial-board' },
  { period: '2022–23', role: 'Guest Editor', organization: 'ACM TORS · Special Issue on Knowledge Transferring for Recommender Systems', category: 'Editorial', href: 'https://recommender-systems.com/news/2023/06/28/acm-tors-cfp-kt4rec/' },
  { period: 'Selected', role: 'Guest Editor', organization: 'Electronics · Special Issue on Machine Intelligent Information and Efficient System', category: 'Editorial' },
  { period: '2026', role: 'Co-chair / organizer', organization: '5th Agent4IR Workshop at KDD', category: 'Workshop', href: 'https://sites.google.com/view/ai4ir/kdd-2026' },
  { period: '2024', role: 'Organizer', organization: 'Agent4IR Workshop at CIKM', category: 'Workshop', href: 'https://sites.google.com/view/ai4ir' },
  { period: '2022', role: 'Program committee', organization: 'Decision Making for Modern Information Retrieval Systems at WSDM', category: 'Workshop', href: 'https://decisionmaking4ir.github.io/WSDM-2022/' },
  { period: '2021', role: 'Program committee', organization: 'International Workshop on Industrial Recommendation Systems (IRS)', category: 'Workshop', href: 'https://irsworkshop.github.io/2021/index.html' },
  { period: '2026', role: 'Program committee', organization: 'NeurIPS; CIKM', category: 'Conference' },
  { period: '2025', role: 'Program committee', organization: 'The Web Conference (WWW)', category: 'Conference' },
  { period: '2024', role: 'Program committee', organization: 'ACM RecSys', category: 'Conference' },
  { period: '2024', role: 'Program committee', organization: 'NeurIPS', category: 'Conference' },
  { period: '2024', role: 'Program committee', organization: 'AAAI', category: 'Conference' },
  { period: '2024', role: 'Program committee', organization: 'IJCAI · AI and Social Good track', category: 'Conference' },
  { period: '2024', role: 'Program committee', organization: 'The Web Conference (WWW)', category: 'Conference' },
  { period: '2024', role: 'Program committee', organization: 'EACL · NAACL · ACL', category: 'Conference' },
  { period: '2024', role: 'Program committee', organization: 'SIAM International Conference on Data Mining (SDM)', category: 'Conference' },
  { period: '2023', role: 'Program committee', organization: 'KDD', category: 'Conference' },
  { period: '2023', role: 'Program committee', organization: 'IJCAI', category: 'Conference' },
  { period: '2023', role: 'Program committee', organization: 'The Web Conference (WWW)', category: 'Conference' },
  { period: '2023', role: 'Program committee', organization: 'AAAI', category: 'Conference' },
  { period: '2022', role: 'Program committee', organization: 'IEEE Distributed Storage and Systems (DSS)', category: 'Conference' },
  { period: '2022', role: 'Program committee', organization: 'CIKM', category: 'Conference' },
  { period: '2022', role: 'Program committee', organization: 'ECML-PKDD', category: 'Conference' },
  { period: '2022', role: 'Program committee', organization: 'KDD', category: 'Conference' },
  { period: '2022', role: 'Program committee', organization: 'IJCAI', category: 'Conference' },
  { period: '2021', role: 'Program committee', organization: 'IJCAI', category: 'Conference' },
  { period: '2020', role: 'External reviewer', organization: 'KDD', category: 'Conference' },
];

const serviceGroups: Array<{ category: ServiceCategory; label: string }> = [
  { category: 'Editorial', label: 'Editorial service' },
  { category: 'Workshop', label: 'Workshop organization' },
  { category: 'Conference', label: 'Conference service' },
];

const INITIAL_RECORDS_PER_GROUP = 2;

function ServiceRow({ record }: { record: ServiceRecord }) {
  const content = (
    <>
      <span className="servicePeriod">{record.period}</span>
      <div className="serviceRecordText">
        <h4>{record.organization}</h4>
        <p>{record.role}</p>
      </div>
      {record.href && <span className="serviceArrow" aria-hidden="true">↗</span>}
    </>
  );

  return record.href ? (
    <a className="serviceRecord" href={record.href} target="_blank" rel="noreferrer">{content}</a>
  ) : (
    <article className="serviceRecord">{content}</article>
  );
}

export default function ServiceArchive() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="serviceArchive">
      {serviceGroups.map((group) => {
        const records = serviceRecords.filter((record) => record.category === group.category);
        const visibleRecords = expanded ? records : records.slice(0, INITIAL_RECORDS_PER_GROUP);

        return (
          <section className="serviceGroup" key={group.category} aria-labelledby={`service-${group.category.toLowerCase()}`}>
            <div className="serviceGroupTitle">
              <h3 id={`service-${group.category.toLowerCase()}`}>{group.label}</h3>
              <span>{records.length} {records.length === 1 ? 'role' : 'roles'}</span>
            </div>
            <div className="serviceRecords">
              {visibleRecords.map((record) => (
                <ServiceRow record={record} key={`${record.period}-${record.organization}`} />
              ))}
            </div>
          </section>
        );
      })}

      <button className="archiveToggle" type="button" onClick={() => setExpanded((current) => !current)} aria-expanded={expanded}>
        {expanded ? 'Show fewer services' : `Show all services (${serviceRecords.length})`}
      </button>
    </div>
  );
}
