import React from 'react'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'
import { mountWithTheme } from '../utils/testUtil'
import { TextRow } from '../components/StyledComponents'
import List from '../components/List'
import Icon from '../components/Icon'
import iconsAdquirentes from '../../../tokens/theme/iconsAdquirente'

it('should render', () => {
  const spy = jest.spyOn(global.console, 'error')
  const props = {
    header: ['Categorias', 'Valor Recebido (R$)'],
    rows: [
      [<TextRow bold>Vendas</TextRow>, <TextRow>1.079,80</TextRow>],
      [<TextRow bold>Antecipações</TextRow>, <TextRow>550,40</TextRow>],
      [<TextRow bold>Ajustes</TextRow>, <TextRow danger>- 50,00</TextRow>],
    ],
    align: ['left', 'right'],
  }

  const app = mountWithTheme(<List {...props} />)
  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})

it('should change tab', () => {
  const spy = jest.spyOn(global.console, 'error')
  const props = {
    header: ['Maquininhas', 'Valor Recebido (R$)'],
    rows: [
      [
        <TextRow bold>
          <Icon
            style={{ marginRight: '5px' }}
            size="lg"
            path={iconsAdquirentes.minify['41']}
          />{' '}
          Stone
        </TextRow>,
        <TextRow>1.080,00</TextRow>,
      ],
      [
        <TextRow bold>
          <Icon
            style={{ marginRight: '5px' }}
            size="lg"
            path={iconsAdquirentes.minify['1']}
          />{' '}
          Cielo
        </TextRow>,
        <TextRow>500,20</TextRow>,
      ],
    ],
    align: ['left', 'right'],
  }

  const app = mountWithTheme(<List {...props} />)

  expect(toJson(app)).toMatchSnapshot()
  expect(spy).not.toHaveBeenCalled()
})
