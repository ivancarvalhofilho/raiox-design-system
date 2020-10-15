import React, { useEffect, useState } from 'react'
import { CalendarCell } from './CalendarCell'
import dayjs from '../../utils/dayjs'
import styled from 'styled-components'
import CalendarConst from './const'
import fonts from '../../../tokens/js/fonts'
import styles from '../../../tokens/js/styles'
import Colors from '../../../tokens/js/colors'

const CalendarContainer = styled.div`
  display: flex;
  flex-flow: column;
`

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: 112px 112px 112px 112px 112px 112px 112px;

  & > *:nth-child(7n),
  & > *:nth-child(7n-6) {
    background: ${Colors.neutral.light['02']};
  }
`

const CalendarGridHeader = styled.div`
  display: grid;
  grid-template-columns: 112px 112px 112px 112px 112px 112px 112px;
`

const DayOfWeek = styled.div`
  display: flex;
  justify-content: center;

  font-weight: ${fonts.weight.medium};
  font-size: ${fonts.fontSize.xxs}px;
  font-family: ${fonts.family.body};

  margin-bottom: ${styles.spacing.stack.quarck};
`

const Calendar = (props) => {
  const [dates, setDates] = useState(null)

  useEffect(() => {
    if (props.month != null && props.month >= 0 && props.month < 12) {
      const numberOfDaysOfPreviousMonth = Array.from(
        Array(
          dayjs().set('month', props.month).add(-1, 'month').daysInMonth(),
        ).keys(),
      ).map((v) => v)

      const numberOfDaysOfThisMonth = dayjs()
        .set('month', props.month)
        .daysInMonth()
      const firstDayOfThisMonth = dayjs()
        .set('month', props.month)
        .startOf('month')
        .weekday()

      const visibleDaysOfPreviousMonth = numberOfDaysOfPreviousMonth
        .splice(numberOfDaysOfPreviousMonth.length - firstDayOfThisMonth)
        .map((day) => ({ day: day + 1, currentMonth: false }))

      const daysOnThisMonth = Array.from(
        Array(numberOfDaysOfThisMonth).keys(),
      ).map((day) => ({ day: day + 1, currentMonth: true }))

      let totalDays = visibleDaysOfPreviousMonth.concat(daysOnThisMonth)

      if (35 - totalDays.length > 0) {
        const visibleDaysOfNextMonth = Array.from(
          Array(35 - totalDays.length).keys(),
        ).map((day) => ({ day: day + 1, currentMonth: false }))
        totalDays = totalDays.concat(visibleDaysOfNextMonth)
      } else {
        const visibleDaysOfNextMonth = Array.from(
          Array(42 - totalDays.length).keys(),
        ).map((day) => ({ day: day + 1, currentMonth: false }))
        totalDays = totalDays.concat(visibleDaysOfNextMonth)
      }
      setDates(totalDays)
    }
  }, [props.month])
  return (
    <CalendarContainer>
      <CalendarGridHeader>
        {CalendarConst.DAYS_OF_WEEK.map((day) => (
          <DayOfWeek>{day}</DayOfWeek>
        ))}
      </CalendarGridHeader>
      <CalendarGrid>
        {dates && dates.map((date) => <CalendarCell key={date.day + date.currentMonth} date={date} daySales={date.day / 1000} />)}
      </CalendarGrid>
    </CalendarContainer>
  )
}

export { Calendar }
