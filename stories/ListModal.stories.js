import React, {useState} from 'react'
import {ListModal} from "../src";
import {handleOutsideDivClick} from "../src/utils";

export default {
  title: 'Components/ListModal',
  component: ListModal,
}

const Template = args => {
  const [activeItem, setActiveItem] = useState(args.activeItem)
  const [opened, setOpened] = useState(args.opened)

  const wrapperRef = handleOutsideDivClick(
    () => !!opened && setOpened(false),
  )

  return (
    <div ref={wrapperRef} style={{display: 'inline-block'}}>
      <span onClick={(e) => {setOpened(!opened)}}> Click para abrir/fechar </span>
      <ListModal {...args} opened={opened} activeItem={activeItem} setActiveItem={setActiveItem} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  activeItem: 0,
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
  isLoadingList: false,
  hasAllItemsButton: true,
  onclick: () => alert("Ação para redirecionar para outra página"),
}

