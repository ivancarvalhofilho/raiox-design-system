import React, { useEffect, useState } from 'react'
import { CalendarCell } from './CalendarCell'
import dayjs from '../../utils/dayjs'
import styled from 'styled-components'
import CalendarConst from './const'
import fonts from '../../../tokens/js/fonts'
import styles from '../../../tokens/js/styles'
import Colors from '../../../tokens/js/colors'

var isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
var isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

const CalendarContainer = styled.div`
  display: flex;
  flex-flow: column;
`

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: 48px 103px 103px 103px 103px 103px 103px;

  & > *:nth-child(7n-6) {
    background: ${Colors.neutral.light['02']};
  }
`

const CalendarGridHeader = styled.div`
  display: grid;
  grid-template-columns: 48px 103px 103px 103px 103px 103px 103px;
`

const DayOfWeek = styled.div`
  display: flex;
  justify-content: center;

  font-weight: ${fonts.weight.medium};
  font-size: ${fonts.fontSize.xxs};
  font-family: ${fonts.family.body};

  margin-bottom: ${styles.spacing.stack.quarck};
`

const Calendar = (props) => {
  const [dates, setDates] = useState(null)

  function findDayWithSale(currentDay) {
    const dayWithSale = props.dayWithSales.find((date) =>
      dayjs(date.day).isSame(currentDay, 'day'),
    )
    return (dayWithSale && dayWithSale.sale) || null
  }

  function currentDayIsSelected(currentDay) {
    const isSelectedDay =
      (props.selectedDates.state === CalendarConst.STATES.SELECTED &&
        dayjs(props.selectedDates.days[0]).isSameOrBefore(currentDay, 'day') &&
        !!dayjs(props.selectedDates.days[1]) &&
        dayjs(props.selectedDates.days[1]).isSameOrAfter(currentDay, 'day')) ||
      (props.selectedDates.state === CalendarConst.STATES.IN_SELECTION &&
        dayjs(props.selectedDates.days[0]).isSame(currentDay, 'day'))
    return isSelectedDay
  }

  function currentDayIsHovered(currentDay) {
    const isSelectedDay =
      props.selectedDates.state === CalendarConst.STATES.IN_SELECTION &&
      dayjs(props.selectedDates.days[0]).isSameOrBefore(currentDay, 'day') &&
      !!dayjs(props.selectedDates.days[1]) &&
      dayjs(props.selectedDates.days[1]).isSameOrAfter(currentDay, 'day')
    return isSelectedDay
  }

  function currentDayIsHolyday(currentDay) {
    const holyday = props.holydays.find((date) =>
      dayjs(date).isSame(currentDay, 'day'),
    )
    return holyday
  }

  function onDayClick(date) {
    if (props.selectedDates.state === CalendarConst.STATES.SELECTED) {
      props.setSelectedDates({
        days: [date],
        state: CalendarConst.STATES.IN_SELECTION,
      })
    } else if (
      props.selectedDates.state === CalendarConst.STATES.IN_SELECTION
    ) {
      if (dayjs(props.selectedDates.days[0]).isAfter(dayjs(date), 'day')) {
        props.setSelectedDates({
          days: [date],
          state: CalendarConst.STATES.IN_SELECTION,
        })
      } else {
        props.setSelectedDates({
          days: [props.selectedDates.days[0], date],
          state: CalendarConst.STATES.SELECTED,
        })
      }
    }
  }

  function generateDayObject(day, iterableDay, isCurrentMonth) {
    const currentDay = iterableDay.set('date', day + 1)
    return {
      day: day + 1,
      fullDate: currentDay.format('MM/DD/YYYY'),
      currentMonth: isCurrentMonth,
      sales: findDayWithSale(currentDay),
      isHolyday: currentDayIsHolyday(currentDay),
      isSelected: currentDayIsSelected(currentDay),
      isHovered: currentDayIsHovered(currentDay),
    }
  }

  useEffect(() => {
    if (props.month != null && props.month >= 0 && props.month < 12) {
      const numberOfDaysOfPreviousMonth = Array.from(
        Array(
          dayjs()
            .set('year', props.year)
            .set('month', props.month)
            .add(-1, 'month')
            .daysInMonth(),
        ).keys(),
      ).map((v) => v)

      const currentMonth = dayjs()
        .set('year', props.year)
        .set('month', props.month)
      const numberOfDaysOfThisMonth = currentMonth.daysInMonth()
      const firstDayOfThisMonth = currentMonth.startOf('month').weekday()

      let iterableDay = dayjs()
        .set('year', props.year)
        .set('month', props.month - 1)
      const visibleDaysOfPreviousMonth = numberOfDaysOfPreviousMonth
        .splice(numberOfDaysOfPreviousMonth.length - firstDayOfThisMonth)
        .map((day) => generateDayObject(day, iterableDay, false))

      iterableDay = iterableDay
        .set('year', props.year)
        .set('month', props.month)
      const daysOnThisMonth = Array.from(
        Array(numberOfDaysOfThisMonth).keys(),
      ).map((day) => generateDayObject(day, iterableDay, true))

      let totalDays = visibleDaysOfPreviousMonth.concat(daysOnThisMonth)

      iterableDay = iterableDay
        .set('year', props.year)
        .set('month', props.month + 1)
      if (35 - totalDays.length > 0) {
        const visibleDaysOfNextMonth = Array.from(
          Array(35 - totalDays.length).keys(),
        ).map((day) => generateDayObject(day, iterableDay, false))
        totalDays = totalDays.concat(visibleDaysOfNextMonth)
      } else {
        const visibleDaysOfNextMonth = Array.from(
          Array(42 - totalDays.length).keys(),
        ).map((day) => generateDayObject(day, iterableDay, false))
        totalDays = totalDays.concat(visibleDaysOfNextMonth)
      }
      setDates(
          update(totalDays, {
            $set: newItems,
          }),
      )
      setDates(totalDays)
    }
  }, [props.month, props.selectedDates])

  return (
    <CalendarContainer>
      <CalendarGridHeader>
        {CalendarConst.DAYS_OF_WEEK.map((day) => (
          <DayOfWeek>{day}</DayOfWeek>
        ))}
      </CalendarGridHeader>
      <CalendarGrid>
        {dates &&
          dates.map((date) => (
            <CalendarCell
              key={date.fullDate}
              date={date}
              daySales={date.sales}
              onDayClick={() => onDayClick(date.fullDate)}
            />
          ))}
      </CalendarGrid>
    </CalendarContainer>
  )
}

export { Calendar }
