import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Calendar from '../components/Calendar/Calendar'
import theme from '../../../tokens/js'
import { ThemeProvider } from 'styled-components'
import CalendarConst from '../components/Calendar/const'

it('should render the homepage for the non logged in user', () => {
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

  const app = mount(
    <ThemeProvider theme={theme}>
      <Calendar
        {...props}
        selectedDates={selectedDates}
        setSelectedDates={() => {}}
      />
    </ThemeProvider>,
  )
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})
