import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { ColorDropdown } from './ColorDropdown'
import floppyLogo from '../assets/nav-floppy.png'
import { mainNavLinks, subNavLinks } from '../data/navLinks'
import { Moon } from '../assets/Moon'
import { Sun } from '../assets/Sun'
import { GitHub } from '../assets/GitHub'
import { LinkedIn } from '../assets/LinkedIn'
import { LeetCode } from '../assets/LeetCode'
import { GeeksforGeeks } from '../assets/GeeksforGeeks'
import { File } from '../assets/File'

export const Sidebar = ({
  theme,
  handleUpdateTheme,
  currentColor,
  setCurrentColor,
}) => {
  const links = mainNavLinks
  const subLinks = subNavLinks
  const socialLinks = [
    { url: 'https://github.com/Varni1512', 
      label: 'GitHub', 
      Icon: GitHub 
    },
    {
      url: 'https://www.linkedin.com/in/varni1512',
      label: 'LinkedIn',
      Icon: LinkedIn,
    },
    {
      url: 'https://leetcode.com/u/Varni1102',
      label: 'LeetCode',
      Icon: LeetCode,
    },
    {
      url: 'https://www.geeksforgeeks.org/profile/varni152',
      label: 'GeeksforGeeks',
      Icon: GeeksforGeeks,
    },
    {
      url: 'https://resume.vkpatel.in/',
      label: 'Resume',
      Icon: File,
    },
  ]

  return (
    <aside className="sidebar">
      <section className="sidebar-section">
        <div className="sidebar-title-link">
          <Link to="/" className="flex-align-center gap">
            <span>
              <img
                src={floppyLogo}
                className="navbar-logo"
                alt="vkpatel.in"
                title="💾"
                height="16"
                width="16"
              />
            </span>
            <span className="site-name">vkpatel.in</span>
          </Link>
          <div className="flex-align-center">
            <ColorDropdown
              currentColor={currentColor}
              setCurrentColor={setCurrentColor}
            />
            <div className="tooltip-container">
              <button
                className="navbar-button"
                onClick={() => {
                  const newTheme = theme === 'dark' ? 'light' : 'dark'
                  handleUpdateTheme(newTheme)
                }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun /> : <Moon />}
              </button>
              <div className="tooltip">Theme</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sidebar-section">
        <div className="sidebar-content">
          <p>
            I'm <Link to="/me">Varni</Link>, software engineer and open-source contributor. This is my digital garden. 🌱
          </p>
        </div>
      </section>

      <section className="sidebar-section">
        <nav className="sidebar-nav-links">
          {links.map((link) => (
            <NavLink
              key={link.url}
              to={link.url}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <img src={link.image} alt="" />
              {link.label}
            </NavLink>
          ))}
        </nav>
      </section>

      <div className="sidebar-bottom">
        <section className="sidebar-section">
          <nav className="sidebar-links">
            {socialLinks.map(({ url, label, Icon, image }) => (
              <div className="tooltip-container tooltip-above" key={url}>
                {url.startsWith('http') ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    {Icon ? (
                      <Icon size={20} />
                    ) : (
                      <img src={image} alt="" width="20" height="20" />
                    )}
                  </a>
                ) : (
                  <a href={url} aria-label={label}>
                    {Icon ? (
                      <Icon size={20} />
                    ) : (
                      <img src={image} alt="" width="20" height="20" />
                    )}
                  </a>
                )}
                <div className="tooltip">{label}</div>
              </div>
            ))}
          </nav>
        </section>

        <nav className="sidebar-sub-links">
          {subLinks.map((link, index) => (
            <React.Fragment key={link.url}>
              {index > 0 && <div className="divider" />}
              {link.url.startsWith('http') ? (
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ) : (
                <NavLink
                  to={link.url}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {link.label}
                </NavLink>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </aside>
  )
}
