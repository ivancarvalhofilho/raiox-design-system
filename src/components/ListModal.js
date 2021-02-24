import PropTypes from 'prop-types'
import React, {useState} from 'react'
import styled from 'styled-components'
import Icon from "./Icon";
import {Divider, Subtitle, Title, TitlesContainer} from "./StyledComponents";
import {fontStyleMaker, handleOutsideDivClick, Tokens} from "../index";


const ListModalStyle = styled.div`
	display: flex;
	border-radius: ${Tokens.border.radius.sm};
	width: 280px;
	max-height: 400px;
	flex-flow: column;
	box-shadow: 0 0 8px rgba(0, 39, 64, 0.1);
	user-select: none;
	
	& > div:first-child {
		border-top-left-radius: ${Tokens.border.radius.sm};
		border-top-right-radius: ${Tokens.border.radius.sm};
	}
	& > div:last-child {
		border-bottom-left-radius: ${Tokens.border.radius.sm};
		border-bottom-right-radius: ${Tokens.border.radius.sm};
	}
	
	transition: 0.25s;
  filter: opacity(${props => (props.opened ? 1 : 0)});
  clip-path: inset(-20% -20% ${props => (props.opened ? '-20' : '120')}% -20%);
  height: ${props => props.opened ? '100%' : '0px'};
  pointer-events: ${props => props.opened ? 'all' : 'none'};
`

const Row = styled.div`
	padding: ${Tokens.spacing.inset.xs};
	display: flex;
	&:hover {
		background: ${Tokens.colors.brand.primary.light};
	}
	${props => props.selected && `
		background: ${Tokens.colors.brand.primary.light} !important;
		font-weight: ${Tokens.fonts.weight.medium};
		color: ${Tokens.colors.brand.primary.darkest};
	`};
	cursor: pointer;
`
const AllItemsSpan = styled.span`
	${fontStyleMaker({
		fontSize: "sm",
		fontWeight: "medium",
		fontFamily: "head"
	})};
`
const AddButton = styled.span`
	${fontStyleMaker({
		fontSize: "sm",
		fontWeight: "medium",
		fontFamily: "head"
	})};
	color: ${Tokens.colors.brand.primary.darkest};
`
const AllItemsRow = styled(Row)`
	justify-content: space-between;
	align-items: center;
`
const AddButtonRow = styled(Row)`
	justify-content: space-evenly;
	align-items: center;
`

const RadialWhiteBackgroundIcon = styled(Icon)`
	background: ${Tokens.colors.neutral.light.base};
	border-radius: ${Tokens.border.radius.circular};
`

const ListModal = props => {
	const activeItemIcon = <RadialWhiteBackgroundIcon appearance={'primary'} size={16} path={Tokens.icons["check-rounded"]}/>

	const wrapperRef = handleOutsideDivClick(
		() => !!props.onOutsideClick && props.onOutsideClick(false),
	)

	return (
		<ListModalStyle disabled={props.disabled} opened={props.opened} ref={wrapperRef}>
			<AllItemsRow selected={props.activeItem === 0} onClick={() => props.setActiveItem(0)}>
				<AllItemsSpan>Todos os estabelecimentos</AllItemsSpan>
				{activeItemIcon}
			</AllItemsRow>

			<div className={'custom-scrollbar'} style={{overflowY: 'auto'}}>
				{props.itemsList.map((item) => (
					<>
						<Divider horizontal/>
						<Row selected={item.id === props.activeItem} onClick={() => props.setActiveItem(item.id)}>
							<TitlesContainer style={{padding: 0}}>
								<Title>{item.title}</Title>
								<Subtitle>{item.subtitle}</Subtitle>
							</TitlesContainer>
						</Row>
					</>
				))}
			</div>

			{props.hasAddButton && (
				<>
					<Divider horizontal/>
					<AddButtonRow onClick={props.onclick}>
						<RadialWhiteBackgroundIcon appearance={'primary'} size={16} path={Tokens.icons.add}/>
						<AddButton>Todos os estabelecimentos</AddButton>
					</AddButtonRow>
				</>
			)}

		</ListModalStyle>
	)
}

export default ListModal

ListModal.propTypes = {
	opened: PropTypes.bool,
	onclick: PropTypes.func,
	onOutsideClick: PropTypes.func,
	itemsList: PropTypes.array,
	disabled: PropTypes.bool,
	hasAddButton: PropTypes.bool,
	activeItem: PropTypes.number,
}
