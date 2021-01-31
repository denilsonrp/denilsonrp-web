import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SectionAbout from '../components/Sections/About'
import SectionContact from '../components/Sections/Contact'
import SectionEducation from '../components/Sections/Education'
import SectionExperiences from '../components/Sections/Experiences'
import SectionHome from '../components/Sections/Home'
import SectionSkills from '../components/Sections/Skills'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  return (
      <Layout>
        <SEO title='Home' />
        <SectionHome {...data.allStrapiHomepage.edges[0].node.sectionHome} />
        <SectionAbout />
        <SectionExperiences />
        <SectionEducation />
        <SectionSkills />
        <SectionContact />
      </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query GET_HOMEPAGE {
    allStrapiHomepage {
      edges {
        node {
          sectionHome {
            image {
              alternativeText 
              url
            }
            presentationH1
            presentationH2
          }
        }
      }
    }
  }
`
