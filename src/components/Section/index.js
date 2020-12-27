import React from 'react'

import { 
  SectionContainer,
  SectionTitle
} from './styles'

const Section = ({ children, title }) => (
  <SectionContainer>
    <SectionTitle>{title}</SectionTitle>
    
    {children}
  </SectionContainer>
)

export default Section