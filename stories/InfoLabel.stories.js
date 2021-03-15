import React, {useState} from 'react'
import {InfoLabel} from "../src";

export default {
  title: 'Components/InfoLabel',
  component: InfoLabel,
}

const Template = args => {
  return (<InfoLabel {...args} />)
}

export const Default = Template.bind({})
Default.args = {
  disabled: false,
  text: "Sample Text",
  onClick: () => alert("click"),
}
