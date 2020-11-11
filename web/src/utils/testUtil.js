import { ThemeProvider } from 'styled-components'
import theme from '../../../tokens/theme'
import React from 'react'
import { mount } from 'enzyme'

export function mountWithTheme(child) {
  return mount(child, {
    wrappingComponent: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  })
}
