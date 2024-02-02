import React from 'react'
import { HorizontalList } from '../src/index';

export default {
    title: 'Components/HorizontalList',
    component: HorizontalList,
}

const Template = args => {
    return (<>
    <p>Lista de Estabelecimentos: </p>
    <HorizontalList list={args.list} />
    </>
        )
}

export const Default = Template.bind({})

Default.args = {
    list: [
    {
      nome: 'Empresa Hotri Fturi Hotri FturiHotri Fturi',
      cnpj: "12323132132112",
      codigoFiliacao: "324543552",
      labelsKey: [
        ['Estabelecimento:','nome'],
        ['CNPJ:', 'cnpj'],
        ['Código filiação', 'codigoFiliacao']
      ]
    },
    {
      nome: 'Empresa Moda',
      cnpj: "45723456346",
      codigoFiliacao: "4574232456",
      labelsKey: [
        ['Estabelecimento:','nome'],
        ['CNPJ:', 'cnpj'],
        ['Código filiação', 'codigoFiliacao']
      ]
    },
    {
      nome: 'Restaurante Ovo',
      cnpj: "12347373",
      codigoFiliacao: "58426536",
      labelsKey: [
        ['Estabelecimento:','nome'],
        ['CNPJ:', 'cnpj'],
        ['Código filiação', 'codigoFiliacao']
      ]
    },
    {
      nome: 'Loja Esporte',
      cnpj: "368576257",
      codigoFiliacao: "7882473",
      labelsKey: [
        ['Estabelecimento:','nome'],
        ['CNPJ:', 'cnpj'],
        ['Código filiação', 'codigoFiliacao']
      ]
    },
    {
      nome: 'Brinquedos faa',
      cnpj: "6584352723",
      codigoFiliacao: "68534",
      labelsKey: [
        ['Estabelecimento:','nome'],
        ['CNPJ:', 'cnpj'],
        ['Código filiação', 'codigoFiliacao'],
      ]
    },
    {
      nome: 'Empresa Hotri Fturi',
      cnpj: "12323132132112",
      codigoFiliacao: "324543552",
      labelsKey: [
        ['Estabelecimento:','nome'],
        ['CNPJ:', 'cnpj'],
        ['Código filiação', 'codigoFiliacao']
      ]
    },
    {
      nome: 'Empresa Moda',
      cnpj: "45723456346",
      codigoFiliacao: "4574232456",
      labelsKey: [
        ['Estabelecimento:','nome'],
        ['CNPJ:', 'cnpj'],
        ['Código filiação', 'codigoFiliacao']
      ]
    },
  ]
}
