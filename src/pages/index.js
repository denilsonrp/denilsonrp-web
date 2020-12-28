import React from 'react'

import Layout from '../components/Layout'
import SectionAbout from '../components/Sections/About'
import SectionContact from '../components/Sections/Contact'
import SectionEducation from '../components/Sections/Education'
import SectionExperiences from '../components/Sections/Experiences'
import SectionHome from '../components/Sections/Home'
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
    <SectionContact />
  </Layout>
)

export default IndexPage
