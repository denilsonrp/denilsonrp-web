import React from 'react'

import Section from '../../Section'

import * as S from './styles'

const SectionEducation = ({ title, formations }) => (
  <Section title={title} id='education'>
    {formations.map(item => {
      return (
        <S.SectionEducation key={item.college}>
          <h3 className="-featured-color">{item.college}</h3>
          <h4>{item.course}</h4>
          <time>{item.date}</time>
        </S.SectionEducation>
      )
    })}
  </Section>
)

export default SectionEducation