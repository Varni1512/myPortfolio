import React from 'react'
import { Link } from 'react-router-dom'

import { PageLayout } from '../components/PageLayout'
import { Hero } from '../components/Hero'

export function NotFoundPage() {
  return (
    <PageLayout>
      <Hero title="404" description="Not found." />
      <div className="page-article">
        <p>
          Whatever was here isn't here anymore (or never was). You can browse
          everything I've written in the <Link to="/blog">blog archive</Link>,
          find something by subject on the <Link to="/topics">topics</Link>{' '}
          page, or start over at the <Link to="/">homepage</Link>.
        </p>
      </div>
    </PageLayout>
  )
}
