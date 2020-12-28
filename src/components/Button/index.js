import React from 'react'

import { ButtonContainer } from './styles'

const Button = ({ href, title, style }) => (
  <ButtonContainer href={href} className={style}>
    {title}
  </ButtonContainer>
)

export default Button