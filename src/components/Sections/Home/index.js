import React from 'react'

import * as S from './styles'

const SectionHome = ({ image, presentationH1, presentationH2 }) => (
  <S.SectionContainer>
    <S.Image src={`http://localhost:1337${image.url}`} alt={image.alternativeText} />
    <S.PresentationH1>{presentationH1}</S.PresentationH1>
    <S.PresentationH2>{presentationH2}</S.PresentationH2>
  </S.SectionContainer>
)

export default SectionHome