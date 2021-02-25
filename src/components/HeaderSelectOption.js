import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Tokens } from '../tokens'
import {fontStyleMaker} from "../utils/FontUtil";
import Icon from "./Icon";

const HeaderSelectOptionStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-flow: column;
	position: relative;
	cursor: pointer;
	pointer-events: ${props => props.disabled && 'none'};
  opacity: ${props => props.disabled && Tokens.opacity.level.medium};
  user-select: none;
`

const Label = styled.span`
	${fontStyleMaker({
		fontSize:"xxs",
		fontWeight:"regular",
		fontFamily: "body"
	})};
	color: ${Tokens.colors.brand.secondary.light};
	padding-bottom: ${Tokens.spacing.inline.quarck};
`
const Title = styled.span`
	${fontStyleMaker({
		fontSize:"xs",
		fontWeight:"regular",
		fontFamily: "body"
	})};
	color: ${Tokens.colors.neutral.light.base};
	padding-right: ${Tokens.spacing.stack.nano};
`

const TitleContainer = styled.div`
	justify-content: center;
	align-items: center;
	display: flex;
`
const ChevronIcon = styled(Icon)`
	transition: .25s;
	${props => props.opened ? 
		`transform: rotate(-180deg)`
		: `transform: rotate(0deg)` };
`

const HeaderSelectOption = props => (
	<HeaderSelectOptionStyle disabled={props.disabled} onClick={props.setOpened} size={props.size || '21'}>
		<Label>{props.label}</Label>
		<TitleContainer>
			<Title>{props.value}</Title>
			<ChevronIcon opened={props.opened} path={Tokens.icons['chevron-down']} appearance={'light'} size={Tokens.iconSize.sm}/>
		</TitleContainer>
	</HeaderSelectOptionStyle>
)

export default HeaderSelectOption

HeaderSelectOption.propTypes = {
	opened: PropTypes.bool,
	setActive: PropTypes.func,
	disabled: PropTypes.bool,
	size: PropTypes.string,
	value: PropTypes.string,
	label: PropTypes.string,
}
