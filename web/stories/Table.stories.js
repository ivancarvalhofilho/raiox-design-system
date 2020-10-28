import React from 'react'
import Table from '../src/components/Table'
import { useState } from '@storybook/addons'

export default {
  title: 'Example/Table',
  component: Table,
}

const Template = (args) => {
  const [index, setIndex] = useState(null)
  return (
    <Table
      {...args}
      indexRowOpened={index}
      onRowClick={(indexRow) => {
        if (index === indexRow) {
          setIndex(null)
        } else {
          setIndex(indexRow)
        }
      }}
    />
  )
}

export const Default = Template.bind({})

Default.args = {
  data: {
    "colors": {
      "values": ["#7BD6FB", "#7BD6FB", "#F8979A", "#7BD6FB"]},
    "data": {
      "title": "Data",
      "values": ["01 Abr 2020", "01 Abr 2020", "01 Abr 2020", "01 Abr 2020"],
      "params": [""],
      "justify": "left",
      "ordenable": true
    },
    "nomeAdquirente": {
      "title": "Maquininha",
      "values": ["Cielo", "Cielo", "GetNet", "Cielo"],
      "justify": "left",
      "ordenable": true,
      "params": ["data", "nomeBandeira", "modalidade"]
    },
    "nomeEstabelecimento": {
      "title": "Estabelecimento",
      "values": ["TONILU CAFÉ  ", "TONILU CAFÉ  ", "71363", "TONILU CAFÉ  "],
      "justify": "left",
      "ordenable": true
    },
    "contaCorrente": {
      "title": "Conta",
      "values": ["Ag. 65 c/c 00000130034723", "Ag. 8052 c/c 00000000147728", "Ag. 8052 c/c 147728", "Ag. 8052 c/c 00000000147728"],
      "justify": "left",
      "ordenable": true
    },
    "nomeBandeira": {
      "title": "Bandeira",
      "optional": true,
      "justify": "left",
      "values": ["Elo", "Visa", "MasterCard", "MasterCard"],
      "ordenable": true
    },
    "nomeModalidade": {
      "title": "Modalidade",
      "values": ["Débito", "Débito", "Débito", "Débito"],
      "justify": "left",
      "ordenable": true
    },
    "nomeCategoriaRecebimento": {
      "title": "Lançamentos",
      "values": ["Vendas", "Vendas", "Vendas", "Vendas"],
      "justify": "left",
      "ordenable": true
    },
    "valor": {
      "title": "Valor Líquido (R$)",
      "values": [395.65, 635.69, 78.95, 1431.08],
      "justify": "right",
      "ordenable": true
    }
  },
  indexRowOpened: 0,
  order: 'ASC',
  orderBy: 'data',
  isMultiple: true,
  height: 'calc(100vh - 140px - 100px - 65px);',
  total: 3637,
  children: (
    <Table
      height="200px"
      data={{
        data: {
          title: 'Data',
          values: [
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
            '14 Set 2020',
          ],
          params: [''],
          justify: 'left',
          ordenable: true,
          template: (value, params) => value || null,
        },
        nomeEstabelecimento: {
          title: 'Estabelecimentos',
          values: [
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
            'TONILU CAFÉ  ',
          ],
          justify: 'left',
          ordenable: true,
          template: (value, params) => value || null,
        },
      }}
    >
      Teste
    </Table>
  ),
}
