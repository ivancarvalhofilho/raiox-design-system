import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Calendar from '../components/Calendar/Calendar'
import theme from '../../../tokens/js'
import { ThemeProvider } from 'styled-components'
import CalendarConst from '../components/Calendar/const'
import 'jest-styled-components'
import { mountWithTheme } from '../utils/testUtil'
import Tabs from '../components/Tabs'

it('should render', () => {
  const spy = jest.spyOn(global.console, 'error')
  let props = {
    tabs: ['Categorias', 'Maquininhas', 'Banco'],
    tabActive: 0,
  }

  const app = mountWithTheme(
    <Tabs
      {...props}
      onTabClick={index => {
        props = { ...props, tabActive: index }
      }}
    />,
  )
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})

it('should render with second tab', () => {
  const spy = jest.spyOn(global.console, 'error')
  let props = {
    tabs: ['Categorias', 'Maquininhas', 'Banco'],
    tabActive: 1,
  }

  const app = mountWithTheme(
    <Tabs
      {...props}
      onTabClick={index => {
        props = { ...props, tabActive: index }
      }}
    />,
  )
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})

it('should change tab', () => {
  const spy = jest.spyOn(global.console, 'error')
  const mockClick = jest.fn()
  let props = {
    tabs: ['Categorias', 'Maquininhas', 'Banco'],
    tabActive: 0,
  }

  const tabs = mountWithTheme(
    <Tabs
      {...props}
      onTabClick={index => {
        props = { ...props, tabActive: index }
        mockClick()
      }}
    />,
  )

  const tab1 = tabs.find('#tab1')
  tab1.first().simulate('click')
  tabs.setProps(props)
  expect(mockClick).toHaveBeenCalled()
  expect(tabs.props().tabActive).toBe(1)
  expect(spy).not.toHaveBeenCalled()
})