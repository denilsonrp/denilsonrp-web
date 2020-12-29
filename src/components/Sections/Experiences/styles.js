import styled from 'styled-components'

export const SectionExperience = styled.section`

  &:not(:first-of-type) {
    margin-top: 40px;
  }
  
  ul {
    margin-top: 20px;

    li {
      display: flex;
      gap: 10px;

      &:before {
        content: '▹';
      }
    }
  }
`