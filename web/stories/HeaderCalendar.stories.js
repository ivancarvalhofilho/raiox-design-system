import React from 'react'

import HeaderCalendar from '../src/components/HeaderCalendar'
import Tokens from '../src/tokens'

export default {
  title: 'Example/HeaderCalendar',
  component: HeaderCalendar,
}

const Template = args => <HeaderCalendar {...args} />

export const Default = Template.bind({})
Default.args = {
  month: 0,
  year: 2020,
  disabledLeft: true,
  onBackMonthClick: () => alert('back'),
  onNextMonthClick: () => alert('next'),
  onMonthClick: () => alert('month'),
  values: [
    {
      label: 'Recebido',
      value: '2.502,16',
      color: Tokens.colors.feedback.success.dark,
    },
    {
      label: 'Previsto',
      value: '8.660,07',
      color: Tokens.colors.feedback.danger.dark,
    },
  ],
}
