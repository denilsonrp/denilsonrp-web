import styled from 'styled-components'

export const List = styled.ul`
  &:first-of-type {
    display: flex;
    gap: 20px;
  }

  :not(:first-of-type) {
    margin-top: 40px;

    li:before {
      content: '▹';
    }
  }

  li {
    align-items: center;
    display: flex;
    gap: 10px;
  }
`