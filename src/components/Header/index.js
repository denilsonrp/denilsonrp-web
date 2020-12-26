import React from 'react'
import { Link } from "gatsby"

import { 
  HeaderContainer, 
  NavLinks,
  NavLinksOl,
  NavLinksOlLi
} from './styles'

const Header = () => (
  <HeaderContainer>
    
    <div></div>

    <NavLinks>
      <NavLinksOl>
        <NavLinksOlLi>
          <Link to="/#about">about()</Link>
        </NavLinksOlLi>
        <NavLinksOlLi>
          <Link to="/#experiences">experiences()</Link>
        </NavLinksOlLi>
        <NavLinksOlLi>
          <Link to="/#education">education()</Link>
        </NavLinksOlLi>
        <NavLinksOlLi>
          <Link to="/#skills">skills()</Link>
        </NavLinksOlLi>
        <NavLinksOlLi>
          <Link to="/#contact">contact()</Link>
        </NavLinksOlLi>
      </NavLinksOl>
    </NavLinks>

    <div></div>

  </HeaderContainer>
)

export default Header