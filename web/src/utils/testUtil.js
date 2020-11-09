import { ThemeProvider } from 'styled-components'
import theme from '../../../tokens/js'
import React from 'react'
import { mount, shallow } from 'enzyme'
import renderer from 'react-test-renderer'

export function mountWithTheme(child) {
  return mount(child, {
    wrappingComponent: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  })
}

export function shallowWithTheme(child) {
  return shallow(child, {
    wrappingComponent: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  })
}

export function renderWithTheme(child) {
  return renderer.create(child, {
    wrappingComponent: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  })
}
