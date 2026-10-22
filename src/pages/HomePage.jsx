import React from 'react'
import { Link } from 'react-router-dom'

import { Heading } from '../components/Heading'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import { projectsList } from '../data/projectsList'
import { SkillBadge } from '../components/SkillBadge'
import { skillsList } from '../data/skillsData'
import github from '../assets/nav-github.png'

export function HomePage() {
  return (
    <PageLayout>
      <Hero type="index">
        <div className="hero-wrapper">
          <div>
            <h1 className="flex-align-center gap">Hey, I'm Varni!</h1>
            <p className="hero-description hero-tagline">
              Software Developer &amp; AI Forward Deployed Engineer.
            </p>
            <Heading title="A brief timeline" small />
            <ul className="hero-eras">
              <li>
                <span className="era-dates">2020&ndash;2021</span>
                <span>
                  <strong>Secondary School</strong>: BAPS Swaminarayan Vidyamandir. Early interest in computers, logic, and mathematics.
                </span>
              </li>
              <li>
                <span className="era-dates">2022&ndash;2023</span>
                <span>
                  <strong>Higher Secondary</strong>: BAPS Swaminarayan Vidyamandir. Science stream with strong analytical foundation.
                </span>
              </li>
              <li>
                <span className="era-dates">2023&ndash;2027</span>
                <span>
                  <Link to="/experience">B.Tech in CSE (AI &amp; ML)</Link>: Vellore Institute Of Technology. MERN stack, system design, and AI solutions.
                </span>
              </li>
              <li>
                <span className="era-dates">Present</span>
                <span>
                  <Link to="/skills">Software Developer &amp; AI FDE</Link>: Building web apps, LLM workflows, and solving DSA on{' '}
                  <a
                    href="https://leetcode.com/u/Varni1102"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LeetCode
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://github.com/Varni1512"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  .
                </span>
              </li>
            </ul>
            <p className="hero-description">
              <Link to="/me">Also</Link>: competitive programming, system design, tech explorer, problem solver.
            </p>
          </div>
          <div className="hero-image-container">
            <img src="/ram.png" className="hero-image" alt="Varnikumar Patel" />
            <aside className="hero-bubble">
              Can't remember how to spell my name? Just go to{' '}
              <a href="https://resume.vkpatel.in/" target="_blank" rel="noreferrer">
                vkpatel.in
              </a>
              !
            </aside>
          </div>
        </div>
      </Hero>

      <section className="section-index">
        <Heading
          title="Skills"
          slug="/skills"
          buttonText="All Skills"
          description="Technologies and engineering domains I work with."
        />
        <div style={{ margin: '1.25rem 0' }}>
          <div className="skills-pill-group">
            {skillsList.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-index">
        <Heading
          title="Projects"
          slug="/projects"
          buttonText="All Projects"
          description="Featured web applications and software engineering builds."
          icon={github}
        />

        <div className="cards">
          {projectsList
            .filter((project) => project.highlight)
            .map((project) => {
              return (
                <div className="card" key={`hightlight-${project.slug}`}>
                  <time>{project.date}</time>
                  <a
                    href={project.url || `https://github.com/Varni1512`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.name}
                  </a>
                  <p>{project.tagline}</p>
                  <div className="card-links">
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noreferrer">
                        Demo
                      </a>
                    )}
                    <a
                      href={project.repo || `https://github.com/Varni1512`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source
                    </a>
                  </div>
                </div>
              )
            })}
        </div>
      </section>
    </PageLayout>
  )
}
