import React from 'react'
import { GitHub } from '../assets/GitHub'
import { LinkedIn } from '../assets/LinkedIn'
import { Heart } from '../assets/Heart'

const madeWithLinks = [
  {
    url: 'https://github.com/Varni1512',
    label: 'GitHub',
    Icon: GitHub,
  },
  {
    url: 'https://www.linkedin.com/in/varni1512',
    label: 'LinkedIn',
    Icon: LinkedIn,
  },
]

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-section">
        <nav className="footer-menu-buttons">
          {madeWithLinks.map((link) => (
            <a
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
              className="button small"
            >
              <link.Icon size={16} />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
        <div className="footer-made-by">
          Made with <Heart size={14} /> by Varnikumar Patel
        </div>
      </section>
    </footer>
  )
}
