import { mountWithTheme } from '../utils/testUtil'
import { DatePickerMonth } from '../components'
import toJson from 'enzyme-to-json'
import React from 'react'
import Datepicker from '../components/Datepicker'
import dayjs from 'dayjs'
import MockDate from 'mockdate'

MockDate.set(1434319925275)

const mockProps = {
  dates: [dayjs(1434319925275), dayjs(1434319925275).add(1, 'month')],
  maxRange: 120,
  onSelectDay: (data, index) => {},
}

beforeAll(() => {})

it('should render', () => {
  const spy = jest.spyOn(global.console, 'error')

  const app = mountWithTheme(<Datepicker {...mockProps} />)
  const button = app.find('#button')
  expect(toJson(app)).toMatchSnapshot()
  let container = app.find('#container')
  expect(container.length).not.toBeGreaterThan(0)
  button.first().simulate('click')
  container = app.find('#container')
  expect(container.length).toBeGreaterThan(0)
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})

it('should change dates', () => {
  const spy = jest.spyOn(global.console, 'error')
  const changeDates = jest.fn()

  const app = mountWithTheme(
    <Datepicker {...mockProps} onSelectDay={changeDates} />,
  )
  const button = app.find('#button')
  button.first().simulate('click')
  expect(changeDates).toHaveBeenCalledTimes(0)
  const day1 = app.find('#day020615')
  const day2 = app.find('#day090615')
  day1.first().simulate('click')
  expect(changeDates).toHaveBeenCalledTimes(1)
  day2.first().simulate('mouseover')
  day2.first().simulate('click')
  expect(changeDates).toHaveBeenCalledTimes(2)
  expect(spy).not.toHaveBeenCalled()
})

it('should change year and months', () => {
  const spy = jest.spyOn(global.console, 'error')
  const changeDates = jest.fn()

  const app = mountWithTheme(
    <Datepicker {...mockProps} onSelectDay={changeDates} />,
  )
  const button = app.find('#button')
  button.first().simulate('click')
  const previousYear0 = app.find('#previousYear0')
  const previousYear1 = app.find('#previousYear1')
  const nextYear0 = app.find('#nextYear0')
  const nextYear1 = app.find('#nextYear1')
  const previousMonth0 = app.find('#previousMonth0')
  const previousMonth1 = app.find('#previousMonth1')
  const nextMonth0 = app.find('#nextMonth0')
  const nextMonth1 = app.find('#nextMonth1')
  previousYear0.first().simulate('click')
  previousYear1.first().simulate('click')
  nextYear0.first().simulate('click')
  nextYear1.first().simulate('click')
  expect(app.find('#day010615').length).toBeGreaterThan(0)
  nextYear0.first().simulate('click')
  nextYear1.first().simulate('click')
  previousMonth0.first().simulate('click')
  previousMonth1.first().simulate('click')
  expect(app.find('#day270516').length).toBeGreaterThan(0)
  expect(app.find('#day290517').length).toBeGreaterThan(0)
  nextMonth0.first().simulate('click')
  nextMonth1.first().simulate('click')
  nextMonth0.first().simulate('click')
  nextMonth1.first().simulate('click')
  expect(app.find('#day270616').length).toBeGreaterThan(0)
  expect(app.find('#day120817').length).toBeGreaterThan(0)
  expect(spy).not.toHaveBeenCalled()
})

it('should change year and months inverted', () => {
  const spy = jest.spyOn(global.console, 'error')
  const changeDates = jest.fn()

  const app = mountWithTheme(
    <Datepicker {...mockProps} onSelectDay={changeDates} />,
  )
  const button = app.find('#button')
  button.first().simulate('click')
  const previousYear0 = app.find('#previousYear0')
  const previousYear1 = app.find('#previousYear1')
  const nextYear0 = app.find('#nextYear0')
  const nextYear1 = app.find('#nextYear1')
  const previousMonth0 = app.find('#previousMonth0')
  const previousMonth1 = app.find('#previousMonth1')
  const nextMonth0 = app.find('#nextMonth0')
  const nextMonth1 = app.find('#nextMonth1')
  previousYear1.first().simulate('click')
  previousYear0.first().simulate('click')
  nextYear1.first().simulate('click')
  nextYear0.first().simulate('click')
  expect(app.find('#day010614').length).toBeGreaterThan(0)
  nextYear1.first().simulate('click')
  nextYear0.first().simulate('click')
  previousMonth1.first().simulate('click')
  previousMonth0.first().simulate('click')
  expect(app.find('#day010515').length).toBeGreaterThan(0)
  expect(app.find('#day010616').length).toBeGreaterThan(0)
  nextMonth1.first().simulate('click')
  nextMonth0.first().simulate('click')
  nextYear0.first().simulate('click')
  nextMonth1.first().simulate('click')
  nextMonth0.first().simulate('click')
  nextMonth0.first().simulate('click')
  nextMonth0.first().simulate('click')
  expect(app.find('#day010916').length).toBeGreaterThan(0)
  expect(app.find('#day011016').length).toBeGreaterThan(0)
  previousMonth1.first().simulate('click')
  expect(app.find('#day010816').length).toBeGreaterThan(0)
  expect(app.find('#day010916').length).toBeGreaterThan(0)
  expect(spy).not.toHaveBeenCalled()
})
