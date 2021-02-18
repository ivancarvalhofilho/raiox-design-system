import React from 'react'
import styled from 'styled-components'
import { Tokens } from '../src/tokens'

export default {
  title: 'Example/Color',
}

const ColorShower = styled.div`
  height: 40px;
  width: 40px;
  background: ${props => props.color};
`

const Template = args => (
  <div>
    <span style={{ display: 'flex', flexDirection: 'column' }}>
      {Object.keys(Tokens.colors).map(key => (
        <div>
          <h1>{key}</h1>
          {Object.keys(Tokens.colors[key]).map(keyStyle => (
            <div>
              <h2>{keyStyle}</h2>
              <span style={{ display: 'flex', flexDirection: 'row' }}>
                {Object.keys(Tokens.colors[key][keyStyle]).map(keyColor => (
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
                      color={Tokens.colors[key][keyStyle][keyColor]}
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
