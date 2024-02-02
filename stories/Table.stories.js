import React from 'react'
import {Table} from '../src'
import {useState} from '@storybook/addons'
import {tableMock} from './mocks'

export default {
  title: 'Components/Table',
  component: Table,
}

const Template = args => {
  const [index, setIndex] = useState(null)
  return (
    <Table
      {...args}
      indexRowOpened={index}
      onRowClick={indexRow => {
        if (index === indexRow) {
          setIndex(null)
        } else {
          setIndex(indexRow)
        }
      }}
    />
  )
}

export const Default = Template.bind({})

Default.args = tableMock
