import React from 'react'
import styled from 'styled-components'
import fontStyleMaker from '../utils/FontUtil'
import TooltipLite from 'react-tooltip-lite'
import theme from '../../../tokens/js'

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
const Tooltip = (props) =>
  props.message ? (
    <TooltipLite
      background={theme.colors.neutral.dark.base}
      content={<TooltipMessage>{props.message}</TooltipMessage>}
    >
      {props.children}
    </TooltipLite>
  ) : (
    props.children
  )

export default Tooltip
