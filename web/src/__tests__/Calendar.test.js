import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Calendar from '../components/Calendar/Calendar'
import theme from '../../../tokens/js'
import { ThemeProvider } from 'styled-components'
import CalendarConst from '../components/Calendar/const'
import 'jest-styled-components'
import { mountWithTheme } from '../utils/testUtil'

it('should render', () => {
  const spy = jest.spyOn(global.console, 'error')
  const props = {
    month: 0,
    year: 2020,
    maxDateRange: 7,
    dayWithSales: [
      { day: '01/01/2020', sale: 50, type: 'A' },
      { day: '01/13/2020', sale: 700.55, type: 'R' },
      { day: '02/01/2020', sale: 500, type: 'R' },
    ],
    holydays: ['01/24/2020', '04/01/2020'],
  }

  const selectedDates = {
    state: CalendarConst.STATES.SELECTED,
    firstClickDate: null,
    startDate: '01/09/2020',
    endDate: '01/22/2020',
  }

  const app = mountWithTheme(
    <Calendar
      {...props}
      selectedDates={selectedDates}
      setSelectedDates={() => {}}
    />,
  )
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})

it('should render with month 35 days', () => {
  const spy = jest.spyOn(global.console, 'error')
  const props = {
    month: 4,
    year: 2020,
    maxDateRange: 7,
    dayWithSales: [
      { day: '01/01/2020', sale: 50, type: 'A' },
      { day: '01/13/2020', sale: 700.55, type: 'R' },
      { day: '02/01/2020', sale: 500, type: 'R' },
    ],
    holydays: ['01/24/2020', '04/01/2020'],
  }

  const selectedDates = {
    state: CalendarConst.STATES.SELECTED,
    firstClickDate: null,
    startDate: '01/09/2020',
    endDate: '01/22/2020',
  }

  const app = mountWithTheme(
    <Calendar
      {...props}
      selectedDates={selectedDates}
      setSelectedDates={() => {}}
    />,
  )
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})

it('should click and select dates', () => {
  const spy = jest.spyOn(global.console, 'error')
  const mockClick = jest.fn()

  const selectedDates = {
    state: CalendarConst.STATES.SELECTED,
    firstClickDate: null,
    startDate: '01/09/2020',
    endDate: '01/22/2020',
  }

  let props = {
    month: 0,
    year: 2020,
    maxDateRange: 7,
    dayWithSales: [
      { day: '01/01/2020', sale: 50, type: 'A' },
      { day: '01/13/2020', sale: 700.55, type: 'R' },
      { day: '02/01/2020', sale: 500, type: 'R' },
    ],
    holydays: ['01/24/2020', '04/01/2020'],
    selectedDates: selectedDates,
  }

  const calendar = mountWithTheme(
    <Calendar
      {...props}
      setSelectedDates={newSelectedDates => {
        props = { ...props, selectedDates: newSelectedDates }
        mockClick()
      }}
    />,
  )
  const day3 = calendar.find('#day3')
  day3.first().simulate('click')
  calendar.setProps(props)
  calendar.update()
  const day6 = calendar.find('#day6')
  day6.first().simulate('mouseover')
  day6.first().simulate('click')
  day6.first().simulate('mouseout')
  expect(spy).not.toHaveBeenCalled()
  expect(mockClick).toHaveBeenCalled()
})

it('should click and select revert dates', () => {
  const spy = jest.spyOn(global.console, 'error')
  const mockClick = jest.fn()

  const selectedDates = {
    state: CalendarConst.STATES.SELECTED,
    firstClickDate: null,
    startDate: '01/09/2020',
    endDate: '01/22/2020',
  }

  let props = {
    month: 0,
    year: 2020,
    maxDateRange: 7,
    dayWithSales: [
      { day: '01/01/2020', sale: 50, type: 'A' },
      { day: '01/13/2020', sale: 700.55, type: 'R' },
      { day: '02/01/2020', sale: 500, type: 'R' },
    ],
    holydays: ['01/24/2020', '04/01/2020'],
    selectedDates: selectedDates,
  }

  const calendar = mountWithTheme(
    <Calendar
      {...props}
      setSelectedDates={newSelectedDates => {
        props = { ...props, selectedDates: newSelectedDates }
        mockClick()
      }}
    />,
  )
  const day6 = calendar.find('#day6')
  day6.first().simulate('click')
  calendar.setProps(props)
  calendar.update()
  const day3 = calendar.find('#day3')
  day3.first().simulate('mouseover')
  day3.first().simulate('click')
  day3.first().simulate('mouseout')
  expect(spy).not.toHaveBeenCalled()
  expect(mockClick).toHaveBeenCalled()
})

it('should click and select same dates', () => {
  const spy = jest.spyOn(global.console, 'error')
  const mockClick = jest.fn()

  const selectedDates = {
    state: CalendarConst.STATES.SELECTED,
    firstClickDate: null,
    startDate: '01/09/2020',
    endDate: '01/22/2020',
  }

  let props = {
    month: 4,
    year: 2020,
    maxDateRange: 7,
    dayWithSales: [
      { day: '01/01/2020', sale: 50, type: 'A' },
      { day: '01/13/2020', sale: 700.55, type: 'R' },
      { day: '02/01/2020', sale: 500, type: 'R' },
    ],
    holydays: ['01/24/2020', '04/01/2020'],
    selectedDates: selectedDates,
  }

  const calendar = mountWithTheme(
    <Calendar
      {...props}
      setSelectedDates={newSelectedDates => {
        props = { ...props, selectedDates: newSelectedDates }
        mockClick()
      }}
    />,
  )
  const day6 = calendar.find('#day6')
  day6.first().simulate('click')
  calendar.setProps(props)
  calendar.update()
  day6.first().simulate('mouseover')
  day6.first().simulate('click')
  day6.first().simulate('mouseout')
  expect(spy).not.toHaveBeenCalled()
  expect(mockClick).toHaveBeenCalled()
})
