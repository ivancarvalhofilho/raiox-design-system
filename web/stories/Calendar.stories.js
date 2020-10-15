import React from 'react'

import { Calendar } from '../src/components/Calendar/Calendar'

export default {
  title: 'Example/Calendar',
  component: Calendar,
}

const Template = (args) => <Calendar {...args} />

export const Default = Template.bind({})
Default.args = {
  month: 0,
  year: 2020,
  selectedDates: ['01/01/2020', '02/01/2020'],
  dayWithSales: [
    { day: '01/01/2020', sale: 50, type: 'A' },
    { day: '02/01/2020', sale: 500, type: 'R' },
  ],
  holydays: ['03/01/2020', '04/01/2020'],
}
