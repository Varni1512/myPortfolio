import React from 'react'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import experience from '../assets/nav-blog.png'
import { experiences } from '../data/experienceData'

const CalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="15"
    height="15"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

export function ExperiencePage() {
  const title = 'Experience'
  const description =
    'Internships, summer schools, open-source fellowships, and engineering contributions.'

  return (
    <PageLayout>
      <Hero
        title={title}
        icon={experience}
        description={description}
        type="page"
      />

      <article className="page-article">
        <div className="timeline-container">
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-node">
                <CalendarIcon />
              </div>

              <div className="timeline-header">
                <h3 className="timeline-title">
                  {exp.role}
                  {exp.organization && (
                    <span className="timeline-org"> &bull; {exp.organization}</span>
                  )}
                </h3>
                {exp.isLatest && <span className="timeline-badge">Latest</span>}
              </div>

              <div className="timeline-date">{exp.date}</div>

              <p className="timeline-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </article>
    </PageLayout>
  )
}
