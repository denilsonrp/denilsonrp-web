import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faCss3Alt,
  faHtml5,
  faSass,
  faJsSquare,
  faReact,
  faNodeJs,
  faPhp,
  faGit,
  faLinux
} from '@fortawesome/free-brands-svg-icons'

import { faDatabase } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'

import Section from '../../Section'

const icons = {
  html5: faHtml5,
  css3: faCss3Alt,
  sass: faSass,
  javascipt: faJsSquare,
  react: faReact,
  nodejs: faNodeJs,
  php: faPhp,
  git: faGit,
  linux: faLinux,
  databases: faDatabase
}

const SectionSkills = ({ title, skill }) => (
  <Section title={title} id='skills'>
    <S.List>
      {skill.map(item => {
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
      {skill.map(item => {
        return (!item.featured) ? <li key={item.title}>{item.title}</li> : null
      })}
    </S.List>
  </Section>
)

export default SectionSkills