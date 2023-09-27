import React, { useState } from 'react'

import { Tabs, TabsCore } from '../src'
import TabsWithBadge from '../src/components/Tabs/TabsWithBadge/TabsWithBadge'

export default {
  title: 'Components/Tabs',
  component: Tabs,
}

const Template = (args) => {
  const [tabActive, setTabActive] = useState(0)
  return <Tabs {...args} tabActive={tabActive} onTabClick={setTabActive} />
}

const TemplateCore = (args) => {
  const [tabActive, setTabActive] = useState(0)
  return <TabsCore {...args} tabActive={tabActive} onTabClick={setTabActive} />
}

const TemplateWithBadge = (args) => {
  const [tabActive, setTabActive] = useState(0)
  return <TabsWithBadge {...args} tabActive={tabActive} onTabClick={setTabActive} />
}

export const Default = Template.bind({})
export const TabCore = TemplateCore.bind({})
export const TabWithBadge = TemplateWithBadge.bind({})

Default.args = {
  tabs: ['Categorias', 'Maquininhas', 'Banco'],
  disabled: false,
  customStyle: {
    containerColor: '#00A868',
    containerPadding: 10,
    barColor: '#005C41',
    fontFamily: '',
    fontSize: 14,
    activeFontColor: '#FFFFFF',
    inactiveFontColor: '#FFFFFFB2',
    activeTabfontWeight: 700,
    inactiveTabfontWeight: 600,
  },
}
TabCore.args = {
  tabs: ['Categorias', 'Maquininhas', 'Banco'],
  disabled: false,
}
TabWithBadge.args = {
  tabs: ['Pedente', 'Em andamento', 'Concluído'],
  disabled: false,
  tabWidth: 70,
  badges: [3, 17, 9],
}
