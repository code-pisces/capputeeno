import { render } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

export function renderTheme(children: React.ReactNode) {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}
