import React from 'react'

import { 
  SectionContainer,
  SectionTitle
} from './styles'

const Section = ({ children, id, title }) => (
  <SectionContainer id={id}>
    <SectionTitle>{title}</SectionTitle>
    
    {children}
  </SectionContainer>
)

export default Section