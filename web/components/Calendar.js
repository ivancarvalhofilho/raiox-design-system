import React, { useEffect, useState } from 'react'
import { CalendarCell } from './CalendarCell'
import dayjs from '../utils/dayjs'
import styled from 'styled-components'

const CalendarContainer = styled.div`
    display: grid;
    grid-template-columns: 56px 112px 112px 112px 112px 112px 56px;
`
const Calendar = (props) => {
  const [array, setState] = useState(null)
  useEffect(() => {
      if(props.month != null && props.month >= 0 && props.month < 12) {
          const numberOfDaysUntil = Array.from(Array(dayjs().set('month', props.month).add(-1, 'month').daysInMonth()).keys()).map(v => v + 1)
          const numberOfDays = dayjs().set('month', props.month).daysInMonth()
          const firstDay = dayjs().set('month', props.month).startOf('month').weekday()
          let array = numberOfDaysUntil.splice(numberOfDaysUntil.length - firstDay).concat(Array.from(Array(numberOfDays).keys()).map(v => v + 1))
          if(35 - array.length > 0) {
              array = array.concat(Array.from(Array(35 - array.length).keys()).map(v => v + 1))
          }else{
              array = array.concat(Array.from(Array(42 - array.length).keys()).map(v => v + 1))
          }
          setState(array)
      }
  }, [props.month])
  return <CalendarContainer>{array && array.map(day => <CalendarCell day={day}/>)}</CalendarContainer>
}

export { Calendar }
