import PropTypes from 'prop-types'
import React from 'react'
import SVGInline from 'react-svg-inline'
import { Tokens } from '../tokens'
import styled from 'styled-components'

const Svg = styled(SVGInline)`
  display: inline-flex;
  transition-duration: 0.2s;
  cursor: ${props => props.onClick && !props.disabled && 'pointer'};
  ${props => !!props.fill && `color: ${props.fill}`};
  -webkit-animation: ${props => props.spin && 'spin 2s infinite linear'};
  transition-property: transform;
  transform: rotate(-${props => props.rotate}deg);
`
export function getIconSvgColor(appearance) {
  switch (appearance) {
    case 'default':
      return Tokens.colors.neutral.dark['02']
    case 'primary':
      return Tokens.colors.brand.primary.darkest
    case 'light':
      return Tokens.colors.neutral.light.base
    case 'danger':
      return Tokens.colors.feedback.danger.dark
    case 'info':
      return Tokens.colors.feedback.info.dark
    case 'warning':
      return Tokens.colors.feedback.warning.dark
    case 'success':
      return Tokens.colors.feedback.success.dark
    case 'dark':
      return Tokens.colors.neutral.dark.base
    case 'default-disabled':
      return Tokens.colors.neutral.dark['02']
    default:
      return appearance || Tokens.colors.neutral.dark['02']
  }
}

export function getIconSvgSize(size) {
  if (
    size &&
    !Object.keys(Tokens.iconSize).includes(size)
  ) {
    return size
  }
  return Tokens.iconSize[size] || Tokens.iconSize.sm
}

export const appearencesList = [
  'default',
  'light',
  'primary',
  'danger',
  'info',
  'warning',
  'success',
  'dark',
  'default-disabled'
]

const Icon = props => {

  return (
    <Svg
      {...props}
      onClick={props.onClick}
      rotate={props.rotate}
      spin={props.spin}
      className={props.className}
      style={{ ...props.style }}
      svg={props.path ? props.path : Tokens.icons[props.name]}
      fill={getIconSvgColor(props.appearance)}
      width={getIconSvgSize(props.size)}
    />
  )
}
export { Icon }
Icon.propTypes = {
  appearance: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  path: PropTypes.string,
  rotate: PropTypes.number,
  size: PropTypes.string,
  spin: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  style: PropTypes.object,
}
