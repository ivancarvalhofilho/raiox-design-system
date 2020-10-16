import React from 'react'

import Icon from '../components/Icon'
import iconsAdquirentes from '../../tokens/js/iconsAdquirente'
import styled from 'styled-components'
import { Title } from '../components/StyledComponents'
import theme from '../../tokens/js'

export default {
  title: 'Example/Icon',
  component: Icon,
}

const Template = (args) => (
  <div>
    <span style={{ display: 'flex', flexDirection: 'row' }}>
      {Object.keys(theme.icons).map((key) => (
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

const Template2 = (args) => (
  <div>
    {Object.keys(iconsAdquirentes).map((key) => (
      <div style={{ margin: '0 0 50px 0' }}>
        <Title>{key.toUpperCase()}</Title>
        <span style={{ display: 'flex', flexDirection: 'row' }}>
          {Object.keys(iconsAdquirentes[key]).map((keyIcon) => (
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

export const Default = Template.bind({})
export const Adquirente = Template2.bind({})

Default.args = {
  size: '36px',
}

Adquirente.args = {
  size: '36px',
}
