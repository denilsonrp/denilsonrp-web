import styled from 'styled-components'

export const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`

export const Logo = styled.div`
  background-color: #FFFFFF;
  color: #171619;
  display: flex;
  flex-direction: column;
  height: 60px;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  text-transform: uppercase;
  width: 60px;

  span {
    font-size: 12px;
    letter-spacing: 4px;
    line-height: 15px;
  }
`

export const NavLinks = styled.nav`

  @media (max-width: 991px) {
    flex-direction: column;
    left: 0;
    position: absolute;
    top: 80px;
    width: 100%;
    z-index: 9;
  }
`

export const NavLinksOl = styled.ol`
  display: flex;
  gap: 40px;

  @media (max-width: 991px) {
    align-items: center;
    flex-direction: column;
  }

  li {
    transition: color .25s;

    &:hover, &:hover a {
      color: #348AC7;
    }
  }
`

export const SocialLinksUl = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
`