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

export function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '').replace(/\W/gm,'');
}
