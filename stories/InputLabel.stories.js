import React, {useState} from 'react'

import {InputLabel} from '../src'
import {Tokens} from "../src/tokens";
import {appearencesList} from "../src/components/Icon";

export default {
  title: 'Components/InputLabel',
  component: InputLabel,
}

const Template = args => {
  const [text, setText] = useState('')

  return (<div style={{width: 300}}><InputLabel {...args} text={text} setText={setText}/></div>)
}

export const Default = Template.bind({})
Default.argTypes = {
  inputType: {
    control: {
      type: 'select',
      options: [
        'text',
        'password'
      ],
    },
  },
}
Default.args = {
  label: 'Label do Input',
  error: false,
  errorLabel: 'Mensagem de erro',
  disabled: false,
}
