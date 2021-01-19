import React from 'react'
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import {
  HamburguerMenu,
  HeaderContainer, 
  InputHamburguerMenu,
  Logo,
  NavLinks,
  NavLinksOl,
  SocialLinksUl,
} from './styles'

const Header = () => (
  <HeaderContainer>
    <InputHamburguerMenu type="checkbox" id="chkHamburguerMenu" />
    
    <Logo>
      <span>de</span>
      <span>nil</span>
      <span>son</span>
    </Logo>

    <NavLinks>
      <NavLinksOl>
        <li>
          <Link to="/#about">about()</Link>
        </li>
        <li>
          <Link to="/#experiences">experiences()</Link>
        </li>
        <li>
          <Link to="/#education">education()</Link>
        </li>
        <li>
          <Link to="/#skills">skills()</Link>
        </li>
        <li>
          <Link to="/#contact">contact()</Link>
        </li>
      </NavLinksOl>
    </NavLinks>

    <SocialLinksUl>
      <li>
        <a href="https://github.com/denilsonrp" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} aria-label="Meu perfil no Github" title="Meu perfil no Github" />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/denilsonrp" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} aria-label="Meu perfil no Linkedin" title="Meu perfil no Linkedin" />
        </a>
      </li>
      <li>
        <a href="mailto:denilsonraimundo10@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} aria-label="Envie um e-mail para denilsonraimundo10@gmail.com" title="Envie um e-mail para denilsonraimundo10@gmail.com" />
        </a>
      </li>
    </SocialLinksUl>

    <HamburguerMenu htmlFor="chkHamburguerMenu">
      <span></span>
    </HamburguerMenu>

  </HeaderContainer>
)

export default Header