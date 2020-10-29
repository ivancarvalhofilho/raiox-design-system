import PropTypes from 'prop-types'
import React from 'react'
import SVGInline from 'react-svg-inline'
import theme from '../../../tokens/js'
import styled from 'styled-components'

const IconContainer = styled.span`
  height: fit-content;
  cursor: ${(props) => props.onClick && 'pointer'};
  display: flex;
`
const Svg = styled(SVGInline)`
  transition-duration: 0.2s;
  -webkit-animation: ${(props) => props.spin && 'spin 2s infinite linear'};
  transition-property: transform;
  transform: rotate(-${(props) => props.rotate}deg);
`
const Icon = (props) => {
  function getIconSvgColor(props) {
    switch (props.appearance) {
      case 'default':
        return theme.colors.neutral.dark['02']
      case 'primary':
        return theme.colors.brand.primary.darkest
      case 'light':
        return theme.colors.neutral.light.base
      case 'danger':
        return theme.colors.feedback.danger.dark
      case 'info':
        return theme.colors.feedback.info.dark
      case 'warning':
        return theme.colors.feedback.warning.dark
      case 'success':
        return theme.colors.feedback.success.dark
      case 'dark':
        return theme.colors.neutral.dark.base
      case 'default-disabled':
        return theme.colors.neutral.dark['02']
      case 'primary-disabled':
        return theme.colors.brand.primary.darkest
      default:
        return props.appearance || theme.colors.neutral.dark['02']
    }
  }

  function getIconSvgSize(props) {
    if (
      props.size &&
      !Object.keys(theme.styles.icon.size).includes(props.size)
    ) {
      return props.size
    }
    return theme.styles.icon.size[props.size] || theme.styles.icon.size.sm
  }

  return (
    <IconContainer onClick={props.onClick}>
      <Svg
        rotate={props.rotate}
        spin={props.spin}
        className={props.className}
        style={{ ...props.style, display: 'flex' }}
        svg={props.path ? props.path : theme.icons[props.name]}
        fill={getIconSvgColor(props)}
        width={getIconSvgSize(props)}
      />
    </IconContainer>
  )
}
export default Icon

Icon.propTypes = {
  appearance: PropTypes.string,
  name: PropTypes.string,
  path: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
}
