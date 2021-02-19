import React, {useState} from 'react'

import CardSelector from "../src/components/CardSelector";

export default {
  title: 'Components/CardSelector',
  component: CardSelector,
}

const Template = args => {
  const [selected, setSelected] = useState(args.selected)

  return (<div style={{width: '500px'}}>
    <CardSelector {...args} selected={selected} setSelected={() => setSelected(!selected)}/>
  </div>)
}

export const Default = Template.bind({})
Default.args = {
  selected: false,
  disabled: false,
}
