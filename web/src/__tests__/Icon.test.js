import { mountWithTheme } from '../utils/testUtil'
import toJson from 'enzyme-to-json'
import React from 'react'
import Icon from '../components/Icon'
import iconsBanco from '../../../tokens/js/iconsBanco'
import iconsAdquirentes from '../../../tokens/js/iconsAdquirente'

const testIcon = (appearance, size, disabled, spin) => {
  const spy = jest.spyOn(global.console, 'error')
  const props = {
    appearance,
    path: iconsBanco['1'],
    size,
    disabled: disabled ? 1 : 0,
    spin: spin ? 1 : 0,
  }

  const app = mountWithTheme(<Icon {...props} />)
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
}

it('should render icon banco', () => {
  testIcon()
  testIcon('default', 'md')
  testIcon('primary', 'md')
  testIcon('light', 'md')
  testIcon('danger', 'md')
  testIcon('info', 'md')
  testIcon('warning', 'md')
  testIcon('success', 'md')
  testIcon('dark', 'md')
  testIcon('default-disabled', 'md')
  testIcon('primary-disabled', 'md', false, true)
  testIcon('primary-disabled', 'md', true)
})

it('should render icon adquirente', () => {
  const spy = jest.spyOn(global.console, 'error')
  const props = {
    appearance: 'default',
    path: iconsAdquirentes.minify['1'],
    size: 'md',
    disabled: 0,
    spin: 0,
  }

  const app = mountWithTheme(<Icon {...props} />)
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})
