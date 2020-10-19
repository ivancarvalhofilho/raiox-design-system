import React from 'react'
import SideValuePanel from '../components/SideValuePanel'
import theme from '../../tokens/js'

export default {
  title: 'Example/SideValuePanel',
  component: SideValuePanel,
}

const Template = (args) => (
  // const style = fontStyleMaker(theme, 'body', 'regular', 'xs', [
  //   'neutral',
  //   'dark',
  //   'base',
  // ])
  // console.log(style)
  <SideValuePanel
    values={['1.580,20', '979,80', '650,40', '- 50,00']}
    checkValue={[true, false, false, true]}
    titles={['Valor recebido', 'Vendas', 'Antecipações', 'Ajustes']}
    subtitles={['Recebido', 'Previsto']}
    subtitlesIcons={[theme.icons.check, theme.icons.clock]}
    subtitlesColors={[
      theme.colors.feedback.success.dark,
      theme.colors.feedback.danger.dark,
    ]}
  />
)

export const Default = Template.bind({})

Default.args = {}
