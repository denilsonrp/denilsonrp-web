import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { 
  FooterContainer,
  FooterLink
} from './styles'

const Footer = () => (
  <FooterContainer>
    
    <FooterLink href="http://github.com/denilsonrp/denilsonrp-web" target="_blank" rel="noreferrer">
      Developed with <FontAwesomeIcon icon={faHeart} aria-label="Developed with love" /> by Denilson.
    </FooterLink>

  </FooterContainer>
)

export default Footer