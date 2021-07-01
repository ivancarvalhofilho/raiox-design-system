import React from 'react'
import {Loading} from "../src";

export default {
  title: 'Components/Loading',
  component: Loading,
}

const Template = args => {
  return (
    <div style={{height: '300px', width: '300px'}}>
      <Loading {...args}/>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
