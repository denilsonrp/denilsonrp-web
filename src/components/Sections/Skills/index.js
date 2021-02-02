import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { icons } from './../../../utils/getFontAwesomeIcons'

import * as S from './styles'

import Section from '../../Section'

const SectionSkills = ({ title, skills }) => (
  <Section title={title} id='skills'>
    <S.List>
      {skills.map(item => {
        return (item.featured) 
                  ? <li key={item.title}>
                      <FontAwesomeIcon 
                        icon={icons[item.title.toLowerCase()]} 
                        aria-label={item.title} 
                        title={item.title} 
                        size='3x' 
                      />
                    </li> 
                  : null
      })}
    </S.List>

    <S.List>
      {skills.map(item => {
        return (!item.featured) ? <li key={item.title}>{item.title}</li> : null
      })}
    </S.List>
  </Section>
)

export default SectionSkills