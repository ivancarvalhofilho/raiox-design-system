import React from 'react'

import Icon from '../src/components/Icon'
import styled from 'styled-components'
import { Tokens } from '../src/tokens'

export default {
  title: 'Icons & Illustrations/Icons',
  component: Icon,
}

const Title = styled.div`
  font-family: ${Tokens.fonts.family.body};
  font-weight: ${Tokens.fonts.weight.medium};
  font-size: ${Tokens.fonts.fontSize.xl};
  color: ${Tokens.colors.neutral.dark.base};
`

const appearencesList = [
  'default',
  'light',
  'primary',
  'danger',
  'info',
  'warning',
  'success',
  'dark',
  'default-disabled'
]

const Template = args => (
  <div>
    <div style={{paddingBottom: '10px'}}>
      <h2>Appearances:</h2>
      <div style={{display: "flex", flexFlow: "row", justifyContent: 'space-between'}}>
        {appearencesList.map((appearance)=> (
          <div style={{display: "flex", flexFlow: 'column', alignItems: 'center'}}>
            <Icon appearance={appearance} path={Tokens.icons.info} size={21} style={appearance === 'light' ? {background: 'gray', padding: '5px', borderRadius: '2px'} : {padding: '5px'}}/>
            {appearance}
          </div>
        ))}
      </div>
    </div>
    <h2>Icon List:</h2>
    <span style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr' }}>
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
          <span>
            {key}
          </span>
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

export const Icons = Template.bind({})
export const Adquirente = Template2.bind({})
export const Banco = Template3.bind({})

Icons.args = {
  size: '36px',
}

Adquirente.args = {
  size: '36px',
}

Banco.args = {
  size: '36px',
}
