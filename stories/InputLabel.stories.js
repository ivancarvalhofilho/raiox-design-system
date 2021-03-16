import React, {useState} from 'react'

import {InputLabel} from '../src'

export default {
  title: 'Components/InputLabel',
  component: InputLabel,
}

const Template = args => {
  const [text, setText] = useState('')

  return (<InputLabel {...args} text={text} setText={setText}/>)
}

export const Default = Template.bind({})
Default.args = {
  label: 'Label do Input',
  error: false,
  errorLabel: 'Mensagem de erro',
  disabled: false,
}
