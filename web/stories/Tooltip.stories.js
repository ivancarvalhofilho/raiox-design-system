import React from 'react'

import Tooltip from '../src/components/Tooltip'
import { useState } from '@storybook/addons'

export default {
  title: 'Example/Tooltip',
  component: Tooltip,
}

const Template = (args) => (
  <div>
    {' '}
    <div custom-tooltip="teste" style={{ backgroundColor: 'red' }}>
      Teste
    </div>{' '}
    <div>Teste</div> <div data-foo="teste">Teste</div>{' '}
    <div
      custom-tooltip="Entre em contato com sua adquirente para ter mais detalhes sobre esse ajuste"
      style={{ backgroundColor: 'blue', width: '50%', display: 'flex' }}
    >
      <h1>Teste</h1>
      <h2>TESTE2</h2>
    </div>{' '}
    <Tooltip />
  </div>
)

export const Default = Template.bind({})
Default.args = {}
