import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import fontStyleMaker from '../utils/FontUtil'

const TooltipMessage = styled.div`
  position: absolute;
  background: ${(props) => props.theme.colors.neutral.dark.base};
  padding: 8px;
  opacity: 0.8;
  display: ${(props) => !props.show && 'none'};
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
  top: ${(props) => props.positionY}px;
  left: ${(props) => props.positionX - props.width}px;
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
    setHeight(element.getBoundingClientRect().height + 25)
    setPositionX(element.getBoundingClientRect().left)
    setShow(true)
    setPositionY(
      element.getBoundingClientRect().top -
        (tooltipRef.current ? tooltipRef.current.clientHeight : 50) -
        10,
    )
    setWidthTooltip(
      tooltipRef.current && tooltipRef.current.clientWidth > 0
        ? tooltipRef.current.clientWidth
        : 123,
    )
    setWidth(
      (tooltipRef.current && tooltipRef.current.clientWidth > 0
        ? tooltipRef.current.clientWidth / 2
        : 62) -
        element.clientWidth / 2 +
        3,
    )
  }

  const onMouseLeave = (e) => {
    setShow(false)
  }

  useEffect(() => {
    document.querySelectorAll(`[${attributte}]`).forEach((element) => {
      element.onmouseover = onMouseOver.bind(this, element)
      element.onmouseleave = onMouseLeave.bind(this, element)
    })
    setTimeout(() => {
      document.querySelectorAll(`[${attributte}]`).forEach((element) => {
        element.onmouseover = onMouseOver.bind(this, element)
        element.onmouseleave = onMouseLeave.bind(this, element)
      })
    }, 5000)
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
        {message}
        <Arrow width={widthTooltip} />
      </TooltipMessage>
    </>
  )
}

export default Tooltip
