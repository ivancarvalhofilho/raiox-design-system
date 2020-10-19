import React from 'react'

import { Calendar } from '../src/components/Calendar'

export default {
  title: 'Example/Calendar',
  component: Calendar,
}

const Template = (args) => <Calendar {...args} />

export const Default = Template.bind({})
Default.args = {
  month: 0,
}
