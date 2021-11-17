import React, {useState} from 'react'

import {Tabs, TabsCore} from '../src'

export default {
  title: 'Components/Tabs',
  component: Tabs,
}

const Template = args => {
  const [tabActive, setTabActive] = useState(0)
  return <Tabs {...args} tabActive={tabActive} onTabClick={setTabActive} />
}

const TemplateCore = args => {
  const [tabActive, setTabActive] = useState(0)
  return <TabsCore {...args} tabActive={tabActive} onTabClick={setTabActive} />
}

export const Default = Template.bind({})
export const tabsCore = TemplateCore.bind({})
Default.args = {
  tabs: ['Categorias', 'Maquininhas', 'Banco'],
  disabled: false,
}
tabsCore.args = {
  tabs: ['Categorias', 'Maquininhas', 'Banco'],
  disabled: false,
}
