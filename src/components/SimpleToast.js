import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Tokens } from '../tokens'
import { Icon } from "./Icon";
import { fontStyleMaker } from "../utils/FontUtil";

const SimpleToastStyle = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${props => props.background};	
	padding: ${Tokens.spacing.inset.xs};
	width: fit-content;
	cursor: pointer;
	min-width: 200px;
	transition: 1s;
	opacity: ${props => props.isVisible ? 1 : 0};
	pointer-events: ${props => props.isVisible ? 'all' : 'none'};
	& > span {
		${fontStyleMaker({
	fontSize: "xs",
	fontFamily: "head",
	fontWeight: "medium"
})};
	}
	color: ${props => props.fontColor};

  	opacity: ${props => props.disabled && Tokens.opacity.level.medium};
`

const ToastProgressBar = styled.div`
	background: white;
	opacity: 0.5;
	position: absolute;
	height: 5px;
	bottom: 0;
	left: 0;
	width: 100%;
	${props => props.visible && `animation: simpleToastProgressBar ${props.lifetime}ms;`}
	animation-iteration-count: 1;
	animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
`

const toastStyles = {
	'success': {
		icon: Tokens.icons['check-rounded'],
		appearance: 'light',
		fontColor: Tokens.colors.neutral.light.base,
		borderColor: Tokens.colors.feedback.success.darkest,
		backgroundColor: Tokens.colors.feedback.success.darkest,
	},
	'info': {
		icon: Tokens.icons['info'],
		appearance: 'light',
		fontColor: Tokens.colors.neutral.light.base,
		borderColor: Tokens.colors.feedback.info.darkest,
		backgroundColor: Tokens.colors.feedback.info.darkest,
	},
	'warning': {
		icon: Tokens.icons['warning-triangle'],
		appearance: 'dark',
		fontColor: Tokens.colors.neutral.dark.base,
		borderColor: Tokens.colors.feedback.warning.dark,
		backgroundColor: Tokens.colors.feedback.warning.dark,
	},
	'error': {
		icon: Tokens.icons['close-rounded'],
		appearance: 'light',
		fontColor: Tokens.colors.neutral.light.base,
		borderColor: Tokens.colors.feedback.danger.darkest,
		backgroundColor: Tokens.colors.feedback.danger.darkest,
	}
}

const SimpleToast = props => {
	const [timeoutId, setTimeoutId] = useState(0)

	if (props.isVisible && props.setInvisible && timeoutId == 0) {
		const timeoutIdTemp = setTimeout(() => { props.setInvisible(false) }, props.lifetime)
		setTimeoutId(timeoutIdTemp)
	} else if (!props.isVisible && !!timeoutId) {
		clearTimeout(timeoutId)
		setTimeoutId(0)
	}

	return (
		<SimpleToastStyle
			isVisible={props.isVisible}
			background={toastStyles[props.type].backgroundColor}
			borderColor={toastStyles[props.type].borderColor}
			fontColor={toastStyles[props.type].fontColor}
			disabled={props.disabled}
			onClick={() => {
				props.onClick ? props.onClick() : props.setInvisible?.call(false)
				clearTimeout(timeoutId)
			}}
			style={props.style}>
			<Icon path={toastStyles[props.type].icon} appearance={toastStyles[props.type].appearance} size={22}
				style={{ marginRight: Tokens.spacing.stack.nano }} />
			<span style={{ flex: 1, position: "relative", top: '1px' }}> {props.text} </span>
			<Icon path={Tokens.icons["close"]} size={14} appearance={toastStyles[props.type].appearance} style={{ marginLeft: Tokens.spacing.stack.nano }} />
			<ToastProgressBar
				visible={props.isVisible}
				lifetime={props.lifetime}
			/>
		</SimpleToastStyle>
	)
}

export { SimpleToast }
SimpleToast.propTypes = {
	identifier: PropTypes.string,
	isVisible: PropTypes.bool,
	setInvisible: PropTypes.func,
	type: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	text: PropTypes.string,
	appearance: PropTypes.string,
	lifetime: PropTypes.number,
	style: PropTypes.object,
}
