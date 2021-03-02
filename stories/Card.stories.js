import React, {useState} from 'react'
import Card, {animationSpawnEnum} from "../src/components/Card";

export default {
  title: 'Components/Card',
  component: Card,
}

const Template = args => {
  debugger
  return (<Card {...args} style={{width: '300px'}} > Conteúdo </Card>)
}

export const Default = Template.bind({})
Default.argTypes = {
  animationSpawn: {
    control: {
      type: 'select',
      options: [
        ...animationSpawnEnum
      ],
    },
  },
}
Default.args = {
  disabled: false,
}
