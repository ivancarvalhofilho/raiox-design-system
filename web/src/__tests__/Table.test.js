import { mountWithTheme } from '../utils/testUtil'
import { act } from 'react-dom/test-utils'
import toJson from 'enzyme-to-json'
import React from 'react'
import { Table } from '../components'
import { tableMock } from '../../stories/mocks'

it('should render', () => {
  const spy = jest.spyOn(global.console, 'error')
  const props = tableMock

  const app = mountWithTheme(<Table {...props} />)
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
  app.unmount()
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

it('should resize', () => {
  const orderFunction = jest.fn()
  const spy = jest.spyOn(global.console, 'error')
  const props = tableMock

  const app = mountWithTheme(
    <Table {...props} onClickToOrder={orderFunction} />,
  )
  act(() => {
    global.innerWidth = 500

    // Trigger the window resize event.
    global.dispatchEvent(new Event('resize'))
  })
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})

it('should scroll', () => {
  const spy = jest.spyOn(global.console, 'error')
  const props = { ...tableMock, complete: true, height: '50px' }

  const app = mountWithTheme(<Table {...props} />)
  act(() => {
    const container = app.find('#container').first()
    const scrollableDiv = app.find('#scrollableDiv').first()
    const mEvent = {
      target: { scrollWidth: 100, scrollLeft: 50, clientWidth: 100 },
    }
    scrollableDiv.simulate('mouseenter')
    container.simulate('scroll', mEvent)
  })
  expect(spy).not.toHaveBeenCalled()
})

it('should render complete', () => {
  const spy = jest.spyOn(global.console, 'error')
  const props = { ...tableMock, complete: true }

  const app = mountWithTheme(<Table {...props} />)
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})

it('should order optional', () => {
  const onClickToOrder = jest.fn()
  const spy = jest.spyOn(global.console, 'error')
  const props = { ...tableMock, complete: true }

  const app = mountWithTheme(
    <Table {...props} onClickToOrder={onClickToOrder} />,
  )
  const item = app.find('#headerOptional4')
  expect(onClickToOrder).not.toHaveBeenCalled()
  item.first().simulate('click')
  expect(onClickToOrder).toHaveBeenCalled()
  expect(spy).not.toHaveBeenCalled()
})

it('should scroll optional', () => {
  const onClickToOrder = jest.fn()
  const spy = jest.spyOn(global.console, 'error')
  const props = { ...tableMock, complete: true }

  const app = mountWithTheme(
    <Table {...props} onClickToOrder={onClickToOrder} />,
  )
  act(() => {
    const container = app.find('#containerOptional').first()
    const mEvent = {
      target: { scrollWidth: 100, scrollLeft: 50, clientWidth: 100 },
    }
    // the first element is myCustomRef
    container.simulate('mouseenter')
    container.simulate('scroll', mEvent)
  })
  expect(spy).not.toHaveBeenCalled()
})
