import PropTypes from 'prop-types'
import React from 'react'
import SVGInline from 'react-svg-inline'
import { Tokens } from '../tokens'
import styled from 'styled-components'

const Svg = styled(SVGInline)`
  display: inline-flex;
  transition-duration: 0.2s;
  cursor: ${props => props.onClick && !props.disabled && 'pointer'};
  -webkit-animation: ${props => props.spin && 'spin 2s infinite linear'};
  transition-property: transform;
  transform: rotate(-${props => props.rotate}deg);
`
const Icon = props => {
  function getIconSvgColor(props) {
    switch (props.appearance) {
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
      case 'primary-disabled':
        return Tokens.colors.brand.primary.darkest
      default:
        return props.appearance || Tokens.colors.neutral.dark['02']
    }
  }

  function getIconSvgSize(props) {
    if (
      props.size &&
      !Object.keys(Tokens.iconSize).includes(props.size)
    ) {
      return props.size
    }
    return Tokens.iconSize[props.size] || Tokens.iconSize.sm
  }

  return (
    <Svg
      {...props}
      onClick={props.onClick}
      rotate={props.rotate}
      spin={props.spin}
      className={props.className}
      style={{ ...props.style }}
      svg={props.path ? props.path : Tokens.icons[props.name]}
      fill={getIconSvgColor(props)}
      width={getIconSvgSize(props)}
    />
  )
}
export default Icon

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
