import { ThemeProvider } from 'styled-components'
import { Tokens } from '../tokens'
import React from 'react'
import { mount } from 'enzyme'
import 'jest-styled-components'

export function mountWithTheme(child) {
  return mount(child, {
    wrappingComponent: ({ children }) => (
      <ThemeProvider Tokens={Tokens}>{children}</ThemeProvider>
    ),
  })
}
