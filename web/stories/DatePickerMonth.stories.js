import React from 'react'

import DatePickerMonth from '../src/components/DatePickerMonth/DatePickerMonth'
import { useState } from '@storybook/addons'
import dayjs from 'dayjs'

export default {
  title: 'Example/DatePickerMonth',
  component: DatePickerMonth,
}

const Template = (args) => {
  const [dateSelected, setSelectedDates] = useState('2020-01')

  return (
    <div style={{ width: '345px' }}>
      <DatePickerMonth
        {...args}
        dateSelected={dateSelected}
        onSelectMonth={(newDate) => {
          setSelectedDates(newDate)
        }}
      />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  showAllYears: true,
  data: ['2020-01', '2020-03', '2021-04']
    .map((data) => dayjs(data))
    .map((data) => ({
      year: data.get('year'),
      month: data.get('month'),
      date: data.format('YYYY-MM'),
    })),
}
