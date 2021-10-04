import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {Tokens} from '../tokens'
import {fontStyleMaker} from '../utils'
import {Icon} from "./Icon";


const CardSelectorSimpleStyle = styled.div`
  transition: 0.15s;
  background: ${Tokens.colors.neutral.light.base};
  box-shadow: 0 0 0 1px ${Tokens.colors.neutral.dark["03"]};
  border-radius: ${Tokens.border.radius.sm};
  user-select: none;
  cursor: pointer;

  pointer-events: ${props => props.disabled && 'none'};
  opacity: ${props => props.disabled && Tokens.opacity.level.medium};
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.span`
  ${fontStyleMaker({
    fontFamily: "body",
    fontWeight: "regular",
    fontSize:"xs"
})};
  color: ${Tokens.colors.brand.secondary.dark};
`
const CardSelectorSimple = props => (
    <CardSelectorSimpleStyle
        disabled={props.disabled}
        selected={props.selected}
        onClick={() => props.setSelected()}
        style={props.style}
        className={props.className}
    >
        <Title>{props.title}</Title>
        <Icon path={Tokens.icons["single-arrow-right"]} size={'16px'}/>
    </CardSelectorSimpleStyle>
)

export {CardSelectorSimple}
CardSelectorSimple.propTypes = {
    selected: PropTypes.bool,
    setSelected: PropTypes.func,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.any,
    style: PropTypes.any,
    className: PropTypes.any,
}
