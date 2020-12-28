import styled from 'styled-components'

export const SectionContainer = styled.section`
  counter-increment: section-counter;
  margin: 0 auto;
  max-width: 800px;
  padding: 100px 10px;
`

export const SectionTitle = styled.h2`
  margin-bottom: 40px;

  &:before {
    content: counter(section-counter) '.';
    font-size: 16px;
    margin-right: 10px;
  }
`