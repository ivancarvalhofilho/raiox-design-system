import React from 'react'
import {Button, buttonSizes} from "../src/components/Button";
import {Tokens} from "../src/tokens";

export default {
  title: 'Components/Button',
  component: Button,
}

const Template = args => (<Button {...args} />)

const TemplateCore = args => (<Button {...args} customColors={Tokens.coreColors} />)

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
export const CoreButton = TemplateCore.bind({})
CoreButton.argTypes = { ...argTypes }
CoreButton.args = {...args}
Default.argTypes = { ...argTypes }
Default.args = {...args}