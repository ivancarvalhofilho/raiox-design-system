import React from 'react'

import Tooltip from '../src/components/Tooltip'
import { useState } from '@storybook/addons'

export default {
  title: 'Example/Tooltip',
  component: Tooltip,
}

const Template = (args) => (
  <div>
    <Tooltip>
      {' '}
      <div custom-tooltip="teste" style={{ backgroundColor: 'red' }}>
        Teste
      </div>{' '}
      <div>Teste</div> <div data-foo="teste">Teste</div>{' '}
      <div
        custom-tooltip="teste"
        style={{ backgroundColor: 'blue', width: '50%' }}
      >
        <h1>Teste</h1>
      </div>{' '}
      <div data-foo="teste">Teste</div> <div data-foo="teste">Teste</div>{' '}
      <div data-foo="teste">Teste</div>{' '}
    </Tooltip>
  </div>
)

export const Default = Template.bind({})
Default.args = {}
