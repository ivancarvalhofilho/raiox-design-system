import React from 'react'

import Tabs from '../components/Tabs'
import { useState } from '@storybook/addons'

export default {
  title: 'Example/Tabs',
  component: Tabs,
}

const Template = (args) => {
  const [tabActive, setTabActive] = useState(0)
  return <Tabs {...args} tabActive={tabActive} onTabClick={setTabActive} />
}

export const Default = Template.bind({})
export const Disabled = Template.bind({})
Default.args = {
  tabs: ['Categorias', 'Maquininhas', 'Banco'],
}

Disabled.args = {
  tabs: ['Categorias', 'Maquininhas', 'Banco'],
  disabled: true,
}
