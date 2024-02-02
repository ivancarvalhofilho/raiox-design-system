import React, { useState } from 'react'
import { Datepicker } from '../src'
import dayjs from 'dayjs'

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
}

const Template = args => {
  const [dates, setDates] = useState([dayjs(), dayjs().add(1, 'month')])
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Datepicker
        {...args}
        dates={dates}
        minDate={dayjs().add(-1, 'month')}
        onSelectDay={(data, index) => {
          const datesUpdate = dates.map((date, indexDate) =>
            indexDate === index ? data : date,
          )
          if (index === 1 && datesUpdate[0].isAfter(datesUpdate[1])) {
            const lastDate = datesUpdate[0]
            datesUpdate[0] = datesUpdate[1]
            datesUpdate[1] = lastDate
          }
          setDates(datesUpdate)
        }}
      />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  dates: [],
  maxRange: 120,
  customStyle: {
    iconContainerbackgroundColor: '#00A868',
    fontColor: '#00A868',
  },
  showOneMonthPerTime: true,
}
