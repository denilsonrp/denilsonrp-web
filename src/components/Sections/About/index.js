import React from 'react'

import Section from './../../Section'
import Button from './../../Button'

import * as S from './styles'

const SectionAbout = ({ title, text, link }) => (
  <Section title={title} id='about'>
    <S.WrapperAbout dangerouslySetInnerHTML={{ __html: text }} />

    <Button
      href={link.url}
      target='_blank'
      title={link.title}
      className='_margin-t-40'
    />
  </Section>
)

export default SectionAbout