import React from 'react'

import Layout from '../components/Layout'
import SectionHome from '../components/Sections/Home'
import SectionAbout from '../components/Sections/About'
import SectionExperiences from '../components/Sections/Experiences'
import SectionEducation from '../components/Sections/Education'
import SectionSkills from '../components/Sections/Skills'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <SectionHome />
    <SectionAbout />
    <SectionExperiences />
    <SectionEducation />
    <SectionSkills />
  </Layout>
)

export default IndexPage
