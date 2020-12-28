import styled from 'styled-components'

export const List = styled.ul`
  &:first-of-type {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));

    li {
      justify-content: center;
    }
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