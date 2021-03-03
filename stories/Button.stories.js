import React, {useState} from 'react'
import Button, {buttonSizes} from "../src/components/Button";

export default {
  title: 'Components/Button',
  component: Button,
}

const Template = args => (<Button {...args} />)

let argTypes = {
  size: {
    control: {
      type: 'select',
      options: [
        ...buttonSizes
      ],
    },
  }
};
let args = {
  disabled: false,
  loading: false,
  text: 'Adicionar',
};

export const Default = Template.bind({})
Default.argTypes = { ...argTypes }
Default.args = {...args}