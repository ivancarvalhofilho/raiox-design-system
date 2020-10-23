import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import fontStyleMaker from '../utils/FontUtil'

const TooltipContainer = styled.div`
  position: relative;
`
const TooltipMessage = styled.div`
  position: absolute;
  background: ${(props) => props.theme.colors.neutral.dark.base};
  padding: 8px;
  opacity: 0.8;
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
  bottom: ${(props) => props.height + 4}px;
  left: ${(props) => -props.width / 2}px;
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
const Tooltip = (props) => {
  const [show, setShow] = useState(false)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [widthTooltip, setWidthTooltip] = useState(0)
  const container = useRef()
  const tooltipRef = useRef()
  useEffect(() => {
    if (show) {
      setHeight(container.current.clientHeight)
      setWidth(tooltipRef.current.clientWidth - container.current.clientWidth)
      setWidthTooltip(tooltipRef.current.clientWidth)
    }
  }, [show])
  return props.message ? (
    <TooltipContainer
      onMouseEnter={() => {
        setShow(true)
      }}
      ref={container}
      onMouseLeave={() => {
        setShow(false)
      }}
    >
      {show && (
        <TooltipMessage height={height} width={width} ref={tooltipRef}>
          {props.message}
          <Arrow width={widthTooltip} />
        </TooltipMessage>
      )}
      {props.children}
    </TooltipContainer>
  ) : (
    props.children
  )
}

export default Tooltip
