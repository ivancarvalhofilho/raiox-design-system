import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Tokens } from '../tokens'
import { fontStyleMaker }from '../utils/FontUtil'
import Icon from "./Icon";
import BigRadio from "./BigRadio";
import {Subtitle, Title, TitlesContainer} from "./StyledComponents";

const CardSelectorStyle = styled.div`
	transition: 0.15s;
	background: ${Tokens.colors.neutral.light.base};
	box-shadow: 0 0 0 1px ${Tokens.colors.neutral.dark["03"]};
	${props => props.selected && `box-shadow: 0 0 0 2px ${Tokens.colors.brand.primary.darkest};`};
	border-radius: ${Tokens.border.radius.sm};
	user-select: none;
	cursor: pointer;
	
	pointer-events: ${props => props.disabled && 'none'};
  opacity: ${props => props.disabled && Tokens.opacity.level.medium};
`
const DescriptionText = styled.div`
	background: ${Tokens.colors.neutral.light["02"]};
	padding: ${Tokens.spacing.squish.nano};
	${fontStyleMaker({
		fontFamily: "body",
		fontWeight: "regular",
		fontSize: "xs"
	})};
	line-height: 21px;
	color: ${Tokens.colors.neutral.dark["01"]};
	border-bottom-left-radius: ${Tokens.border.radius.sm};
	border-bottom-right-radius: ${Tokens.border.radius.sm};
`
const UpperContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	box-sizing: border-box;
`

const CardSelector = props => (
	<CardSelectorStyle disabled={props.disabled} selected={props.selected} onClick={()=> props.setSelected()} style={props.style} className={props.className}>
			<div>
				<UpperContainer>
					<Icon path={props.icon} size={'51px'}/>
					<TitlesContainer>
						<Title>{props.title}</Title>
						<Subtitle>{props.subtitle}</Subtitle>
					</TitlesContainer>
					<BigRadio active={props.selected} disabled={props.disabled} size={18}/>
				</UpperContainer>
				<DescriptionText>
					{props.description}
				</DescriptionText>
			</div>
	</CardSelectorStyle>
)

export default CardSelector

CardSelector.propTypes = {
	selected: PropTypes.bool,
	setSelected: PropTypes.func,
	disabled: PropTypes.bool,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	description: PropTypes.string,
	icon: PropTypes.object,
	style: PropTypes.any,
	className: PropTypes.any,
}
