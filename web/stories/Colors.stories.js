import React from 'react'

import Icon from '../components/Icon'
import iconsAdquirentes from '../../tokens/js/iconsAdquirente'
import styled from 'styled-components'
import { Title } from '../components/StyledComponents'
import theme from '../../tokens/js'

export default {
  title: 'Example/Color',
}

const ColorShower = styled.div`
  height: 40px;
  width: 40px;
  background: ${(props) => props.color};
`

const Template = (args) => (
  <div>
    <span style={{ display: 'flex', flexDirection: 'column' }}>
      {Object.keys(theme.colors).map((key) => (
        <div>
          <h1>{key}</h1>
          {Object.keys(theme.colors[key]).map((keyStyle) => (
            <div>
              <h2>{keyStyle}</h2>
              <span style={{ display: 'flex', flexDirection: 'row' }}>
                {Object.keys(theme.colors[key][keyStyle]).map((keyColor) => (
                  <span
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: '5px',
                      textAlign: 'center',
                    }}
                  >
                    <ColorShower
                      color={theme.colors[key][keyStyle][keyColor]}
                    />
                    {keyColor}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      ))}
    </span>
  </div>
)

export const Default = Template.bind({})

Default.args = {}
