import React from 'react'

import SideModal from '../src/components/SideModal'
import { useState } from '@storybook/addons'

export default {
  title: 'Example/SideModal',
  component: SideModal,
}

const Template = (args) => <SideModal {...args} />

export const Default = Template.bind({})
Default.args = {
  closable: true,
  onClose: () => {},
  show: true,
  title: 'Dúvidas frequentes sobre os recebimentos:',
}

Default.parameters = { layout: 'fullscreen' }
