import React, { useState, useEffect } from 'react'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import { projectsList } from '../data/projectsList'
import projects from '../assets/nav-projects.png'

export function ProjectsPage() {
  const [repos, setRepos] = useState([])
  const title = 'Projects'
  const description =
    'Featured projects, full-stack applications, AI integrations, and system architectures.'

  useEffect(() => {
    async function getStars() {
      try {
        const res = await fetch(
          'https://api.github.com/users/Varni1512/repos?per_page=100'
        )
        const data = await res.json()
        if (Array.isArray(data)) {
          setRepos(data)
        }
      } catch (err) {
        console.error(err)
      }
    }

    getStars()
  }, [])

  return (
    <PageLayout>
      <Hero title={title} description={description} icon={projects} />

      <div className="cards">
        {projectsList.map((project) => {
          const projectUrl =
            project.repo || `https://github.com/Varni1512/${project.slug}`

          return (
            <div className="card" key={project.slug}>
              <a
                className="card-header"
                href={project.url || projectUrl}
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
                <a href={projectUrl} target="_blank" rel="noreferrer">
                  Source
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </PageLayout>
  )
}
