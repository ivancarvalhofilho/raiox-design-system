import React, {useState} from 'react'
import Card, {animationSpawnEnum} from "../src/components/Card";
import Button from "../src/components/Button";

export default {
  title: 'Components/Card',
  component: Card,
}

const Template = args => {
  const footerElement = args.withFooter && (
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <Button secondary text={'Botao'}/>
      <Button primary text={'Botao'}/>
    </div>
  );

  return (<Card {...args} style={{width: '400px'}} footerChildren={footerElement}>
    Conteúdo<br/>
    Conteúdo<br/>
    Conteúdo<br/>
    Conteúdo<br/>
  </Card>)
}

export const Default = Template.bind({})
Default.argTypes = {
  animationSpawn: {
    control: {
      type: 'select',
      options: [
        ...animationSpawnEnum
      ],
    },
  },
}
Default.args = {
  disabled: false,
  withFooter: true,
}
