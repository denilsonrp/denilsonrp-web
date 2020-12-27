import styled from 'styled-components'

export const SectionContainer = styled.section`
  counter-increment: section-counter;
  padding-bottom: 100px;
  padding-top: 100px;
  margin: 0 auto;
  max-width: 800px;
`

export const SectionTitle = styled.h2`
  margin-bottom: 40px;

  &:before {
    content: counter(section-counter) '.';
    font-size: 16px;
    margin-right: 10px;
  }
`