import React from 'react'

import { ButtonContainer } from './styles'

const Button = ({ title, ...rest }) => (
  <ButtonContainer {...rest}>
    {title}
  </ButtonContainer>
)

export default Button