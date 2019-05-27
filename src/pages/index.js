import './index.less'
import React from 'react'

import Layout from '../components/layout'
import Masthead from '../components/top-masthead'
import SectionSimpleFeatures from '../components/top-section-simple-features'
import SectionBeautifulUI from '../components/top-section-beautiful-ui'
import SectionSeamlessSync from '../components/top-section-seamless-sync'
import SectionBlogposts from '../components/section-blogposts'

const IndexPage = () => (
  <Layout pageTitle="Inkdrop - Note-taking App with Robust Markdown Editor">
    <div className="main-content">
      <Masthead />
      <SectionSimpleFeatures />
      <SectionBeautifulUI />
      <SectionSeamlessSync />
      <SectionBlogposts />
    </div>
  </Layout>
)

export default IndexPage
