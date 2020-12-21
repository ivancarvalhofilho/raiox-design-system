import React, { useState } from 'react'
import Datepicker from '../src/components/Datepicker'
import dayjs from 'dayjs'

export default {
  title: 'Example/Datepicker',
  component: Datepicker,
}

const Template = args => {
  const [dates, setDates] = useState([dayjs(), dayjs().add(1, 'month')])
  return (
    <div style={{ width: '900px', display: 'flex', justifyContent: 'center' }}>
      <Datepicker
        dates={dates}
        maxRange={120}
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
}
