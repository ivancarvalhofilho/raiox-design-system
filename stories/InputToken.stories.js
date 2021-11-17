import React, {useState} from 'react'
import {InputToken} from "../src/components/InputToken";
import {Tokens} from "../src";

export default {
  title: 'Components/InputToken',
  component: InputToken,
}

const Template = args => {
  const [tokenTyped, setTokenTyped] = useState('')
  return (<>
    <InputToken {...args} onUpdateValue={setTokenTyped} customColor={Tokens.coreColors}/>
    <span><br/>Token digitado: {tokenTyped}</span>
  </>)
}

export const Default = Template.bind({})
Default.args = {
  disabled: false,
  numberOfInputs: 4,
  onlyNumbers: false,
}

Default.argTypes = {
  tokenType: {
    control: {
      type: 'select',
      options: [
        'default',
        'password'
      ],
    },
  },
}