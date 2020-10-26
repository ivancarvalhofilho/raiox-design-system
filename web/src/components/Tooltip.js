import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const TooltipMessage = styled.div`
  position: absolute;
  background: ${(props) => props.theme.colors.neutral.dark.base};
  padding: 8px;
  opacity: 0.8;
  text-align: center;
  min-width: 123px;
  border-radius: 4px;
  top: ${(props) => (!props.show ? 200 : props.positionY - props.height)}px;
  left: ${(props) => props.positionX - props.width / 2}px;
`
const Arrow = styled.div`
  position: absolute;
  bottom: -3px;
  left: ${(props) => (props.width - 6) / 2}px;
  background: ${(props) => props.theme.colors.neutral.dark.base};
  transform: rotate(45deg);
  width: 6px;
  height: 6px;
`

const attributte = 'custom-tooltip'
const Tooltip = (props) => {
  const [show, setShow] = useState(false)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [widthTooltip, setWidthTooltip] = useState(0)
  const [positionX, setPositionX] = useState(0)
  const [positionY, setPositionY] = useState(0)
  const [message, setMessage] = useState('')
  const tooltipRef = useRef()

  const onMouseOver = (element, e) => {
    setMessage(element.attributes.getNamedItem(attributte).value)
    setHeight(
      element.getBoundingClientRect().height > 34
        ? element.getBoundingClientRect().height
        : 34,
    )
    setPositionX(element.getBoundingClientRect().left)
    setPositionY(element.getBoundingClientRect().top)
    setWidthTooltip(tooltipRef.current ? tooltipRef.current.clientWidth : 0)
    setWidth(
      (tooltipRef.current ? tooltipRef.current.clientWidth : 0) -
        e.target.clientWidth,
    )
    setShow(true)
  }

  const onMouseLeave = (e) => {
    setShow(false)
  }

  useEffect(() => {
    // document.querySelectorAll(`[${attributte}]`).forEach((element) => {
    //   element.onmouseover = onMouseOver.bind(this, element)
    //   element.onmouseleave = onMouseLeave.bind(this, element)
    // })
    setTimeout(() => {
      document.querySelectorAll(`[${attributte}]`).forEach((element) => {
        element.onmouseenter = onMouseOver.bind(this, element)
        element.onmouseleave = onMouseLeave.bind(this, element)
      })
    }, 2000)
  }, [])

  return (
    <>
      <TooltipMessage
        ref={tooltipRef}
        height={height}
        show={show}
        width={width}
        positionX={positionX}
        positionY={positionY}
      >
        Teste
        {/* <Arrow width={widthTooltip} /> */}
      </TooltipMessage>
    </>
  )
}

export default Tooltip
