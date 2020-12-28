import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Icon } from './index'
import theme from '../../../tokens/theme'
import { Divider } from './StyledComponents'
import { fontStyleMaker } from '../utils'
import dayjs from 'dayjs'

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
const ContainerDatepicker = styled.div`
  position: relative;
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
  padding: 0 ${props => props.theme.styles.spacing.inset.xs};
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
  box-shadow: ${props => props.theme.styles.shadow.level1};
  border-radius: ${props => props.theme.styles.border.sm};
  width: 514px;
  ${props =>
    props.alignContainer === 'center'
      ? 'left: -150px'
      : `${props.alignContainer}: 0`};
  top: 48px;
  z-index: 1000;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 9px 46px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  display: flex;
  //height: 315px;
  justify-content: space-between;
`

const MonthContainer = styled.div`
  flex: 1;
`
const MonthTitle = styled.div`
  ${props =>
    fontStyleMaker(props.theme, 'body', 'regular', 'xs', 'neutral.dark.base')};
`

const MonthHeader = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;
`

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  row-gap: 8px;
  height: 250px;
  padding: 0 16px 16px 16px;
`
const BlockMessage = styled.div`
  height: 58px;
  background: ${props => props.theme.colors.feedback.danger.light};
  padding: 8px 13px;
  display: flex;
  align-items: center;
  ${props =>
    fontStyleMaker(
      props.theme,
      'body',
      'medium',
      'xs',
      'feedback.danger.dark',
    )};
`

const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: ${props =>
    props.disabled ? 'not-allowed' : props.onClick && 'pointer'};
  background-color: ${props =>
    props.selected && theme.colors.brand.primary.medium};
  ${props =>
    fontStyleMaker(props.theme, 'body', 'medium', 'xxs', 'neutral.dark.base')};
  color: ${props => props.disabled && props.theme.colors.neutral.dark['02']};
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
  background-color: ${props =>
    props.disabled && theme.colors.neutral.dark['03']};
  border-radius: ${props => props.firstInLine && '5px 0 0  5px'};
  border-radius: ${props => props.lastInLine && '0 5px 5px 0'};
  border-radius: ${props => props.first && '5px 0 0  5px'};
  border-radius: ${props => props.last && '0 5px 5px 0'};
`

const DayHeader = styled(Day)`
  ${props =>
    fontStyleMaker(props.theme, 'body', 'regular', 'xxs', 'neutral.dark.01')};
`

const Datepicker = props => {
  const [opened, setOpened] = useState(false)
  const [daysCalendar, setDaysCalendar] = useState([])
  const [months, setMonths] = useState([
    dayjs(props.dates[0]),
    dayjs(props.dates[0]).add(1, 'month'),
  ])
  const [today] = useState(dayjs())
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
      const numberOfDaysOfPastMonth = dayjs(date)
        .add(-1, 'month')
        .daysInMonth()
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

  useEffect(() => {
    if (!opened) {
      props.onClose && props.onClose()
    }
  }, [opened])

  const changeYear = (index, plus) => {
    const newMonths = months.map(month =>
      dayjs(month).add(plus ? 1 : -1, 'year'),
    )
    setMonths(newMonths)
  }

  const changeMonth = (index, plus) => {
    const newMonths = months.map((month, indexMonth) =>
      dayjs(month).add(plus ? 1 : -1, 'month'),
    )
    setMonths(newMonths)
  }

  const ref = useRef(null)
  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpened(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return (
    <ContainerDatepicker ref={ref} style={props.style}>
      <ButtonContainer
        id="button"
        onClick={() => {
          setOpened(!opened)
        }}
      >
        <ContainerDate>
          <Text>Período</Text>
          <Date>
            {`${dayjs(props.dates[0]).format('DD MMM')} - ${dayjs(
              props.dates[1],
            ).format('DD MMM')}`}
          </Date>
        </ContainerDate>
        <CalendarIcon>
          <Icon path={theme.icons.calendar} size="22px" appearance="light" />
        </CalendarIcon>
      </ButtonContainer>
      {opened && (
        <DatepickerContainer
          id="container"
          alignContainer={props.alignContainer}
        >
          <Container>
            {months.map((date, index) => (
              <React.Fragment key={index}>
                <MonthContainer>
                  <MonthHeader>
                    <div style={{ minWidth: '30px' }}>
                      {index === 0 && (
                        <>
                          <Icon
                            path={theme.icons['double-arrow-left']}
                            size="14px"
                            id={`previousYear${index}`}
                            style={{ marginRight: '8px' }}
                            onClick={() => changeYear(index, false)}
                          />
                          <Icon
                            path={theme.icons['single-arrow-left']}
                            size="14px"
                            id={`previousMonth${index}`}
                            onClick={() => changeMonth(index, false)}
                          />
                        </>
                      )}
                    </div>
                    <MonthTitle>{date.format('MMMM YYYY')}</MonthTitle>
                    <div style={{ minWidth: '30px' }}>
                      {index === 1 && (
                        <>
                          <Icon
                            path={theme.icons['single-arrow-right']}
                            size="14px"
                            style={{ marginRight: '8px' }}
                            id={`nextMonth${index}`}
                            onClick={() => changeMonth(index, true)}
                          />
                          <Icon
                            path={theme.icons['double-arrow-right']}
                            size="14px"
                            id={`nextYear${index}`}
                            onClick={() => changeYear(index, true)}
                          />
                        </>
                      )}
                    </div>
                  </MonthHeader>
                  <CalendarContainer>
                    {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(
                      (day, index) => (
                        <DayHeader key={index}>{day}</DayHeader>
                      ),
                    )}
                    {daysCalendar[index] &&
                      daysCalendar[index].map((day, indexDay) => {
                        const dayMonth = dayjs(months[index])
                          .set('date', Math.abs(day))
                          .add(Math.sign(day) === -1 ? -1 : 0, 'month')
                        const disabledByRange =
                          props.maxRange &&
                          !firstClick &&
                          Math.abs(
                            dayjs(props.dates[0]).diff(dayMonth, 'day'),
                          ) > props.maxRange
                        const disabled =
                          (props.maxDate &&
                            dayMonth.isSameOrAfter(props.maxDate)) ||
                          (props.minDate &&
                            dayMonth.isSameOrBefore(props.minDate)) ||
                          disabledByRange
                        const isToday = dayMonth.isSame(today, 'day')
                        return (
                          <DayBackground
                            key={date + indexDay}
                            firstInLine={indexDay % 7 === 0}
                            lastInLine={(indexDay + 1) % 7 === 0}
                            first={
                              day >= 0 && dayMonth.isSame(dayjs(props.dates[0]))
                            }
                            last={
                              day >= 0 &&
                              firstClick &&
                              dayMonth.isSame(props.dates[1])
                            }
                            data-tooltip={
                              disabledByRange
                                ? 'Não é possível selecionar um período maior que 120 dias'
                                : ''
                            }
                            selected={
                              Math.sign(day) === 1 &&
                              ((dayMonth.isSameOrAfter(dayjs(props.dates[0])) &&
                                dayMonth.isSameOrBefore(
                                  !firstClick
                                    ? secondDateHover
                                    : props.dates[1],
                                )) ||
                                (dayMonth.isSameOrBefore(
                                  dayjs(props.dates[0]),
                                ) &&
                                  dayMonth.isSameOrAfter(
                                    !firstClick
                                      ? secondDateHover
                                      : dayjs(props.dates[1]),
                                  )))
                            }
                          >
                            {Math.sign(day) === 1 && (
                              <Day
                                onMouseOver={() => {
                                  if (!firstClick) {
                                    setSecondDateHover(dayMonth)
                                  }
                                }}
                                id={`day${dayMonth.format('DDMMYY')}`}
                                first={
                                  day >= 0 &&
                                  dayMonth.isSame(dayjs(props.dates[0]))
                                }
                                last={
                                  day >= 0 &&
                                  dayMonth.isSame(
                                    firstClick
                                      ? dayjs(props.dates[1])
                                      : secondDateHover,
                                  )
                                }
                                onClick={() => {
                                  if (!disabled) {
                                    props.onSelectDay(
                                      dayMonth,
                                      firstClick ? 0 : 1,
                                    )
                                    setFirstClick(!firstClick)
                                    setOpened(firstClick)
                                  }
                                }}
                                disabled={disabled}
                              >
                                {isToday ? 'Hoje' : Math.abs(day)}
                              </Day>
                            )}
                          </DayBackground>
                        )
                      })}
                  </CalendarContainer>
                </MonthContainer>
                {index < props.dates.length && <Divider />}
              </React.Fragment>
            ))}
          </Container>
        </DatepickerContainer>
      )}
    </ContainerDatepicker>
  )
}

export default Datepicker

Datepicker.propTypes = {
  alignContainer: PropTypes.string,
  dates: PropTypes.array,
  maxDate: PropTypes.object,
  maxRange: PropTypes.number,
  minDate: PropTypes.object,
  onClose: PropTypes.func,
  onSelectDay: PropTypes.func,
  style: PropTypes.object,
}
