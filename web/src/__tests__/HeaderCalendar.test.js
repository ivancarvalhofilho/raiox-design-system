import { mountWithTheme } from '../utils/testUtil'
import toJson from 'enzyme-to-json'
import React from 'react'
import { HeaderCalendar } from '../components'
import Tokens from '../tokens'

it('should render', () => {
  const spy = jest.spyOn(global.console, 'error')
  const props = {
    month: 0,
    year: 2020,
    disabledLeft: true,
    onBackMonthClick: () => {},
    onNextMonthClick: () => {},
    onMonthClick: () => {},
    values: [
      {
        label: 'Recebido',
        value: '2.502,16',
        color: Tokens.colors.feedback.success.dark,
      },
      {
        label: 'Previsto',
        value: '8.660,07',
        color: Tokens.colors.feedback.danger.dark,
      },
    ],
  }

  const app = mountWithTheme(
    <HeaderCalendar {...props}>TestChildren</HeaderCalendar>,
  )
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})
it('should navigate months', () => {
  const spy = jest.spyOn(global.console, 'error')
  const onBackMonthClick = jest.fn()
  const onNextMonthClick = jest.fn()
  const onMonthClick = jest.fn()
  const props = {
    month: 0,
    year: 2020,
    disabledLeft: false,
    onBackMonthClick: onBackMonthClick,
    onNextMonthClick: onNextMonthClick,
    onMonthClick: onMonthClick,
    values: [
      {
        label: 'Recebido',
        value: '2.502,16',
        color: Tokens.colors.feedback.success.dark,
      },
      {
        label: 'Previsto',
        value: '8.660,07',
        color: Tokens.colors.feedback.danger.dark,
      },
    ],
  }

  const app = mountWithTheme(
    <HeaderCalendar {...props}>TestChildren</HeaderCalendar>,
  )
  const nextButton = app.find('#nextMonth')
  const dateButton = app.find('#date')
  const backButton = app.find('#backMonth')
  expect(onNextMonthClick).not.toHaveBeenCalled()
  nextButton.first().simulate('click')
  expect(onNextMonthClick).toHaveBeenCalled()
  expect(onBackMonthClick).not.toHaveBeenCalled()
  backButton.first().simulate('click')
  expect(onBackMonthClick).toHaveBeenCalled()
  expect(onMonthClick).not.toHaveBeenCalled()
  dateButton.first().simulate('click')
  expect(onMonthClick).toHaveBeenCalled()
  expect(spy).not.toHaveBeenCalled()
})

it('should navigate months with disabled navigate', () => {
  const spy = jest.spyOn(global.console, 'error')
  const onBackMonthClick = jest.fn()
  const onNextMonthClick = jest.fn()
  const onMonthClick = jest.fn()
  const props = {
    month: 0,
    year: 2020,
    disabledLeft: true,
    disabledRight: true,
    onBackMonthClick: onBackMonthClick,
    onNextMonthClick: onNextMonthClick,
    onMonthClick: onMonthClick,
    values: [
      {
        label: 'Recebido',
        value: '2.502,16',
        color: Tokens.colors.feedback.success.dark,
      },
      {
        label: 'Previsto',
        value: '8.660,07',
        color: Tokens.colors.feedback.danger.dark,
      },
    ],
  }

  const app = mountWithTheme(
    <HeaderCalendar {...props}>TestChildren</HeaderCalendar>,
  )
  const nextButton = app.find('#nextMonth')
  const dateButton = app.find('#date')
  const backButton = app.find('#backMonth')
  expect(onNextMonthClick).not.toHaveBeenCalled()
  nextButton.first().simulate('click')
  expect(onNextMonthClick).not.toHaveBeenCalled()
  expect(onBackMonthClick).not.toHaveBeenCalled()
  backButton.first().simulate('click')
  expect(onBackMonthClick).not.toHaveBeenCalled()
  expect(onMonthClick).not.toHaveBeenCalled()
  dateButton.first().simulate('click')
  expect(onMonthClick).toHaveBeenCalled()
  expect(spy).not.toHaveBeenCalled()
})
