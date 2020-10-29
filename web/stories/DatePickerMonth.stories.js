import React from 'react'

import DatePickerMonth from '../src/components/DatePickerMonth/DatePickerMonth'
import { useState } from '@storybook/addons'

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
}
