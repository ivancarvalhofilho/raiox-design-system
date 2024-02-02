import React from 'react'

import {Calendar} from '../src'
import {useState} from '@storybook/addons'
import CalendarConst from '../src/components/Calendar/const'

export default {
  title: 'Components/Calendar',
  component: Calendar,
}

const Template = args => {
  const [selectedDates, setSelectedDates] = useState({
    state: CalendarConst.STATES.SELECTED,
    firstClickDate: null,
    startDate: '01/09/2020',
    endDate: '01/22/2020',
  })

  return (
    <Calendar
      {...args}
      selectedDates={selectedDates}
      setSelectedDates={setSelectedDates}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  month: 0,
  year: 2020,
  maxDateRange: 7,
  dayWithSales: [
    { day: '01/01/2020', sale: 50, type: 'A' },
    { day: '01/13/2020', sale: 700.55, type: 'R' },
    { day: '02/01/2020', sale: 500, type: 'R' },
  ],
  holydays: ['01/24/2020', '04/01/2020'],
}
