import React from 'react'

import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'

export function ResumePage() {
  const title = 'Resume'
  const description =
    'Software Developer & AI Forward Deployed Engineer &bull; Education, skills, and technical background.'

  return (
    <PageLayout>
      <Hero title={title} description={description} type="page" />

      <article className="page-article">
        <div style={{ marginBottom: '1.5rem' }}>
          <p>
            View the dedicated live resume anytime at:{' '}
            <a
              href="https://resume.vkpatel.in/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>resume.vkpatel.in &rarr;</strong>
            </a>
          </p>
        </div>

        <h2>Summary</h2>
        <p>
          Software Developer and AI Forward Deployed Engineer with expertise in building robust, performant web applications using the MERN stack (MongoDB, Express, React, Node.js), designing scalable systems, and integrating artificial intelligence into software workflows. Deep grounding in core Computer Science principles and active competitive programmer.
        </p>

        <h2>Education</h2>
        <h3>
          Vellore Institute Of Technology (VIT) &bull; 2023&ndash;2027
        </h3>
        <p>
          <strong>B.Tech in Computer Science and Engineering (AI &amp; ML)</strong>
        </p>
        <ul>
          <li>Specialization in Artificial Intelligence and Machine Learning.</li>
          <li>Comprehensive study in Operating Systems, Database Management Systems, Computer Networks, System Design, and Object-Oriented Programming.</li>
        </ul>

        <h3>
          BAPS Swaminarayan Vidyamandir &bull; 2022&ndash;2023
        </h3>
        <p>
          <strong>Higher Secondary Education (GSEB) &bull; 12th Grade</strong>
        </p>

        <h3>
          BAPS Swaminarayan Vidyamandir &bull; 2020&ndash;2021
        </h3>
        <p>
          <strong>Secondary Education (GSEB) &bull; 10th Grade</strong>
        </p>

        <h2>Key Skills</h2>
        <ul>
          <li><strong>Frontend:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Web Design</li>
          <li><strong>Backend:</strong> Node.js, Express.js, RESTful APIs, JWT Authentication</li>
          <li><strong>Database:</strong> MongoDB, Mongoose, Data Modeling, Indexing, SQL basics</li>
          <li><strong>AI &amp; ML:</strong> AI Forward Deployed Engineering, LLM Integration, Prompt Engineering, Agentic Systems, Python</li>
          <li><strong>System Design:</strong> High-Level Design (HLD), Low-Level Design (LLD), Scalability, Microservices, Caching</li>
          <li><strong>Core CS:</strong> Data Structures &amp; Algorithms, Operating Systems, DBMS, Computer Networks, OOPs</li>
        </ul>

        <h2>Online Profiles</h2>
        <ul>
          <li><a href="https://github.com/Varni1512" target="_blank" rel="noreferrer">GitHub (@Varni1512)</a></li>
          <li><a href="https://www.linkedin.com/in/varni1512" target="_blank" rel="noreferrer">LinkedIn (@varni1512)</a></li>
          <li><a href="https://leetcode.com/u/Varni1102" target="_blank" rel="noreferrer">LeetCode (@Varni1102)</a></li>
          <li><a href="https://www.geeksforgeeks.org/profile/varni152" target="_blank" rel="noreferrer">GeeksforGeeks (@varni152)</a></li>
        </ul>
      </article>
    </PageLayout>
  )
}
