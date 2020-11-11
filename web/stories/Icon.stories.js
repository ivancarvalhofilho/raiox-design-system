import React from 'react'

import Icon from '../src/components/Icon'
import iconsAdquirentes from '../../tokens/js/iconsAdquirente'
import styled from 'styled-components'
import theme from '../../tokens/js'
import iconsBanco from '../../tokens/js/iconsBanco'

export default {
  title: 'Example/Icon',
  component: Icon,
}

const Title = styled.div`
  font-family: ${props => props.theme.fonts.family.body};
  font-weight: ${props => props.theme.fonts.weight.medium};
  font-size: ${props => props.theme.fonts.fontSize.xl};
  color: ${props => props.theme.colors.neutral.dark.base};
`

const Template = args => (
  <div>
    <span style={{ display: 'flex', flexDirection: 'row' }}>
      {Object.keys(theme.icons).map(key => (
        <span
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '5px',
            textAlign: 'center',
          }}
        >
          <Icon path={theme.icons[key]} {...args} />
          {key}
        </span>
      ))}
    </span>
  </div>
)

const Template2 = args => (
  <div>
    {Object.keys(iconsAdquirentes).map(key => (
      <div style={{ margin: '0 0 50px 0' }}>
        <Title>{key.toUpperCase()}</Title>
        <span style={{ display: 'flex', flexDirection: 'row' }}>
          {Object.keys(iconsAdquirentes[key]).map(keyIcon => (
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
                path={iconsAdquirentes[key][keyIcon]}
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
      {Object.keys(theme.iconsBanco).map(key => (
        <span
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '5px',
            textAlign: 'center',
          }}
        >
          <Icon tooltip="teste" path={theme.iconsBanco[key]} {...args} />
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
