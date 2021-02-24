import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Tokens } from '../tokens'
import Icon from "./Icon";
import {fontStyleMaker} from "../utils/FontUtil";

const IconTextStyle = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	cursor: pointer;
	
	padding: ${Tokens.spacing.inset.xs};
	pointer-events: ${props => props.disabled && 'none'};
  opacity: ${props => props.disabled && Tokens.opacity.level.medium};
`
const IconSpan = styled.span`
	${fontStyleMaker({
		fontFamily:"body",
		fontWeight: "regular",
		fontSize: "xs"
	})};
	color: ${Tokens.colors.neutral.light.base};
	padding-left: ${Tokens.spacing.stack.nano};
`

const IconText = props => (
	<IconTextStyle disabled={props.disabled}>
		<Icon path={props.icon} size={21} appearance={'light'}/>
		<IconSpan> {props.label}</IconSpan>
	</IconTextStyle>
)

export default IconText

IconText.propTypes = {
	disabled: PropTypes.bool,
	icon: PropTypes.any,
	label: PropTypes.string,
}