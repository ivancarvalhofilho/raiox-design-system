import React, {useState} from 'react'
import {TextDynamic} from "../src";

export default {
  title: 'Components/TextDynamic',
  component: TextDynamic,
}

const Template = args => {
    const boldIndex = args.boldIndexParam.split(",").map(a => Number(a))
    const italicIndex = args.italicIndexParam.split(",").map(a => Number(a))
  return (
      <p style={{whiteSpace: 'break-spaces', lineHeight: '21px'}}>
          <TextDynamic {...args} boldIndex={boldIndex} italicIndex={italicIndex}>{args.text}</TextDynamic>
      </p>
  )
}

export const Default = Template.bind({})
Default.args = {
    text: 'Raio-X App: Na Aba de Taxas, clicando em “Auditoria Equals” você visualiza todas as maquininhas que possui no Raio-X. Em cada meio de pagamento será mostrado se os valores auditados estão corretos ou se tem cobranças indevidas.\\n\\n\nVocê também pode verificar os detalhes de suas taxas clicando em “Ver detalhes de auditoria”. Confira informações de bandeiras, datas e o total de vendas (por dia) em que foram identificadas cobranças indevidas.\\n\\n\n',
  	boldIndexParam: "0,1,55",
  	italicIndexParam: "7, 11",
}
