import React from 'react'

import {
  Heading1,
  Heading2,
  Image,
  SectionContainer
} from './styles'

import ProfilePhoto from './../../../images/denilson.jpg'

const SectionHome = () => (
  <SectionContainer>
    <Image src={ProfilePhoto} alt="Foto Denilson" />
    <Heading1>hi, my name is Denilson :)</Heading1>
    <Heading2>and I build some things for Web and Mobile</Heading2>
  </SectionContainer>
)

export default SectionHome