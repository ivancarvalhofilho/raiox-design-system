import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {Tokens} from '../tokens'
import {fontStyleMaker} from "../utils/FontUtil";
import {camelize} from "../utils/stringUtil";

const ButtonPrimary = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	padding: ${props => 
		props.size === 'sm' && Tokens.spacing.squish.xnano || 
		props.size === 'lg' && Tokens.spacing.squish.lg || 
		props.size === 'container' && Tokens.spacing.inset.xs  
	};
	${props =>  
		props.size === 'container' && 'width: 100%;' || 'width: fit-content;'
	};
	background: ${Tokens.colors.brand.primary.darkest};
	border-radius: ${Tokens.border.radius.sm};
	color:${Tokens.colors.neutral.light.base};
	cursor: pointer;
	user-select: none;
	${fontStyleMaker({
		fontFamily: "head",
		fontSize: "xs",
		fontWeight: "medium"
	})};
	
	pointer-events: ${props => props.disabled && 'none'};
  opacity: ${props => props.disabled && Tokens.opacity.level.medium};
  
  ${props => props.loading && `& > span {
  	opacity: 0;
  }`}
`
const ButtonSecondary = styled(ButtonPrimary)`
	background: ${Tokens.colors.neutral.light.base};
	color: ${Tokens.colors.brand.primary.darkest};
	border: ${Tokens.border.width.hairline} solid ${Tokens.colors.brand.primary.darkest};
	transition: 0.25s;
	
	&:hover {
		background: ${Tokens.colors.brand.primary.darkest};
		color: ${Tokens.colors.neutral.light.base};
		border: ${Tokens.border.width.hairline} solid ${Tokens.colors.brand.primary.darkest};
	}
`
const ButtonDanger = styled(ButtonPrimary)`
	background: ${Tokens.colors.feedback.danger.darkest};
`
const LoadingBubbles = styled.div`
	position:absolute;
	display:flex;
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
	};
	
	& > span {
		opacity: 0;
		background: ${props => props.secondary ? Tokens.colors.brand.primary.darkest : Tokens.colors.neutral.light.base};
		width: 5px;
		height: 5px;
		margin-right: 2px;
		border-radius: 100%;
 	 	animation: bubbleAnimation 1s ease-in-out;;
 	 	animation-iteration-count: infinite;
	}
	& > span:nth-child(1) {
		animation-delay: 0.20s;
	}
	& > span:nth-child(2) {
		animation-delay: 0.40s;
	}
	& > span:nth-child(3) {
		animation-delay: 0.60s;
	}
	& > span:nth-child(4) {
		animation-delay: 0.80s;
	}

`
export const buttonSizes = [
	'sm',
	'lg',
	'container',
]

const Button = props => {
	const buttonType =
		props.primary && ButtonPrimary ||
		props.secondary && ButtonSecondary ||
		props.danger && ButtonDanger || ButtonPrimary

	const buttonSize = props.size || 'lg'

	return (
		<ButtonPrimary
			disabled={props.disabled}
			size={buttonSize}
			onClick={props.onClick}
			style={props.style}
			loading={props.loading}
			id={camelize(props.text)}
			as={buttonType}
			className={props.className}>
			<span>{props.text}</span>
			{props.loading && (<LoadingBubbles secondary={props.secondary}><span/><span/><span/><span/></LoadingBubbles>)}
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
}
