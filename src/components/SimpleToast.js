import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Tokens } from '../tokens'
import {Icon} from "./Icon";
import {fontStyleMaker} from "../utils/FontUtil";

const SimpleToastStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${props => props.background};	
	border: 1px solid ${props => props.borderColor};
	padding: ${Tokens.spacing.inset.xs};
	width: fit-content;
	border-radius: ${Tokens.border.radius.sm};
	cursor: pointer;
	min-width: 200px;
	transition: 1s;
	opacity: ${props => props.isVisible ? 1 : 0};
	pointer-events: ${props => props.isVisible ? 'all': 'none'};
	& > span {
		${fontStyleMaker({
			fontSize:"xs",
			fontFamily: "head",
			fontWeight:"medium"
		})};
		color: ${Tokens.colors.neutral.dark.base};
	}
	
	pointer-events: ${props => props.disabled && 'none'};
  	opacity: ${props => props.disabled && Tokens.opacity.level.medium};
`

const toastStyles = {
	'success': {
		icon: Tokens.icons['check-rounded'],
		appearance: 'success',
		borderColor: Tokens.colors.feedback.success.medium,
		backgroundColor: Tokens.colors.feedback.success.light,
	},
	'warning': {
		icon: Tokens.icons['danger'],
		appearance: 'warning',
		borderColor: Tokens.colors.feedback.warning.medium,
		backgroundColor: Tokens.colors.feedback.warning.light,
	},
	'error': {
		icon: Tokens.icons['close-rounded'],
		appearance: 'danger',
		borderColor: Tokens.colors.feedback.danger.medium,
		backgroundColor: Tokens.colors.feedback.danger.light,
	}
}

const SimpleToast = props => {
	let timeoutId = 0;
	if(props.isVisible && props.setInvisible){
		timeoutId = setTimeout(()=>{props.setInvisible(false)}, props.lifetime)
	}
	return (
		<SimpleToastStyle
			isVisible={props.isVisible}
			background={toastStyles[props.type].backgroundColor}
			borderColor={toastStyles[props.type].borderColor}
			disabled={props.disabled}
			onClick={() => {
				props.onClick ? props.onClick() : props.setInvisible?.call(false)
				clearTimeout(timeoutId)
			}}
			style={props.style}>
			<Icon path={toastStyles[props.type].icon} appearance={toastStyles[props.type].appearance} size={14}
				  style={{marginRight: Tokens.spacing.stack.nano}}/>
			<span style={{flex: 1, position: "relative", top: '1px'}}> {props.text} </span>
			<Icon path={Tokens.icons["close"]} size={10} style={{marginLeft: Tokens.spacing.stack.nano}}/>
		</SimpleToastStyle>
	)
}

export { SimpleToast }
SimpleToast.propTypes = {
	isVisible:  PropTypes.bool,
	setInvisible:  PropTypes.func,
	type:  PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	text: PropTypes.string,
	appearance: PropTypes.string,
	lifetime: PropTypes.number,
}
