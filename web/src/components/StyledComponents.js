import styled from 'styled-components'
import Tokens from "../tokens";

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

export const FlexCenter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`

export  { TextRow, Divider, Container }
