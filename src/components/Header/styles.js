import styled from 'styled-components'

export const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`

export const NavLinks = styled.nav``

export const NavLinksOl = styled.ol`
  display: flex;
  gap: 40px;
`

export const NavLinksOlLi = styled.li`
  transition: color .25s;

  &:hover, &:hover a {
    color: #348AC7;
  }
`