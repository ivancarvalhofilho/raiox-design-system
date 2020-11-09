import {mountWithTheme} from '../utils/testUtil'
import toJson from 'enzyme-to-json'
import React from 'react'
import Icon from '../components/Icon'
import iconsBanco from '../../../tokens/js/iconsBanco'
import iconsAdquirentes from "../../../tokens/js/iconsAdquirente";

it('should render icon banco', () => {
  const spy = jest.spyOn(global.console, 'error')
  const props = {
    appearance: 'default',
    path: iconsBanco['1'],
    size: 'md',
  }

  const app = mountWithTheme(<Icon {...props} />)
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})

it('should render icon adquirente', () => {
  const spy = jest.spyOn(global.console, 'error')
  const props = {
    appearance: 'default',
    path: iconsAdquirentes.minify['1'],
    size: 'md',
  }

  const app = mountWithTheme(<Icon {...props} />)
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})
