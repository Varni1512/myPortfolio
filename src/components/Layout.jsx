import React, { useState, useEffect } from 'react'

import favicon from '../assets/nav-floppy.png'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { Sidebar } from './Sidebar'

export const Layout = ({ isNote, children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('theme') || 'dark'
    }
    return 'dark'
  })
  const [currentColor, setCurrentColor] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('color') || 'var(--theme-pink)'
    }
    return 'var(--theme-pink)'
  })

  const handleUpdateTheme = (newTheme) => {
    const html = document.documentElement
    window.localStorage.setItem('theme', newTheme)
    document.documentElement.style.setProperty('color-scheme', newTheme)

    if (newTheme === 'light') {
      html.classList.add('is-light')
      html.classList.remove('is-dark')
    }

    if (newTheme === 'dark') {
      html.classList.add('is-dark')
      html.classList.remove('is-light')
    }

    setTheme(newTheme)
    window.dispatchEvent(
      new CustomEvent('themechange', { detail: { theme: newTheme } })
    )
  }

  useEffect(() => {
    const html = document.documentElement
    const savedTheme = window.localStorage.getItem('theme') || theme

    document.documentElement.style.setProperty('color-scheme', savedTheme)

    if (savedTheme === 'light') {
      html.classList.add('is-light')
      html.classList.remove('is-dark')
    }

    if (savedTheme === 'dark') {
      html.classList.add('is-dark')
      html.classList.remove('is-light')
    }

    const savedColor = window.localStorage.getItem('color') || currentColor
    document.documentElement.style.setProperty('--color-primary', savedColor)
  }, [])

  return (
    <div id="layout" className="layout">
      <Navigation
        handleUpdateTheme={handleUpdateTheme}
        theme={theme}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <Sidebar
        handleUpdateTheme={handleUpdateTheme}
        theme={theme}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <div className="main-wrapper">
        <div className={`main-container ${isNote ? 'is-note' : ''}`}>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}
