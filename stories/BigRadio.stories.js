import React, {useState} from 'react'
import BigRadio from "../src/components/BigRadio";

export default {
  title: 'Components/BigRadio',
  component: BigRadio,
}

const Template = args => {
  const [active, setActive] = useState(args.active)

  return (<BigRadio {...args} active={active} setActive={() => setActive(!active)}/>)
}

export const Default = Template.bind({})
Default.args = {
  active: false,
  disabled: false,
}
