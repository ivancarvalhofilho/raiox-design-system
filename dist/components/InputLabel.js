import PropTypes from 'prop-types'
import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import {Tokens} from '../tokens'
import {fontStyleMaker} from '../utils/FontUtil'
import {Icon} from "./Icon";

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
  ${props => props.isPasswordType && `
    padding-right: 100px;
  `}
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
	text-align: start;
`
const PasswordEyeContainer = styled.div`
  display: flex;
  top: 0;
  right: 0;
  position: absolute;
  align-items: center;
  justify-content: center;
  & > span {
    ${fontStyleMaker({
	fontFamily: "body",
	fontSize: "xxs",
	fontWeight: "regular"
})};
    margin-left: ${Tokens.spacing.stack.nano};
    color: ${Tokens.colors.neutral.dark["01"]};
  }
  height: 48px;
  margin-right: ${Tokens.spacing.stack.xxxs};

  cursor: pointer;
  user-select: none;
`
const InputLabel = (props) => {
	const [visiblePassword, setVisiblePassword] = useState(false)

	let inputType = props.inputType || 'text'

	if (inputType === 'password') {
		inputType = visiblePassword ? 'text' : 'password'
	}

	const isPasswordType = props.inputType === 'password';

	function camelize(str) {
		return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
			return index === 0 ? word.toLowerCase() : word.toUpperCase();
		}).replace(/\s+/g, '');
	}

	function getTestID() {
		return props.testID || (
			camelize(props.label).replace(/\W/gm,'')
		);
	}

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
				onBlur={props.onBlur}
				isPasswordType={isPasswordType}
				testID={getTestID()}
			/>
			<SuspendedLabel hasText={!!props.text}>{props.label}</SuspendedLabel>
			{props.error && <SpanError>{props.errorLabel}</SpanError>}
			{isPasswordType && <PasswordEyeContainer onClick={() => setVisiblePassword(!visiblePassword)}>
				<Icon path={visiblePassword ? Tokens.icons["eye-closed"] : Tokens.icons.eye}
							appearance={props.error ? 'danger' : 'primary'} size={20}/>
				<span>{visiblePassword ? 'Esconder' : 'Mostrar'}</span>
			</PasswordEyeContainer>}
		</InputLabelContainer>
	)
}

export {InputLabel}
InputLabel.propTypes = {
	state: PropTypes.string,
	text: PropTypes.string,
	setText: PropTypes.func,
	onBlur: PropTypes.func,
	maxLength: PropTypes.number,
	submitOnEnter: PropTypes.func,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	errorLabel: PropTypes.string,
	inputType: PropTypes.string,
	autofocus: PropTypes.bool,
	testID: PropTypes.string,
}
