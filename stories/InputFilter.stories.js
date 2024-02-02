import React, {useState} from 'react'
import {InputFilter} from "../src/components/Inputs/InputFilter";
import {InputLabel} from "../src";

export default {
  title: 'Components/InputFilter',
  component: InputFilter,
}

const Template = args => {
  const [text, setText] = useState('')

  return (<div style={{width: 350}}><InputFilter {...args} text={text} setText={setText}/></div>)
}

export const Default = Template.bind({})
Default.args = {
  active: false,
  disabled: false,
  error:'',
  placeholder:'Qual a sua dúvida?',
}
