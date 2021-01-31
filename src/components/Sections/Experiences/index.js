import React from 'react'

import Section from '../../Section'

import * as S from './styles'

const SectionExperiences = ({ title, experience }) => (
  <Section title={title} id='experiences'>
    {experience.map(item => {
      return (
        <S.SectionExperience key={item.title}>
          <h3 className="-featured-color">{item.title}</h3>    
          <h4>{item.role}</h4>
          <time>{item.date}</time>

          <div dangerouslySetInnerHTML={{ __html: item.description }} />
        </S.SectionExperience>
      )
    })}
  </Section>
)

export default SectionExperiences