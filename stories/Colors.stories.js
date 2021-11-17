import React from 'react'
import styled from 'styled-components'
import {Tokens} from '../src/tokens'

export default {
  title: 'Tokens/Colors',
}

const ColorShower = styled.div`
  height: 40px;
  width: 40px;
  background: ${props => props.color};
`

const Template = args => (
  <div>
    <span style={{ display: 'flex', flexDirection: 'column' }}>
      {Object.keys(args.colors).map(key => (
        <div>
          <h1>{key}</h1>
          {Object.keys(args.colors[key]).map(keyStyle => (
            <div>
              <h2>{keyStyle}</h2>
              <span style={{ display: 'flex', flexDirection: 'row' }}>
                {Object.keys(args.colors[key][keyStyle]).map(keyColor => (
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
                      color={args.colors[key][keyStyle][keyColor]}
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

export const RaioXColors = Template.bind({})
export const CoreColors = Template.bind({})

CoreColors.args = {colors: Tokens.coreColors}
RaioXColors.args = {colors: Tokens.colors}
