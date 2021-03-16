import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Tokens } from '../tokens'
import Icon from "./Icon";
import {fontStyleMaker} from "../utils/FontUtil";

const InfoLabelStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${Tokens.colors.feedback.info.light};	
	border: 1px solid ${Tokens.colors.feedback.info.medium};
	padding: ${Tokens.spacing.inset.xs};
	width: fit-content;
	border-radius: ${Tokens.border.radius.sm};
	cursor: pointer;
	& > span {
		${fontStyleMaker({
			fontSize:"xs",
			fontFamily: "head",
			fontWeight:"medium"
		})};
		color: ${Tokens.colors.feedback.info.dark};
	}
	
	pointer-events: ${props => props.disabled && 'none'};
  opacity: ${props => props.disabled && Tokens.opacity.level.medium};
`

const InfoLabel = props => (
	<InfoLabelStyle disabled={props.disabled} onClick={()=> props.onClick()} style={props.style}>
		<Icon path={Tokens.icons.question} appearance={'info'} size={14} style={{marginRight: Tokens.spacing.stack.nano}}/>
		<span style={{ flex: 1, position:"relative", top:'1px' }}> {props.text} </span>
		<Icon path={Tokens.icons["chevron-right"]} appearance={'info'} size={8} style={{marginLeft: Tokens.spacing.stack.nano}}/>
	</InfoLabelStyle>
)

export { InfoLabel }
InfoLabel.propTypes = {
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	text: PropTypes.string,
}
