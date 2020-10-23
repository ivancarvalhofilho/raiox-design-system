import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import fontStyleMaker from '../utils/FontUtil'
import TooltipLite from 'react-tooltip-lite'
import theme from '../../../tokens/js'

const TooltipContainer = styled.div``
const TooltipMessage = styled.div`
  ${(props) =>
    fontStyleMaker(
      props.theme,
      'body',
      'regular',
      'xxs',
      'neutral.light.base',
    )};
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
    <TooltipLite
      background={theme.colors.neutral.dark.base}
      content={<TooltipMessage>{props.message}</TooltipMessage>}
    >
      {props.children}
    </TooltipLite>
  ) : (
    props.children
  )
}

export default Tooltip
