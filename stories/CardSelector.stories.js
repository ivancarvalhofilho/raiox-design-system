import React, {useState} from 'react'

import CardSelector from "../src/components/CardSelector";
import Icon from "../src/components/Icon";
import {Tokens} from "../src/tokens";

export default {
  title: 'Components/CardSelector',
  component: CardSelector,
}

const Template = (args) => {
  const [selected, setSelected] = useState(args.selected)
  const icon = Tokens.illustrations[args.icon] || Tokens.illustrations.personRadial

  return (<div style={{width: '500px'}}>
    <CardSelector {...args} icon={icon} selected={selected} setSelected={() => setSelected(!selected)}/>
  </div>)
}

export const Default = Template.bind({})
Default.argTypes = {
  icon: {
    control: {
      type: 'select',
      options: [
        'establishRadial',
        'personRadial'
      ],
    },
  },
}
Default.args = {
  selected: false,
  disabled: false,
  title: 'Adicionar um CNPJ',
  subtitle: 'Tenho um estabelecimento com CNPJ',
  description: 'Quem tem CNPJ pode adicionar todos os meios de pagamentos disponíveis no Raio-X.',
  descriptionTooltip: 'A optional tooltip',
}
