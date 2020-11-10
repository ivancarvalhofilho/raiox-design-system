import { mountWithTheme } from '../utils/testUtil'
import toJson from 'enzyme-to-json'
import React from 'react'
import { Table } from '../components'

import 'jest-styled-components'
import { tableMock } from '../../stories/mocks'

it('should render', () => {
  const spy = jest.spyOn(global.console, 'error')
  const props = tableMock

  const app = mountWithTheme(<Table {...props} />)
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})

it('should open child', () => {
  const openChildren = jest.fn()
  const spy = jest.spyOn(global.console, 'error')
  const props = tableMock

  const app = mountWithTheme(<Table {...props} onRowClick={openChildren} />)
  const item = app.find('#item00')
  expect(openChildren).not.toHaveBeenCalled()
  item.first().simulate('click')
  expect(openChildren).toHaveBeenCalled()
  expect(spy).not.toHaveBeenCalled()
  expect(spy).not.toHaveBeenCalled()
})

it('should order', () => {
  const orderFunction = jest.fn()
  const spy = jest.spyOn(global.console, 'error')
  const props = tableMock

  const app = mountWithTheme(
    <Table {...props} onClickToOrder={orderFunction} />,
  )
  const headerItem = app.find('#header1')
  expect(orderFunction).not.toHaveBeenCalled()
  headerItem.first().simulate('click')
  expect(orderFunction).toHaveBeenCalled()
  expect(spy).not.toHaveBeenCalled()
})
