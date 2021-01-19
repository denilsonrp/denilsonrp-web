import styled from 'styled-components'

export const HamburguerMenu = styled.label`
  cursor: pointer;
  display: none;

  span,
  span:after,
  span:before {
    background-color: #FFFFFF;
    border-radius: 4px;
    display: block;
    height: 2px;
    position: relative;
    transition: all .25s;
    width: 24px;
  }

  span {
    
    &:after {
      content: '';
      top: 6px;
    }

    &:before {
      content: '';      
      top: -8px;
    }
  }

  @media (max-width: 991px) {
    display: block;
  }
`

export const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`

export const InputHamburguerMenu = styled.input`
  display: none;

  &:checked {

    ~ nav {
      top: 80px;
    }

    ~ label {

      span {
        background-color: transparent;

        &:after {
          top: -6px;
          transform: translateY(200%) rotate(45deg);
        }

        &:before {
          top: -4px;
          transform: translateY(200%) rotate(-45deg);
        }
      }
    }
  }
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
  z-index: 9;

  span {
    font-size: 12px;
    letter-spacing: 4px;
    line-height: 15px;
  }
`

export const NavLinks = styled.nav`
  transition: top .25s;

  @media (max-width: 991px) {
    background: #171619;
    flex-direction: column;
    left: 0;
    padding-bottom: 20px;
    padding-top: 20px;
    position: absolute;
    top: -100%;
    width: 100%;
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
  gap: 15px;
  list-style: none;

  li > a {
    font-size: 24px;
  }

  @media (max-width: 991px) {
    display: none;
  }
`