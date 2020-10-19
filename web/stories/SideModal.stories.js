import React from 'react'

import SideModal from '../components/SideModal'
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
}

Default.parameters = { layout: 'fullscreen' }
