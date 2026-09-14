'use client';

import { useState } from 'react';
import siteContent from '../data/site-content.json';

const INITIAL_ACTIVITY_COUNT = 5;

export default function ActivityList() {
  const [expanded, setExpanded] = useState(false);
  const activities = expanded ? siteContent.activities : siteContent.activities.slice(0, INITIAL_ACTIVITY_COUNT);

  return (
    <>
      <ol className="activityTimeline">
        {activities.map((activity) => (
          <li key={`${activity.date}-${activity.title}`}>
            <time dateTime={activity.date}>{activity.label}</time>
            <div>
              <h3>
                {'href' in activity && activity.href ? (
                  <a href={activity.href} target="_blank" rel="noreferrer">{activity.title} <span aria-hidden="true">↗</span></a>
                ) : activity.title}
              </h3>
              <p>{activity.detail}</p>
            </div>
          </li>
        ))}
      </ol>
      {siteContent.activities.length > INITIAL_ACTIVITY_COUNT && (
        <button className="archiveToggle" type="button" onClick={() => setExpanded((current) => !current)} aria-expanded={expanded}>
          {expanded ? 'Show fewer activities' : `Show all activities (${siteContent.activities.length})`}
        </button>
      )}
    </>
  );
}
