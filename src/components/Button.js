import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Icon } from '..'
import { Tokens } from '../tokens'
import { fontStyleMaker } from '../utils/FontUtil'
import { camelize } from '../utils/stringUtil'

const ButtonPrimary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: ${props =>
    (props.size === 'sm' && Tokens.spacing.squish.xnano) ||
    (props.size === 'lg' && Tokens.spacing.squish.lg) ||
    (props.size === 'container' && Tokens.spacing.inset.xs)};
  ${props =>
    (props.size === 'container' && 'width: 100%;') || 'width: fit-content;'};
  background: ${props => props.tokensColors.brand.primary.darkest};
  border-radius: ${Tokens.border.radius.sm};
  color: ${props => props.tokensColors.neutral.light.base};
  cursor: pointer;
  user-select: none;
  ${fontStyleMaker({
    fontFamily: 'head',
    fontSize: 'xs',
    fontWeight: 'medium',
  })};

  pointer-events: ${props => props.disabled && 'none'};
  opacity: ${props => props.disabled && Tokens.opacity.level.medium};

  transition: 0.25s;

  &:hover {
    box-shadow: 0 0 6px -2px ${props => props.tokensColors.brand.primary.darkest};
  }

  ${props =>
    props.loading &&
    `& > span {
  	opacity: 0;
  }`}
`
const ButtonSecondary = styled(ButtonPrimary)`
  background: ${props => props.tokensColors.neutral.light.base};
  color: ${props => props.tokensColors.brand.primary.darkest};
  box-shadow: 0 0 0 1px ${props => props.tokensColors.brand.primary.darkest};
  transition: 0.25s;

  &:hover {
    background: ${props => props.tokensColors.brand.primary.darkest};
    color: ${props => props.tokensColors.neutral.light.base};
  }
`

const DangerOutline = styled(ButtonSecondary)`
  color: ${props => props.tokensColors.feedback.danger.darkest};
  box-shadow: 0 0 0 1px ${props => props.tokensColors.feedback.danger.darkest};

  &:hover {
    background: ${props => props.tokensColors.feedback.danger.darkest};
    color: ${props => props.tokensColors.neutral.light.base};
  }

  ${({ loading, tokensColors }) =>
    loading &&
    `
      &:hover > div > span {
        background: ${tokensColors.neutral.light.base};
      }
    `}
`

const ButtonSecondaryIcon = styled(ButtonPrimary)`
  background: ${props => props.tokensColors.neutral.light.base};
  color: ${props => props.tokensColors.feedback.warning.dark};
  transition: 0.25s;

  &:hover {
    color: ${props => props.tokensColors.brand.primary.darkest};
    box-shadow: none;
  }

  &:hover svg {
    fill: ${props => props.tokensColors.brand.primary.darkest};
  }
  & svg {
    transition: 0.25s;
  }
`

const ButtonDanger = styled(ButtonPrimary)`
  background: ${props => props.tokensColors.feedback.danger.darkest};
`
const LoadingBubbles = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @keyframes bubbleAnimation {
    0% {
      transform: translateY(3px);
      opacity: 1;
    }
    50% {
      transform: translateY(-3px);
      opacity: 1;
    }
    100% {
      transform: translateY(3px);
      opacity: 1;
    }
  }

  & > span {
    opacity: 0;
    background: ${props =>
      props.secondary
        ? props.tokensColors.brand.primary.darkest
        : props.dangerOutline
        ? props.tokensColors.feedback.danger.darkest
        : props.tokensColors.neutral.light.base};
    width: 5px;
    height: 5px;
    margin-right: 2px;
    border-radius: 100%;
    animation: bubbleAnimation 1s ease-in-out;
    animation-iteration-count: infinite;
  }

  & > span:nth-child(1) {
    animation-delay: 0.2s;
  }

  & > span:nth-child(2) {
    animation-delay: 0.4s;
  }

  & > span:nth-child(3) {
    animation-delay: 0.6s;
  }

  & > span:nth-child(4) {
    animation-delay: 0.8s;
  }
`
export const buttonSizes = ['sm', 'lg', 'container']

const Button = props => {
  const buttonType =
    (props.primary && ButtonPrimary) ||
    (props.secondary && ButtonSecondary) ||
    (props.danger && ButtonDanger) ||
    (props.dangerOutline && DangerOutline) ||
    (props.secondaryIcon && ButtonSecondaryIcon) ||
    ButtonPrimary

  const buttonSize = props.size || 'lg'

  const tokensColors = props.customColors || Tokens.colors

  return (
    <ButtonPrimary
      disabled={props.disabled}
      tokensColors={tokensColors}
      size={buttonSize}
      onClick={props.onClick}
      style={props.style}
      loading={props.loading}
      id={camelize(props.text)}
      as={buttonType}
      className={props.className}
    >
      {props.icon && props.icon?.position === 'before-text' && (
        <Icon
          size={props.icon.size || 24}
          path={props.icon}
          style={{ marginRight: Tokens.spacing.stack.nano }}
          appearance={props.icon?.appearance || 'warning'}
        />
      )}
      <span>{props.text}</span>
      {props.icon && props.icon?.position === 'after-text' && (
        <Icon
          size={props.icon.size || 24}
          path={props.icon}
          style={{ marginRight: Tokens.spacing.stack.nano }}
          appearance={props.icon?.appearance || 'warning'}
        />
      )}
      {props.loading && (
        <LoadingBubbles
          tokensColors={tokensColors}
          secondary={props.secondary}
          dangerOutline={props.dangerOutline}
        >
          <span />
          <span />
          <span />
          <span />
        </LoadingBubbles>
      )}
    </ButtonPrimary>
  )
}

export { Button }
Button.propTypes = {
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  danger: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.any,
  style: PropTypes.any,
  onClick: PropTypes.func,
  customColors: PropTypes.object,
  secondaryIcon: PropTypes.bool,
  icon: PropTypes.any,
  dangerOutline: PropTypes.bool,
}
