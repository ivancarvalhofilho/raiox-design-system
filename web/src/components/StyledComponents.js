import styled from 'styled-components'

const TextRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  font-family: ${(props) => props.theme.fonts.family.body};
  font-weight: ${(props) =>
    props.bold
      ? props.theme.fonts.weight.medium
      : props.theme.fonts.weight.regular};
  font-size: ${(props) => props.theme.fonts.fontSize.xs};
  color: ${(props) =>
    props.color
      ? props.color
      : props.danger
      ? props.theme.colors.feedback.danger.dark
      : props.theme.colors.neutral.dark.base};
`

const Card = styled.div`
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.neutral.dark['03']};
`

const Title = styled.div`
  font-family: ${(props) => props.theme.fonts.family.body};
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  font-size: ${(props) => props.theme.fonts.fontSize.xl};
  color: ${(props) => props.theme.colors.neutral.dark.base};
`

const Divider = styled.div`
  border-left: 1px solid ${(props) => props.theme.colors.neutral.dark['03']};
  margin: 1% 0;
`

const Container = styled.div`
  padding: 16px;
  background: white;
  border-radius: ${(props) => props.theme.styles.border.radius.sm};
  box-shadow: ${(props) => props.theme.styles.shadow.level1};
`

export const TooltipText = styled.span`
  font-size: 12px;
  color: #ffffff;
`

export { TextRow, Card, Title, Divider, Container }
