import { mountWithTheme } from '../utils/testUtil'
import toJson from 'enzyme-to-json'
import React from 'react'
import { SideValuePanel } from '../components'
import Tokens from '../../tokens'

it('should render', () => {
  const spy = jest.spyOn(global.console, 'error')
  const props = {
    values: ['1.580,20', '979,80', '650,40', '0'],
    checkValue: [true, false, false, true],
    titles: ['Valor recebido', 'Vendas', 'Antecipações', 'Ajustes'],
    subtitles: ['Recebido', 'Previsto'],
    subtitlesIcons: [Tokens.icons.check, Tokens.icons.clock],
    subtitlesColors: [
      Tokens.colors.feedback.success.dark,
      Tokens.colors.feedback.danger.dark,
    ],
  }

  const app = mountWithTheme(
    <SideValuePanel {...props}>TestChildren</SideValuePanel>,
  )
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})

it('should render full width', () => {
  const spy = jest.spyOn(global.console, 'error')
  const props = {
    values: ['1.580,20', '979,80', '650,40', '0'],
    checkValue: [true, false, false, true],
    titles: ['Valor recebido', 'Vendas', 'Antecipações', 'Ajustes'],
    subtitles: ['Recebido', 'Previsto'],
    subtitlesIcons: [Tokens.icons.check, Tokens.icons.clock],
    subtitlesColors: [
      Tokens.colors.feedback.success.dark,
      Tokens.colors.feedback.danger.dark,
    ],
    fullWidth: true,
  }

  const app = mountWithTheme(
    <SideValuePanel {...props}>TestChildren</SideValuePanel>,
  )
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})
