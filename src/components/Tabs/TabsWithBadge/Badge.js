import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Tokens } from '../../../tokens'

const BadgeContainer = styled.span`
  width: ${({ size }) => size + 'px'};
  height: ${({ size }) => size + 'px'};
  background-color: ${({ active }) => active ? Tokens.colors.brand.primary.dark : Tokens.colors.neutral.dark['02']};
  border-radius: 50%;
  font-size: ${Tokens.fonts.fontSize.xxs};
  color: ${({ color }) => color || Tokens.colors.neutral.light.base};
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
`

const Badge = (props) => {
  return (
    <BadgeContainer
      active={props.active}
      color={props.color}
      backgroundColor={props.backgroundColor}
      size={props.size}
    >
      {props.label}
    </BadgeContainer>
  )
}

export default Badge

Badge.defaultProps = {
  size: 22,
}

Badge.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  onClick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.object,
}