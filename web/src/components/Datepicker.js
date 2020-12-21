import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Icon } from './index'
import theme from '../../../tokens/theme'
import { Divider } from './StyledComponents'
import dayjs from 'dayjs'
import { fontStyleMaker } from '../utils'

const ButtonContainer = styled.div`
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  width: 342px;
  height: 40px;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  background: #ffffff;
`

const CalendarIcon = styled.div`
  background: #008488;
  border-radius: 0 5px 5px 0;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContainerDate = styled.div`
  padding: 0 16px;
  display: flex;
`
const Text = styled.div`
  ${props =>
    fontStyleMaker(props.theme, 'body', 'medium', 'xxs', 'neutral.dark.base')};
  display: flex;
  align-items: center;
  margin-right: 8px;
`
const Date = styled.div`
  ${props =>
    fontStyleMaker(props.theme, 'body', 'medium', 'xxs', 'neutral.dark.base')};
  line-height: 15px;
  display: flex;
  align-items: center;

  color: #008488;
`

const DatepickerContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 9px 46px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  width: 639px;
  height: 315px;
  position: absolute;
  display: flex;
  justify-content: space-between;
`

const MonthContainer = styled.div`
  flex: 1;
`
const MonthTitle = styled.div`
  ${props =>
    fontStyleMaker(
      props.theme,
      'body',
      'medium',
      'xs',
      'brand.secondary.dark',
    )};
`

const MonthHeader = styled.div`
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;
  height: 57px;
`

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  height: 245px;
  padding: 0 13px;
`

const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: ${props => props.onClick && 'pointer'};
  background-color: ${props =>
    props.selected && theme.colors.brand.primary.medium};
  ${props =>
    fontStyleMaker(props.theme, 'body', 'medium', 'xxs', 'neutral.dark.base')};
  color: ${props => props.disabled && '#979899'};
  ${props =>
    (props.first || props.last) &&
    `color: ${theme.colors.neutral.light.base};
  background: #008488;`}
  ${props => props.first && ` border-radius: 5px`}
  ${props => props.last && `  border-radius: 5px`}
`

const DayBackground = styled.div`
  background-color: ${props =>
    props.selected && theme.colors.brand.primary.medium};
`

const DayHeader = styled(Day)`
  color: ${props => props.theme.colors.brand.secondary.dark};
`

const Datepicker = props => {
  const [opened, setOpened] = useState(true)
  const [daysCalendar, setDaysCalendar] = useState([])
  const [months, setMonths] = useState(props.dates)
  const [firstClick, setFirstClick] = useState(true)
  const [secondDateHover, setSecondDateHover] = useState(null)
  const createArray = (size, firstNumber) => {
    let firstNumberCounter = firstNumber ? firstNumber + 1 : 1
    let array = Array.from(Array(size).keys())
    array = array.map(number => {
      firstNumberCounter = firstNumberCounter + 1
      return firstNumberCounter - 1
    })
    return array
  }
  useEffect(() => {
    const dates = []
    months.forEach((date, index) => {
      const numberOfDaysOfThisMonth = date.daysInMonth()
      const numberOfDaysOfPastMonth = date.add(-1, 'month').daysInMonth()
      const firstDayOfThisMonth = date.startOf('month').weekday()
      dates[index] = [
        ...createArray(
          firstDayOfThisMonth,
          numberOfDaysOfPastMonth - firstDayOfThisMonth,
        ).map(value => -value),
        ...createArray(numberOfDaysOfThisMonth),
      ]
    })
    setDaysCalendar(dates)
  }, [months])

  const changeYear = (index, plus) => {
    const newMonths = months.map((month, indexMonth) =>
      month.add(indexMonth === index ? (plus ? 1 : -1) : 0, 'year'),
    )
    if (index === 0 && newMonths[0].isSameOrAfter(newMonths[1])) {
      newMonths[1] = newMonths[0].add(1, 'month')
    }
    if (index === 1 && newMonths[1].isSameOrBefore(newMonths[0])) {
      newMonths[0] = newMonths[1].add(-1, 'month')
    }
    setMonths(newMonths)
  }

  const changeMonth = (index, plus) => {
    const newMonths = months.map((month, indexMonth) =>
      month.add(indexMonth === index ? (plus ? 1 : -1) : 0, 'month'),
    )
    if (index === 0 && newMonths[0].isSameOrAfter(newMonths[1])) {
      newMonths[1] = newMonths[0].add(1, 'month')
    }
    if (index === 1 && newMonths[1].isSameOrBefore(newMonths[0])) {
      newMonths[0] = newMonths[1].add(-1, 'month')
    }
    setMonths(newMonths)
  }

  return (
    <>
      <ButtonContainer
        onClick={() => {
          setOpened(!opened)
        }}
      >
        <ContainerDate>
          <Text>Período</Text>
          <Date>
            {`${props.dates[0].format('DD MMM')} - ${props.dates[1].format(
              'DD MMM',
            )}`}
          </Date>
        </ContainerDate>
        <CalendarIcon>
          <Icon path={theme.icons.calendar} size="22px" appearance="light" />
        </CalendarIcon>
      </ButtonContainer>
      {opened && (
        <DatepickerContainer>
          {months.map((date, index) => (
            <>
              <MonthContainer>
                <MonthHeader>
                  <div>
                    <Icon
                      path={theme.icons['double-arrow-left']}
                      size="14px"
                      onClick={() => changeYear(index, false)}
                    />
                    <Icon
                      path={theme.icons['single-arrow-left']}
                      size="14px"
                      onClick={() => changeMonth(index, false)}
                    />
                  </div>
                  <MonthTitle>{date.format('MMMM YYYY')}</MonthTitle>
                  <div>
                    <Icon
                      path={theme.icons['single-arrow-right']}
                      size="14px"
                      onClick={() => changeMonth(index, true)}
                    />
                    <Icon
                      path={theme.icons['double-arrow-right']}
                      size="14px"
                      onClick={() => changeYear(index, true)}
                    />
                  </div>
                </MonthHeader>
                <Divider horizontal />
                <CalendarContainer>
                  {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map(day => (
                    <DayHeader>{day}</DayHeader>
                  ))}
                  {daysCalendar[index] &&
                    daysCalendar[index].map(day => {
                      const dayMonth = months[index]
                        .set('date', Math.abs(day))
                        .add(Math.sign(day) === -1 ? -1 : 0, 'month')
                      return (
                        <DayBackground
                          selected={
                            dayMonth.isSameOrAfter(props.dates[0]) &&
                            dayMonth.isSameOrBefore(
                              !firstClick ? secondDateHover : props.dates[1],
                            )
                          }
                        >
                          <Day
                            onMouseOver={() =>
                              !firstClick && setSecondDateHover(dayMonth)
                            }
                            first={dayMonth.isSame(props.dates[0])}
                            last={firstClick && dayMonth.isSame(props.dates[1])}
                            onClick={() => {
                              props.onSelectDay(dayMonth, firstClick ? 0 : 1)
                              setFirstClick(!firstClick)
                            }}
                            disabled={Math.sign(day) === -1}
                          >
                            {Math.abs(day)}
                          </Day>
                        </DayBackground>
                      )
                    })}
                </CalendarContainer>
              </MonthContainer>
              {index < props.dates.length && <Divider />}
            </>
          ))}
        </DatepickerContainer>
      )}
    </>
  )
}

export default Datepicker
