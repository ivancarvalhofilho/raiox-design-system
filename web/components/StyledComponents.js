import styled from 'styled-components'

const TextRow = styled.div`
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.family.body};
  font-weight: ${(props) =>
    props.bold
      ? props.theme.fonts.weight.medium
      : props.theme.fonts.weight.regular};
  font-size: ${(props) => props.theme.fonts.fontSize.xs};
  color: ${(props) =>
    props.danger
      ? props.theme.colors.feedback.danger.dark
      : props.theme.colors.neutral.dark.base};
`

const Card = styled.div`
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.neutral.dark['03']};
`

export { TextRow, Card }
