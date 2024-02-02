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
  margin-bottom: 8px;
  margin-top: 8px;
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
        onClick={() => props.onClick()}
        style={props.style}
        className={props.className}
    >
        <Title>{props.title}</Title>
        {props.arrowIcon &&
        <Icon path={Tokens.icons["single-arrow-right"]} size='md'/>
        }
        {(!props.arrowIcon && props.rightIcon) && (props.rightIcon)}
    </CardSelectorSimpleStyle>
)

CardSelectorSimple.defaultProps = {
  arrowIcon: true,
}

CardSelectorSimple.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  title: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  style: PropTypes.any,
  className: PropTypes.any,
  arrowIcon: PropTypes.bool,
  rightIcon: PropTypes.element,
}

export {CardSelectorSimple}