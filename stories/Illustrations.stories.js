import React from 'react'

import {Icon} from '../src'
import styled from 'styled-components'
import {Tokens} from '../src/tokens'

export default {
  title: 'Icons & Illustrations/Illustrations',
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
    <span style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
      {Object.keys(Tokens.illustrations).map(key => (
        <span
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '5px',
            textAlign: 'center',
          }}
        >
          <Icon path={Tokens.illustrations[key]} {...args} />
          {key}
        </span>
      ))}
    </span>
  </div>
)

export const Illustrations = Template.bind({})

Illustrations.args = {
  size: '256px',
}
