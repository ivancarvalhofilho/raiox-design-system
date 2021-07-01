import React from 'react'

import {SideModal} from '../src'

export default {
  title: 'Components/SideModal',
  component: SideModal,
}

const Template = args => <SideModal {...args} />

export const Default = Template.bind({})
Default.args = {
  closable: true,
  onClose: () => {},
  show: true,
  title: 'Dúvidas frequentes sobre os recebimentos:',
}

Default.parameters = { layout: 'fullscreen' }
