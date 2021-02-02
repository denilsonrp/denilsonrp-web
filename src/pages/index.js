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
      <SectionAbout {...data.allStrapiHomepage.edges[0].node.sectionAbout} />
      <SectionExperiences {...data.allStrapiHomepage.edges[0].node.sectionProfessionalExperiences} />
      <SectionEducation {...data.allStrapiHomepage.edges[0].node.sectionAcademicFormations} />
      <SectionSkills {...data.allStrapiHomepage.edges[0].node.sectionTechSkills} />
      <SectionContact {...data.allStrapiHomepage.edges[0].node.sectionContact} {...data.allStrapiHomepage.edges[0].node.socialLinks} />
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
          sectionAbout {
            title 
            text
            link {
              title
              url
            }
          }
          sectionProfessionalExperiences {
            title
            experiences {
              title
              role
              date
              description
            }
          }
          sectionAcademicFormations {
            title 
            formations {
              college
              date
              course
            }
          }
          sectionTechSkills {
            title
            skills {
              title
              featured
            }
          }
          sectionContact {
            title
            description
          }
          socialLinks {
            links {
              title
              url
              target
            }
          }
        }
      }
    }
  }
`
