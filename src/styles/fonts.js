import { css } from 'styled-components'

import AndikaNewBasicRegular from './../fonts/AndikaNewBasic/AndikaNewBasic-Regular.ttf'

const Fonts = css`
  @font-face {
    font-family: 'Andika New Basic';
    src: url(${AndikaNewBasicRegular});
    font-display: auto;
    font-style: normal;
    font-weight: 400;
  }
`

export default Fonts