import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Icon from "./Icon";
import {Divider, TitlesContainer} from "./StyledComponents";
import {Tokens} from "../tokens";
import {fontStyleMaker} from "../utils";
import {Loading} from "../index";


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
	align-items: center;
	&:hover {
		background: ${Tokens.colors.brand.primary.light};
	}
	${props => props.selected && `
		background: ${Tokens.colors.brand.primary.light} !important;
		font-weight: ${Tokens.fonts.weight.medium};
		color: ${Tokens.colors.brand.primary.darkest};
	`};
	background: ${Tokens.colors.neutral.light.base};
	cursor: pointer;
	min-height: 48px;
	box-sizing: border-box;
`
const AllItemsSpan = styled.span`
	${fontStyleMaker({
	fontSize: "xs",
	fontWeight: "regular",
	fontFamily: "body"
})};
	color: ${Tokens.colors.neutral.dark.base};
	${props => props.selected && `
		color: ${Tokens.colors.brand.primary.darkest};
	`};
`
const AddButton = styled.span`
	${fontStyleMaker({
	fontSize: "xs",
	fontWeight: "medium",
	fontFamily: "head"
})};
	background: transparent;
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
	height: 100%;
`

const Title = styled.span`
	${fontStyleMaker({
	fontFamily: "body",
	fontWeight: "regular",
	fontSize:"xs"
})};
	color: ${Tokens.colors.neutral.dark.base};
	${props => props.selected && `
		color: ${Tokens.colors.brand.primary.darkest};
	`};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 90%;
`

const Subtitle = styled.span`
	${fontStyleMaker({
	fontFamily: "body",
	fontWeight: "regular",
	fontSize:"xxs"
})};
	color: ${Tokens.colors.neutral.dark['01']};
  padding-top: ${Tokens.spacing.inline.quarck};
	${props => props.selected && `
		color: ${Tokens.colors.brand.primary.darkest};
	`};

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 90%;
`

const ListModal = props => {
	const activeItemIcon = <RadialWhiteBackgroundIcon appearance={'primary'} size={16} path={Tokens.icons["check-rounded"]}/>

	return (
		<ListModalStyle disabled={props.disabled} opened={props.opened} className={props.className}>
			<div className={'custom-scrollbar'} style={{overflowY: 'auto', background: Tokens.colors.neutral.light.base}}>
				{props.isLoadingList ? (
					<Loading />
				) : (
					<>
						{props.hasAllItemsButton && (
							<>
								<AllItemsRow selected={props.activeItem === 0} onClick={() => props.setActiveItem(0)}>
									<AllItemsSpan  selected={props.activeItem === 0}>Todos os estabelecimentos</AllItemsSpan>
									{props.activeItem === 0 && activeItemIcon}
								</AllItemsRow>
								<Divider horizontal/>
							</>
						)}

						{props.itemsList.map((item, index) => (
							<>
								<Row selected={item.id === props.activeItem} onClick={() => props.setActiveItem(item.id)}>
									<TitlesContainer style={{padding: 0, width:'0%'}}>
										<Title selected={item.id === props.activeItem}>{item.title}</Title>
										{item.subtitle && <Subtitle selected={item.id === props.activeItem}>{item.subtitle}</Subtitle>}
									</TitlesContainer>
									{item.id === props.activeItem && activeItemIcon}
								</Row>
								{props.itemsList.length - 1 !== index && (<Divider horizontal/>)}
							</>
						))}
					</>
				)}

			</div>

			{props.hasAddButton && (
				<>
					<Divider horizontal/>
					<AddButtonRow onClick={props.onclick}>
						<RadialWhiteBackgroundIcon appearance={'primary'} size={16} path={Tokens.icons.add}/>
						<AddButton>Adicionar estabelecimento</AddButton>
					</AddButtonRow>
				</>
			)}

		</ListModalStyle>
	)
}

export { ListModal }
ListModal.propTypes = {
	opened: PropTypes.bool,
	onclick: PropTypes.func,
	onOutsideClick: PropTypes.func,
	itemsList: PropTypes.array,
	disabled: PropTypes.bool,
	hasAddButton: PropTypes.bool,
	activeItem: PropTypes.number,
	isLoadingList: PropTypes.bool,
	hasAllItemsButton: PropTypes.bool,
}
