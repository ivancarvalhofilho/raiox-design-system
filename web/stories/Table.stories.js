import React from 'react'
import Table from '../components/Table'
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
    colors: {
      values: ['red', 'blue'],
    },
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
    nomeBandeira: {
      title: 'Bandeira',
      values: [
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
        'Visa',
      ],
      justify: 'left',
      ordenable: true,
      template: (value, params) => value || null,
    },
    modalidade: {
      title: 'Modalidade',
      values: [
        'Crédito à vista',
        'Crédito à vista',
        'Débito',
        'Débito',
        'Débito',
        'Débito',
        'Crédito à vista',
        'Crédito à vista',
        'Crédito à vista',
        'Débito',
        'Débito',
        'Débito',
        'Débito',
        'Débito',
        'Débito',
        'Débito',
        'Débito',
        'Débito',
        'Crédito à vista',
        'Crédito à vista',
        'Débito',
        'Débito',
        'Débito',
        'Débito',
        'Crédito à vista',
        'Crédito à vista',
        'Crédito à vista',
        'Crédito à vista',
        'Crédito à vista',
        'Débito',
      ],
      justify: 'left',
      ordenable: true,
      template: (value, params) => value || null,
    },
    horaMinuto: {
      title: 'Hora',
      optional: true,
      values: [
        '07:27',
        '08:40',
        '09:42',
        '09:54',
        '09:54',
        '10:41',
        '11:16',
        '11:47',
        '11:49',
        '11:57',
        '12:08',
        '12:22',
        '12:25',
        '12:26',
        '12:29',
        '12:40',
        '12:45',
        '12:45',
        '12:46',
        '12:49',
        '12:50',
        '13:03',
        '13:08',
        '13:11',
        '13:18',
        '13:21',
        '13:30',
        '13:45',
        '13:52',
        '13:52',
      ],
      ordenable: true,
      template: (value, params) => value || null,
    },
    valor: {
      title: 'Valor bruto (R$)',
      values: [
        8.5,
        13,
        25.85,
        20.5,
        4,
        18,
        24,
        44,
        24,
        40,
        9,
        12,
        26,
        46.5,
        22,
        24,
        25,
        24,
        27.5,
        118,
        58.3,
        1196.15,
        36.7,
        29,
        25,
        26,
        24,
        6,
        12.3,
        6.35,
      ],
      justify: 'right',
      ordenable: true,
      template: (value, params) => value || null,
    },
    taxaContratada: {
      title: 'Taxa cadastrada (%)',
      values: [
        2.5,
        2.5,
        1.5,
        1.5,
        1.5,
        1.5,
        2.5,
        2.5,
        2.5,
        1.5,
        1.5,
        1.5,
        1.5,
        1.5,
        1.5,
        1.5,
        1.5,
        1.5,
        2.5,
        2.5,
        1.5,
        1.5,
        1.5,
        1.5,
        2.5,
        2.5,
        2.5,
        2.5,
        2.5,
        1.5,
      ],
      ordenable: true,
      params: ['data', 'nomeBandeira', 'modalidade'],
      template: (value, params) => value || null,
    },
    icon: {
      title: '',
      values: [
        1.69,
        1.69,
        0.9,
        0.9,
        0.9,
        0.9,
        1.69,
        1.69,
        1.69,
        0.9,
        0.9,
        0.9,
        0.9,
        0.9,
        0.9,
        0.9,
        0.9,
        0.9,
        1.69,
        1.69,
        0.9,
        0.9,
        0.9,
        0.9,
        1.69,
        1.69,
        1.69,
        1.69,
        1.69,
        0.9,
      ],
      params: ['taxaContratada', 'taxaPraticada'],
      template: (value, params) => value || null,
    },
    taxaPraticada: {
      title: 'Taxa cobrada (%)',
      values: [
        1.69,
        1.69,
        0.9,
        0.9,
        0.9,
        0.9,
        1.69,
        1.69,
        1.69,
        0.9,
        0.9,
        0.9,
        0.9,
        0.9,
        0.9,
        0.9,
        0.9,
        0.9,
        1.69,
        1.69,
        0.9,
        0.9,
        0.9,
        0.9,
        1.69,
        1.69,
        1.69,
        1.69,
        1.69,
        0.9,
      ],
      params: ['taxaContratada'],
      ordenable: true,
      template: (value, params) => value || null,
    },
    diferenca: {
      title: 'Diferença (R$)',
      values: [
        0.07,
        0.11,
        0.16,
        0.13,
        0.02,
        0.11,
        0.19,
        0.36,
        0.19,
        0.24,
        0.06,
        0.07,
        0.16,
        0.28,
        0.13,
        0.14,
        0.15,
        0.14,
        0.23,
        0.96,
        0.35,
        7.17,
        0.22,
        0.18,
        0.21,
        0.21,
        0.19,
        0.05,
        0.1,
        0.04,
      ],
      justify: 'right',
      ordenable: true,
      params: ['taxaContratada', 'taxaPraticada'],
      template: (value, params) => value || null,
    },
  },
  indexRowOpened: 0,
  order: 'ASC',
  orderBy: 'data',
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
