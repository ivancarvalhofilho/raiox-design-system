import React from 'react'

import SideModal from '../components/SideModal'
import { useState } from '@storybook/addons'

export default {
  title: 'Example/SideModal',
  component: SideModal,
}

const Template = (args) => {
  const [show, setShow] = useState()
  return (
    <>
      <button onClick={() => setShow(true)}>Abrir</button>
      <SideModal {...args} show={show} onClose={() => setShow(false)} />
    </>
  )
}
export const Default = Template.bind({})
Default.args = {
  closable: true,
}

Default.parameters = { layout: 'fullscreen' }
