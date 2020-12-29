import React from 'react'

import { ButtonContainer } from './styles'

const Button = ({ href, title, className }) => (
  <ButtonContainer href={href} className={className}>
    {title}
  </ButtonContainer>
)

export default Button