import React, {useState} from 'react'
import {TextDynamic} from "../src";

export default {
  title: 'Components/TextDynamic',
  component: TextDynamic,
}

const Template = args => {

  return (<TextDynamic {...args}>Esse componente deixa as palavras negritas ou italicas a partir do index delas!</TextDynamic>)
}

export const Default = Template.bind({})
Default.args = {
  	boldIndex: [5, 11],
  	italicIndex: [7, 11],
}
