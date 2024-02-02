import { mountWithTheme } from '../utils/testUtil'
import toJson from 'enzyme-to-json'
import React from 'react'
import { CollapseContainer } from '../components'

it('should render', () => {
  const spy = jest.spyOn(global.console, 'error')
  const props = {
    title: 'Teste',
  }

  const app = mountWithTheme(
    <CollapseContainer {...props}>TestChildren</CollapseContainer>,
  )
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})

it('should open', () => {
  const spy = jest.spyOn(global.console, 'error')
  const props = {
    title: 'Teste',
  }

  const app = mountWithTheme(
    <CollapseContainer {...props}>TestChildren</CollapseContainer>,
  )
  expect(app.find('#children').length).not.toBeGreaterThan(0)
  const header = app.find('#header')
  header.first().simulate('click')
  expect(app.find('#children').length).toBeGreaterThan(0)
  expect(spy).not.toHaveBeenCalled()
})
