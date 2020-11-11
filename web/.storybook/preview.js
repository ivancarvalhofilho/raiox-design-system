import {ThemeProvider} from 'styled-components';
import theme from "../../tokens/theme";
import React from 'react'

export const decorators = [
  (Story) => {
    return (
          <ThemeProvider theme={theme}>
              <Story />
          </ThemeProvider>
      )
  },
];
