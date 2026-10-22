import React from 'react'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import { SkillBadge } from '../components/SkillBadge'
import { skillsList } from '../data/skillsData'
import skills from '../assets/nav-search.png'

export function SkillsPage() {
  const title = 'Technical Skills'
  const description =
    ''

  const categories = [
    'AI & Machine Learning',
    'Frontend & UI',
    'Backend & Databases',
    'Languages & Core',
    'DevOps & Tools',
  ]

  return (
    <PageLayout>
      <Hero title={title} icon={skills} description={description} type="page" />

      <article className="page-article">
        {/* <h2>Tech Stack &amp; Tools</h2> */}
        <p>
          A comprehensive toolkit spanning Full-Stack Web Development, AI Forward Deployed Engineering, and System Design. Focus on writing efficient, clean, and production-ready code.
        </p>

        {/* All skills pill grid like screenshot */}
        {/* <div style={{ margin: '1.75rem 0' }}>
          <div className="skills-pill-group">
            {skillsList.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        <h2>Skills by Domain</h2> */}
        <div className="skills-container">
          {categories.map((category) => {
            const categorySkills = skillsList.filter(
              (s) => s.category === category
            )
            return (
              <div key={category} className="skills-category-section">
                <h3 className="skills-category-title">{category}</h3>
                <div className="skills-pill-group">
                  {categorySkills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <h2>System Design &amp; Architecture</h2>
        <ul>
          <li>
            <strong>High-Level Design (HLD):</strong> Client-Server Architecture, Microservices vs. Monoliths, Load Balancing, Caching Strategies (Redis), Database Sharding &amp; Replication, Scalability &amp; Availability.
          </li>
          <li>
            <strong>Low-Level Design (LLD):</strong> Object-Oriented Analysis &amp; Design (OOAD), SOLID Principles, 23 Design Patterns, Clean Architecture.
          </li>
          <li>
            <strong>Scalability &amp; Reliability:</strong> Rate Limiting, API Optimization, Message Queues, Fault Tolerance, Asynchronous Processing.
          </li>
        </ul>
      </article>
    </PageLayout>
  )
}
