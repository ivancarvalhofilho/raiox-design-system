import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ListContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  overflow-x: hidden;
  font-family: inherit;
`
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0;
  max-width: 100%;
  grid-auto-flow: column;
  padding-bottom: ${({ scroll }) => scroll ? '16px' : 0};
  overflow-x: auto;

  &::-webkit-scrollbar-track{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #edeaea;
  }

  &::-webkit-scrollbar-track-piece{
	-webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.13);
    background-color: #F2F2F2;
  }
  &::-webkit-scrollbar{
    height: 14px;
    background-color: #F2F2F2;
  }
  &::-webkit-scrollbar-thumb{
    border-radius: 4px;
    -webkit-box-shadow: 
      inset 0px 3.5px 0px #F2F2F2,
      inset 0px -3.5px 0px #F2F2F2;
    background-color: rgba(64, 185, 187, 0.4);
  }

  &.active {
    background: rgba(255,255,255,0.3);
    cursor: grabbing;
    cursor: -webkit-grabbing;
    transform: scale(1.02);
  }
`
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  width: calc(160px + 96px);
  padding: 2px 48px 12px;
  border-left: 1px solid #E0E0E0;
  box-sizing: border-box;

  &:first-child {
    border-left: none;
    padding-left: 0;
    width: calc(160px + (96px*.5));
  }
`
const Title = styled.p`
  margin: 0;
  color: #595A5C;
  font-size: 13px;
  font-weight: 400;
  line-height: 11px; /* 84.615% */
  letter-spacing: 0.6px;
  margin-bottom: 4px;
`
const Value = styled.p`
  margin: 0;
  color: #303133;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  max-width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 8px;
`

/**
 * @typedef {[string,string]} LabelsKey - Array contento na primeira posição a label(título) a ser exibida e segunda posição a chave do objeto com valor
 * @template T
 * @typedef {{
 *  [Property in keyof T]: string | LabelsKey[];
 * } & {labelsKey: LabelsKey[];}} List - Objeto com valores a serem exibidos e seu array de labelsKey
 * @param {{list: List[] | any[]}} props 
 * @example <HorizontalList list={[{
 *    nome: 'Horti Fruti',
      cnpj: "12323132132112",
      codigoFiliacao: "324543552",
      labelsKey: [['Estabelecimento:','nome'],
        ['CNPJ:', 'cnpj'],
        ['Código filiação', 'codigoFiliacao']],
 * }]} />
 * @returns {React.JSX.Element}
 */
const HorizontalList = (props) => {
  const slider = React.useRef(null)
  let isDown = false
  let startX
  let scrollLeft

  const onMouseDown = (e) => {
    isDown = true
    slider.current && slider.current.classList.add('active')
    startX = slider.current && (e.pageX - slider.current.offsetLeft)
    scrollLeft = slider.current && slider.current.scrollLeft
  }

  const onMouseUp = () => {
    isDown = false
    slider.current && slider.current.classList.remove('active')
  }

  const onMouseMove = (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = slider.current && (e.pageX - slider.current.offsetLeft)
    const walk = x && (x - startX) * 1.6
    if (slider.current && walk)
      slider.current.scrollLeft = scrollLeft - walk
  }

  const onMouseLeave = () => {
    isDown = false
    slider.current && slider.current.classList.remove('active')
  }

  return (
    <ListContainer>
      <List
        ref={slider}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        scroll={props.list.length >= 4}
      >
        {
          props.list.map((item, index) => (
            <ListItem key={`estab${index}`}>
              {item.labelsKey.map((key, i) => (
                <div key={`labels${i}`}>
                  <Title>{key[0]}</Title>
                  <Value>{item[key[1]]}</Value>
                </div>
              ))}
            </ListItem>
          ))
        }

      </List>
    </ListContainer>
  )
}

HorizontalList.propTypes = {
  list: PropTypes.array,
}

export { HorizontalList }