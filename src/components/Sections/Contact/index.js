import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { List } from './styles'

import Section from '../../Section'

const SectionContact = () => (
  <Section title='contact()' id='contact'>
    <p>Let's talk? You can find me at the following links:</p>

    <List>
      <li>
        <a href="https://github.com/denilsonrp" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} aria-label="Meu perfil no Github" title="Meu perfil no Github" size='2x' />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/denilsonrp" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} aria-label="Meu perfil no Linkedin" title="Meu perfil no Linkedin" size='2x' />
        </a>
      </li>
      <li>
        <a href="mailto:denilsonraimundo10@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} aria-label="Envie um e-mail para denilsonraimundo10@gmail.com" title="Envie um e-mail para denilsonraimundo10@gmail.com" size='2x' />
        </a>
      </li>
    </List>
  </Section>
)

export default SectionContact