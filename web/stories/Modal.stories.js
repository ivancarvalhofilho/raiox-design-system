import React from 'react'

import Modal from '../src/components/Modal'

export default {
  title: 'Example/Modal',
  component: Modal,
}

const Template = args => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
  closable: true,
  onClose: () => {},
  show: true,
}

Default.parameters = { layout: 'fullscreen' }
