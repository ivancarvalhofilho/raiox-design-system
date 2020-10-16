import { ThemeProvider } from 'styled-components';
import theme from "../../tokens/js";
import React from 'react'
export const decorators = [
  (Story) => {
    console.log(theme)

    return (
          <ThemeProvider theme={theme}>
              <Story />
          </ThemeProvider>
      )
  },
];

export const parameters = { layout: 'fullscreen' }