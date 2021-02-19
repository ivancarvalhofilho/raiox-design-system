import React from 'react'
import SideValuePanel from '../src/components/SideValuePanel'
import { Tokens } from '../src/tokens'

export default {
  title: 'Components/SideValuePanel',
  component: SideValuePanel,
}

const Template = args => (
  <SideValuePanel
    values={['1.580,20', '979,80', '650,40', 0]}
    checkValue={[true, false, false, true]}
    titles={['Valor recebido', 'Vendas', 'Antecipações', 'Ajustes']}
    subtitles={['Recebido', 'Previsto']}
    subtitlesIcons={[Tokens.icons.check, Tokens.icons.clock]}
    subtitlesColors={[
      Tokens.colors.feedback.success.dark,
      Tokens.colors.feedback.danger.dark,
    ]}
  />
)

export const Default = Template.bind({})

Default.args = {}
