import React from 'react'

export const PageLayout = ({ children, className = 'page' }) => {
  return <div className={`main-content ${className}`.trim()}>{children}</div>
}
