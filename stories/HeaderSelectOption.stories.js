import React, {useState} from 'react'
import HeaderSelectOption from "../src/components/HeaderSelectOption";
import {Tokens} from "../src/tokens";

export default {
  title: 'Components/HeaderSelectOption',
  component: HeaderSelectOption,
}

const Template = args => {
  const [opened, setOpened] = useState(args.opened)

  return (<div style={{background: Tokens.colors.brand.secondary.dark, width: '300px', padding: Tokens.spacing.inset.nano}}>
    <HeaderSelectOption {...args} opened={opened} setOpened={() => setOpened(!opened)}/>
  </div>)
}

export const Default = Template.bind({})
Default.args = {
  label: 'Conta',
  value: 'Demo Stone 12.839.955/0001-16',
  opened: false,
  disabled: false,
}
