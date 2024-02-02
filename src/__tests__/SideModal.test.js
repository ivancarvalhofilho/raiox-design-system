import { mountWithTheme } from '../utils/testUtil'
import toJson from 'enzyme-to-json'
import React from 'react'
import { SideModal } from '../components'

it('should render', () => {
  const spy = jest.spyOn(global.console, 'error')
  const props = {
    closable: true,
    show: true,
    title: 'test',
  }

  const app = mountWithTheme(<SideModal {...props}>TestChildren</SideModal>)
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
    <SideModal
      {...props}
      onClickOut={() => {
        mockClick()
        props = { ...props, show: !props.show }
      }}
    >
      TestChildren
    </SideModal>,
  )
  jest.useFakeTimers()
  const sideModalContainer = modal.find('#sideModalContainer')
  sideModalContainer.first().simulate('click')
  expect(mockClick).not.toHaveBeenCalled()
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
