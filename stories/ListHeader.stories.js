import React, {useState} from 'react'
import ListHeader from "../src/components/ListHeader";

export default {
  title: 'Components/List',
  component: ListHeader,
}

const Template = args => {
  return (<ListHeader {...args}/>)
}

export const OnlyHeader = Template.bind({})
OnlyHeader.args = {
  data: ['Maquininhas', 'Valor Recebido (R$)'],
  align: ['left', 'right'],
  disabled: false,
}
