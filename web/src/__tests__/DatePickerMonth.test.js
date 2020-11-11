import React from 'react'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'
import { mountWithTheme } from '../utils/testUtil'
import { DatePickerMonth } from '../components'
import dayjs from 'dayjs'

import { act } from 'react-dom/test-utils'

import ReactDOM from 'react-dom'

const mockProps = {
  showAllYears: false,
  data: ['2020-01', '2020-03', '2021-04', '2022-12']
    .map(data => dayjs(data))
    .map(data => ({
      year: data.get('year'),
      month: data.get('month'),
      date: data.format('YYYY-MM'),
    })),
}

it('should render', () => {
  const spy = jest.spyOn(global.console, 'error')

  const app = mountWithTheme(<DatePickerMonth {...mockProps} />)
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})

it('should render withShowYears', () => {
  const spy = jest.spyOn(global.console, 'error')

  const app = mountWithTheme(<DatePickerMonth {...mockProps} showAllYears />)
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})

it('should click outside', () => {
  const spy = jest.spyOn(global.console, 'error')
  const setComponentVisibility = jest.fn()
  const map = {}
  document.addEventListener = jest.fn((event, cb) => {
    map[event] = cb
  })
  const app = mountWithTheme(
    <DatePickerMonth
      {...mockProps}
      showAllYears
      setComponentVisibility={setComponentVisibility}
    />,
  )
  expect(setComponentVisibility).not.toHaveBeenCalled()
  map.mousedown({
    target: ReactDOM.findDOMNode(app.instance()),
  })
  expect(spy).not.toHaveBeenCalled()
  expect(setComponentVisibility).toHaveBeenCalled()
  app.unmount()
})

it('should changeYear', () => {
  const spy = jest.spyOn(global.console, 'error')

  const app = mountWithTheme(<DatePickerMonth {...mockProps} showAllYears />)
  const year = app.find('#year').first()
  expect(year.text()).toBe('2020')
  act(() => {
    const leftYear = app.find('#yearLeft').first()
    leftYear.simulate('click')
    app.update()
  })
  expect(year.text()).toBe('2019')
  act(() => {
    const rightYear = app.find('#yearRight').first()
    rightYear.simulate('click')
    app.update()
  })
  expect(year.text()).toBe('2020')
  expect(spy).not.toHaveBeenCalled()
})

it('should month change', () => {
  const spy = jest.spyOn(global.console, 'error')
  const onSelectMonth = jest.fn()

  const app = mountWithTheme(
    <DatePickerMonth
      {...mockProps}
      showAllYears
      onSelectMonth={onSelectMonth}
    />,
  )
  expect(onSelectMonth).not.toHaveBeenCalled()
  const month = app.find('#month0').first()
  month.simulate('click')
  expect(onSelectMonth).toHaveBeenCalled()
  expect(spy).not.toHaveBeenCalled()
})
