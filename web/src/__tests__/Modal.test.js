import { mountWithTheme } from '../utils/testUtil'
import toJson from 'enzyme-to-json'
import React from 'react'
import { CollapseContainer, Modal } from '../components'
import PropTypes from 'prop-types'

import 'jest-styled-components'

it('should render', () => {
  const spy = jest.spyOn(global.console, 'error')
  const props = {
    closable: true,
    show: true,
    title: 'test',
  }

  const app = mountWithTheme(<Modal {...props}>TestChildren</Modal>)
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})

it('should open', () => {
  const mockClick = jest.fn()
  let props = {
    closable: true,
    show: false,
    title: 'test',
  }

  const modal = mountWithTheme(
    <Modal
      {...props}
      onClickOut={() => {
        mockClick()
        props = { ...props, show: !props.show }
      }}
    >
      TestChildren
    </Modal>,
  )
  jest.useFakeTimers()
  expect(modal).toHaveStyleRule('display', 'none')
  props = { ...props, show: true }
  modal.setProps(props)
  modal.update()
  jest.advanceTimersByTime(600)
  expect(modal).toHaveStyleRule('display', 'flex')
  modal.simulate('click')
  modal.setProps(props)
  jest.advanceTimersByTime(600)
  modal.update()
  expect(modal).toHaveStyleRule('display', 'none')
  expect(mockClick).toHaveBeenCalled()
})
