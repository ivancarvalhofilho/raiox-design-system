import React from 'react'

import InputLabel from '../src/components/InputLabel'
import {useAddonState} from "@storybook/client-api";

export default {
  title: 'Example/InputLabel',
  component: InputLabel,
}

const Template = args => {
  const [text, setText] = useAddonState('text', '')

  return (<InputLabel {...args} text={text} setText={setText}/>)
}

export const Default = Template.bind({})
Default.args = {
  label: 'Label do Input',
  error: false,
  errorLabel: 'Mensagem de erro',
  disabled: false,
}
