import React, {useState} from 'react'
import {BigRadio} from "../src/components/BigRadio";
import {Tokens} from "../src";

export default {
  title: 'Components/BigRadio',
  component: BigRadio,
}

const Template = args => {
  const [active, setActive] = useState(args.active)

  return (<BigRadio {...args} active={active} setActive={() => setActive(!active)}/>)
}

const TemplateCore = args => {
  const [active, setActive] = useState(args.active)

  return (<BigRadio {...args} active={active} setActive={() => setActive(!active)} customColors={Tokens.coreColors}/>)
}

export const Default = Template.bind({})
export const Core = TemplateCore.bind({})
Default.args = {
  active: false,
  disabled: false,
}

Core.args = {
  active: false,
  disabled: false,
}
