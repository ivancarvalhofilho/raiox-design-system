import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import styled from 'styled-components'
import { Tokens } from '../tokens'
import { fontStyleMaker } from '../utils/FontUtil'

const SuspendedLabel = styled.div`
  position: absolute;
  z-index: 1;
  margin: 12px;
  padding: 4px;
  color: ${Tokens.colors.neutral.dark['01']};
  ${fontStyleMaker({
  fontFamily: 'body',
  fontWeight: 'regular',
  fontSize: 'xs',
})};
  background: inherit;
  transition: 0.25s;
  top: 0;
  pointer-events: none;
  user-select: none;
  ${(props) => props.hasText && makeLabelSuspended()}
`

function makeLabelSuspended() {
  return {
    top: '-22px',
    ...fontStyleMaker({
      fontFamily: 'body',
      fontWeight: 'regular',
      fontSize: 'xxs',
    }),
  }
}

const InputLabelStyled = styled.input`
  padding: 16px;
  box-shadow: inset 0 0 0 1px ${Tokens.colors.neutral.dark['03']};
  border: none;
  box-sizing: border-box;
  border-radius: 4px;
  background: ${Tokens.colors.neutral.light.base};
  transition: 0.25s;
  color: ${Tokens.colors.neutral.dark.base};
  ${fontStyleMaker({
  fontFamily: 'body',
  fontWeight: 'regular',
  fontSize: 'xs',
})};
  width: inherit;

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px ${Tokens.colors.brand.primary.darkest};
  }

  &:focus + div {
    ${makeLabelSuspended()};
  }

  ${(props) =>
  props.hasError &&
  `
		box-shadow: inset 0 0 0 2px ${Tokens.colors.feedback.danger.dark} !important;
	`}

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }
`
const InputLabelContainer = styled.div`
  background: ${Tokens.colors.neutral.light.base};
  ${(props) =>
  props.disabled &&
  `
    opacity:${Tokens.opacity.level.medium};
    pointer-events: none;
  `};
  position: relative;
  width: 100%;
`
const SpanError = styled.span`
  position: relative;
  display: flex;
  color: ${Tokens.colors.feedback.danger.dark};
  ${fontStyleMaker({
  fontWeight: 'regular',
  fontFamily: 'body',
  fontSize: 'xs',
})};
  margin-top: ${Tokens.spacing.inline.nano};
`
const InputLabel = (props) => {
  const inputType = props.inputType || 'text'
  return (
    <InputLabelContainer
      disabled={props.disabled}
      style={props.style}
      className={props.className}
    >
      <InputLabelStyled
        type={inputType}
        value={props.text}
        hasError={props.error}
        maxLength={props.maxLength}
        onChange={(text) => {
          props.setText(text.target.value)
        }}
        autoFocus={props.autofocus}
        name={props.label}
        id={props.label}
        onKeyDown={(event) => {
          if (!!props.submitOnEnter && event.key === 'Enter') {
            props.submitOnEnter()
          }
        }}
      />
      <SuspendedLabel hasText={!!props.text}>{props.label}</SuspendedLabel>
      {props.error && <SpanError>{props.errorLabel}</SpanError>}
    </InputLabelContainer>
  )
}

export { InputLabel }
InputLabel.propTypes = {
  state: PropTypes.string,
  text: PropTypes.string,
  setText: PropTypes.func,
  maxLength: PropTypes.number,
  submitOnEnter: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorLabel: PropTypes.string,
  inputType: PropTypes.string,
  autofocus: PropTypes.bool,
}
