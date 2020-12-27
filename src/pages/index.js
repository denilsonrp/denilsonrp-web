import React from 'react'

import Layout from '../components/Layout'
import SectionHome from '../components/Sections/Home'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <SectionHome />
  </Layout>
)

export default IndexPage
