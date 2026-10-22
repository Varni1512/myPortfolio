import React from 'react'
import { Link } from 'react-router-dom'

import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import floppy from '../assets/floppylogo.png'
import me from '../assets/me.png'

export function AboutPage() {
  return (
    <PageLayout>
      <Hero title="About Me" icon={floppy} type="page" />

      <article className="page-article">
        <img
          src={me}
          alt="Varnikumar Patel"
          className="image-float"
        />

        <p>
         Hey, I'm Varni! Welcome to my little corner of the web, where I share my thoughts, things I'm learning, and bits of creativity. I enjoy exploring new ideas, building things just for the fun of it, solving puzzles, and discovering how things work behind the scenes.
        </p>

        <p>
          Outside of coding, I'm always curious about something new, whether it's technology, design, or a random idea that sends me down a rabbit hole. I believe the internet should be a place where people can express themselves, share what they learn, and create things that inspire others.
        </p>

        <p>
          This website is my own little space on the internet — a place to experiment, document my journey, and put my ideas out into the world. I hope it encourages others to create their own little corner of the web, too.
        </p>

        <p>
          If you want to explore my work, check out my{' '}
          <Link to="/projects">projects</Link>, view my{' '}
          <Link to="/experience">experience</Link>, or look through my{' '}
          <Link to="/skills">technical skills</Link>. There's plenty of code and
          architectural work to peruse through, so please enjoy!
        </p>

        <h2 id="contact">
          Contact
        </h2>

        <p>Send me an email to say hi, or connect via the socials.</p>

        <ul>
          <li>
            Email: <a href="mailto:varni1505@gmail.com">varni1505@gmail.com</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/varni1512"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Varni1512"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://resume.vkpatel.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </article>
    </PageLayout>
  )
}
