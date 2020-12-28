import styled from 'styled-components'

export const ButtonContainer = styled.a`
  align-items: center;
  background-color: transparent;
  border: 2px solid #348AC7;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  padding: 20px;
  position: relative;

  &:after {
    background: #348AC7;
    bottom: 0;
    content: '';
    height: 0;
    left: 0;
    position: absolute;
    transition: height .25s;
    width: 100%;
    z-index: -1;
  }

  &:hover {
    color: #FFFFFF;

    &:after {
      height: 100%;
    }
  }
`