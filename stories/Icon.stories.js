import React from 'react'

import Icon from '../src/components/Icon'
import styled from 'styled-components'
import { Tokens } from '../src/tokens'

export default {
  title: 'Example/Icon',
  component: Icon,
}

const Title = styled.div`
  font-family: ${Tokens.fonts.family.body};
  font-weight: ${Tokens.fonts.weight.medium};
  font-size: ${Tokens.fonts.fontSize.xl};
  color: ${Tokens.colors.neutral.dark.base};
`

const Template = args => (
  <div>
    <span style={{ display: 'flex', flexDirection: 'row' }}>
      {Object.keys(Tokens.icons).map(key => (
        <span
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '5px',
            textAlign: 'center',
          }}
        >
          <Icon path={Tokens.icons[key]} {...args} />
          {key}
        </span>
      ))}
    </span>
  </div>
)

const Template2 = args => (
  <div>
    {Object.keys(Tokens.iconsAdquirentes).map(key => (
      <div style={{ margin: '0 0 50px 0' }}>
        <Title>{key.toUpperCase()}</Title>
        <span style={{ display: 'flex', flexDirection: 'row' }}>
          {Object.keys(Tokens.iconsAdquirentes[key]).map(keyIcon => (
            <span
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '5px',
                textAlign: 'center',
              }}
            >
              <Icon
                key={`${key}/${keyIcon}`}
                path={Tokens.iconsAdquirentes[key][keyIcon]}
                {...args}
              />
              {keyIcon}
            </span>
          ))}
        </span>
      </div>
    ))}
  </div>
)

const Template3 = args => (
  <div style={{ padding: '60px' }}>
    <span style={{ display: 'flex', flexDirection: 'row' }}>
      {Object.keys(Tokens.iconsBanco).map(key => (
        <span
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '5px',
            textAlign: 'center',
          }}
        >
          <Icon tooltip="teste" path={Tokens.iconsBanco[key]} {...args} />
          {key}
        </span>
      ))}
    </span>
  </div>
)

export const Default = Template.bind({})
export const Adquirente = Template2.bind({})
export const Banco = Template3.bind({})

Default.args = {
  size: '36px',
}

Adquirente.args = {
  size: '36px',
}

Banco.args = {
  size: '36px',
}
