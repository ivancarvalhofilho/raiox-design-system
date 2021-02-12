import React from 'react'

import InputLabel from '../src/components/InputLabel'
import Tokens from '../tokens'

export default {
  title: 'Example/InputLabel',
  component: InputLabel,
}

const Template = args => <InputLabel {...args} />

export const Default = Template.bind({})
Default.args = {
  state: '1',
}
