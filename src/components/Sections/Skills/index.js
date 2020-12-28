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

import { List } from './styles'

import Section from '../../Section'

const SectionSkills = () => (
  <Section title='skills()' id='skills'>
    <List>
      <li>
        <FontAwesomeIcon icon={faHtml5} aria-label="html 5" title="html 5" size='3x' />
      </li>
      <li>
        <FontAwesomeIcon icon={faCss3Alt} aria-label="css 3" title="css 3" size='3x' />
      </li>
      <li>
        <FontAwesomeIcon icon={faSass} aria-label="SASS" title="SASS" size='3x' />
      </li>
      <li>
        <FontAwesomeIcon icon={faJsSquare} aria-label="Javascript" title="Javascript" size='3x' />
      </li>
      <li>
        <FontAwesomeIcon icon={faReact} aria-label="React and React Native" title="React and React Native" size='3x' />
      </li>
      <li>
        <FontAwesomeIcon icon={faNodeJs} aria-label="Node.js" title="Node.js" size='3x' />
      </li>
      <li>
        <FontAwesomeIcon icon={faPhp} aria-label="PHP" title="PHP" size='3x' />
      </li>
      <li>
        <FontAwesomeIcon icon={faGit} aria-label="Git" title="Git" size='3x' />
      </li>
      <li>
        <FontAwesomeIcon icon={faLinux} aria-label="Linux" title="Linux" size='3x' />
      </li>
      <li>
        <FontAwesomeIcon icon={faDatabase} aria-label="Banco de dados relacionais e não relacionais" title="Banco de dados relacionais e não relacionais" size='3x' />
      </li>
    </List>

    <List>
      <li>Scrum</li>
      <li>SEO</li>
      <li>Web accessibility</li>
      <li>ITCSS</li>
      <li>RSCSS</li>
      <li>Task runners</li>
    </List>
  </Section>
)

export default SectionSkills