import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import fontStyleMaker from '../utils/FontUtil'

const TooltipMessage = styled.div`
  position: absolute;
  background: ${(props) => props.theme.colors.neutral.dark.base};
  padding: 8px;
  opacity: 0.8;
  text-align: center;
  ${(props) =>
    fontStyleMaker(
      props.theme,
      'body',
      'regular',
      'xxs',
      'neutral.light.base',
    )};
  min-width: 123px;
  border-radius: 4px;
  top: ${(props) => props.positionX - props.height}px;
  left: ${(props) => props.positionY - props.width / 2}px;
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

  const onMouseOver = (e) => {
    setShow(true)
    setMessage(e.target.attributes.getNamedItem(attributte).value)
    setHeight(e.target.clientHeight)
    setPositionX(e.target.offsetTop)
    setPositionY(e.target.offsetLeft)
    setWidthTooltip(tooltipRef.current.clientWidth)
    setWidth(tooltipRef.current.clientWidth - e.target.clientWidth)
  }

  const onMouseLeave = (e) => {
    setShow(false)
  }

  useEffect(() => {
    let elements = document.querySelectorAll(`[${attributte}]`)
    console.log('elements', elements)
    elements.forEach((element) => {
      element.onmouseover = onMouseOver
      element.onmouseleave = onMouseLeave
    })
    setInterval(() => {
      elements = document.querySelectorAll(`[${attributte}]`)
      console.log('elements', elements)
      document.querySelectorAll(`[${attributte}]`).forEach((element) => {
        element.onmouseover = onMouseOver
        element.onmouseleave = onMouseLeave
      })
    }, 2000)
  }, [])

  return (
    <>
      {props.children}
      {show && (
        <TooltipMessage
          ref={tooltipRef}
          height={height}
          width={width}
          positionX={positionX}
          positionY={positionY}
        >
          {message}
          <Arrow width={widthTooltip} />
        </TooltipMessage>
      )}
    </>
  )
}

export default Tooltip
