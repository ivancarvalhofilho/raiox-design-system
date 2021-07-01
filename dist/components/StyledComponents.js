import styled from 'styled-components'
import { Tokens } from "../tokens";
import { fontStyleMaker } from "../utils/FontUtil";

const TextRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.justifyContent};
  font-family: ${Tokens.fonts.family.body};
  font-weight: ${props =>
    props.bold
      ? Tokens.fonts.weight.medium
      : Tokens.fonts.weight.regular};
  font-size: ${Tokens.fonts.fontSize.xs};
  color: ${props =>
    props.color
      ? props.color
      : props.danger
      ? Tokens.colors.feedback.danger.dark
      : Tokens.colors.neutral.dark.base};
`

const Divider = styled.div`
  ${props => (props.horizontal ? 'border-bottom' : 'border-left')}: 1px solid
    ${Tokens.colors.neutral.dark['03']};
`

const Container = styled.div`
  padding: 16px;
  background: white;
  border-radius: ${Tokens.border.radius.sm};
  box-shadow: ${Tokens.shadow.level1};
`

const FlexCenter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.span`
	${fontStyleMaker({
		fontFamily: "head",
		fontWeight: "medium",
		fontSize:"sm"
	})};
	color: ${Tokens.colors.neutral.dark.base};
	padding-bottom: ${Tokens.spacing.inline.quarck};
`
const Subtitle = styled.span`
	${fontStyleMaker({
		fontFamily: "body",
		fontWeight: "regular",
		fontSize: "xs"
	})};
	color: ${Tokens.colors.neutral.dark["01"]};
`
const TitlesContainer = styled.div`
	display: flex;
	flex-flow: column;
	flex: 1;
	min-height: 50px;
	padding: 0 16px;
	height: 100%;
	justify-content: space-evenly;
`
const TextAsButton = styled.div`
	display: flex;
	${fontStyleMaker({
		fontWeight:"medium",
		fontSize:"sm",
		fontFamily:"head"
	})};
	color: ${Tokens.colors.brand.primary.darkest};
	cursor: pointer;
	line-height: 21px;
`
export  { TextRow, Divider, Container, FlexCenter, Title, Subtitle, TitlesContainer, TextAsButton }
