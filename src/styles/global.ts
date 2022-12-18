import { createGlobalStyle } from 'styled-components'
import '@fontsource/saira'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background: ${({ theme }) => theme.colors.background};
  }

  svg {
    height: 24px;
    width: 24px;
  }
`
