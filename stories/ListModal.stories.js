import React, {useState} from 'react'
import ListModal from "../src/components/ListModal";

export default {
  title: 'Components/ListModal',
  component: ListModal,
}

const Template = args => {
  const [activeItem, setActiveItem] = useState(args.activeItemIndex)
  return (
    <div>
      <ListModal {...args} activeItem={activeItem} setActiveItem={setActiveItem} onOutsideClick={() => alert('Clicks para fora dele, escondem o componente')}/>
      <span style={{marginTop: '20px', display: 'block'}}>(obs: existe uma animação ao abrir, mas não é possível visualiza-la no storybook)</span>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  activeItemIndex: 0,
  itemsList: [
    {id: 1, title: 'Estab1', subtitle:'cnpj1'},
    {id: 2, title: 'Estab2', subtitle:'cnpj2'},
    {id: 3, title: 'Estab3', subtitle:'cnpj3'},
    {id: 4, title: 'Estab4', subtitle:'cnpj4'},
    {id: 5, title: 'Estab5', subtitle:'cnpj5'},
    {id: 6, title: 'Estab6', subtitle:'cnpj6'},
  ],
  disabled: false,
  hasAddButton: true,
  opened: true,
  onclick: () => alert("Ação para redirecionar para outra página"),
}

