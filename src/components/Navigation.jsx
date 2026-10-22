import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import floppyLogo from '../assets/nav-floppy.png'
import { Moon } from '../assets/Moon'
import { Sun } from '../assets/Sun'
import { Menu } from '../assets/Menu'
import { Close } from '../assets/Close'
import { GitHub } from '../assets/GitHub'
import { LinkedIn } from '../assets/LinkedIn'
import { ColorDropdown } from './ColorDropdown'
import { mainNavLinks as links } from '../data/navLinks'

const socialLinks = [
  { url: 'https://github.com/Varni1512', label: 'GitHub', Icon: GitHub },
  { url: 'https://www.linkedin.com/in/varni1512', label: 'LinkedIn', Icon: LinkedIn },
]

export const Navigation = ({
  handleUpdateTheme,
  theme,
  currentColor,
  setCurrentColor,
}) => {
  const [navOpen, setNavOpen] = useState(false)

  const handleToggleMobileNav = () => {
    setNavOpen((prev) => !prev)
  }

  const handleCloseMobileNav = () => {
    setNavOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-title">
        <div className="navbar-title-content">
          <Link to="/" className="navbar-title-link">
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
        </div>
      </div>
      <div className="navbar-container">
        <section className="navbar-section">
          <button
            className={`navbar-button nav-menu-button ${
              navOpen ? 'active' : ''
            }`}
            onClick={handleToggleMobileNav}
            aria-label="Toggle navigation menu"
          >
            {navOpen ? <Close /> : <Menu />}
          </button>
          <nav className={`navbar-menu nav-items ${navOpen ? 'active' : ''}`}>
            {links.map((link) => (
              <NavLink
                key={link.url}
                to={link.url}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={handleCloseMobileNav}
              >
                <img src={link.image} alt="" />
                {link.label}
              </NavLink>
            ))}
          </nav>
          <nav className="navbar-menu social">
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
            <ColorDropdown
              currentColor={currentColor}
              setCurrentColor={setCurrentColor}
            />
            {socialLinks.map(({ url, label, Icon }) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                key={url}
                href={url}
                className="navbar-icon"
                title={label}
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </nav>
        </section>
      </div>
    </header>
  )
}
