import React from 'react'

import List from '../src/components/List'
import { TextRow } from '../src/components/StyledComponents'
import Icon from '../src/components/Icon'
import iconsAdquirentes from '../../tokens/js/iconsAdquirente'

export default {
  title: 'Example/List',
  component: List,
}

const Template = (args) => <List {...args} />

export const Default = Template.bind({})
export const WithIcon = Template.bind({})
Default.args = {
  header: ['Categorias', 'Valor Recebido (R$)'],
  rows: [
    [<TextRow bold>Vendas</TextRow>, <TextRow>1.079,80</TextRow>],
    [<TextRow bold>Antecipações</TextRow>, <TextRow>550,40</TextRow>],
    [<TextRow bold>Ajustes</TextRow>, <TextRow danger>- 50,00</TextRow>],
  ],
  align: ['left', 'right'],
}

WithIcon.args = {
  header: ['Maquininhas', 'Valor Recebido (R$)'],
  rows: [
    [
      <TextRow bold>
        <Icon
          style={{ 'margin-right': '5px' }}
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
          style={{ 'margin-right': '5px' }}
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
