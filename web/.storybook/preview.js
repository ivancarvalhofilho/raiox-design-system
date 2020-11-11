import {ThemeProvider} from 'styled-components';
import theme from "../../tokens/js";
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
