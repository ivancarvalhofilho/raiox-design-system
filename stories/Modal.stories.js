import React from 'react'

import {Modal} from '../src'

export default {
  title: 'Components/Modal',
  component: Modal,
}

const Template = args => <Modal {...args} >Body dinamico <br/>Body dinamico <br/>Body dinamico <br/></Modal>

export const Default = Template.bind({})
Default.args = {
  closable: true,
  onClose: () => {alert("oi")},
  show: true,
  height: 300
}

Default.parameters = { layout: 'fullscreen' }
