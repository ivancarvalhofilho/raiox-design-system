import React, {useState} from 'react'
import {IconText} from "../src";
import {Tokens} from "../src/tokens";
import {appearencesList} from "../src/components/Icon";

export default {
  title: 'Components/IconText',
  component: IconText,
}

const Template = args => {
  const [active, setActive] = useState(args.active)
  const selectedIcon = args.iconSelector || 'applications'
  const appearence = args.appearance || 'light'

  return (
    <div style={{...(appearence === 'light' ? {background: Tokens.colors.brand.secondary.dark} : {}), width: '200px', padding: Tokens.spacing.inset.nano}}>
      <IconText {...args} active={active} setActive={() => setActive(!active)} icon={Tokens.icons[selectedIcon]}/>
    </div>
    )
}

export const Default = Template.bind({})
Default.argTypes = {
  iconSelector: {
    control: {
      type: 'select',
      options: [
        ...Object.keys(Tokens.icons)
      ],
    },
  },
  appearance: {
    control: {
      type: 'select',
      options: appearencesList,
    },
  },
  iconSize: {
    control: {
      type: 'select',
      options: [
        ...Object.keys(Tokens.iconSize)
      ],
    },
  },
}
Default.args = {
  label: 'Produtos',
  disabled: false,
}
