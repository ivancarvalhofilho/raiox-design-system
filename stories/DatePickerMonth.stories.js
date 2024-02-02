import React from 'react'

import {DatePickerMonth} from '../src'
import {useState} from '@storybook/addons'
import dayjs from 'dayjs'

export default {
  title: 'Components/DatePickerMonth',
  component: DatePickerMonth,
}

const Template = args => {
  const [dateSelected, setSelectedDates] = useState('2020-01')

  return (
    <div style={{ width: '345px' }}>
      <DatePickerMonth
        {...args}
        dateSelected={dateSelected}
        onSelectMonth={newDate => {
          setSelectedDates(newDate)
        }}
        setComponentVisibility={() =>
          alert('Clicks para fora dele, escondem o componente')
        }
        disabledMonthTooltipMessage="Não pode selecionar este mes"
      />
    </div>
  )
}

export const ShowAllYears = Template.bind({})
ShowAllYears.args = {
  showAllYears: true,
}

export const LimitedYears = Template.bind({})
LimitedYears.args = {
  showAllYears: false,
  data: ['2020-01', '2020-03', '2021-04', '2022-12']
    .map(data => dayjs(data))
    .map(data => ({
      year: data.get('year'),
      month: data.get('month'),
      date: data.format('YYYY-MM'),
    })),
}
