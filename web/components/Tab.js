import React from 'react'
import styled from 'styled-components'

const TabContainer = styled.div`
  padding: 5px;
  font-family: ${(props) => props.theme.fonts.family.body};
  font-weight: ${(props) =>
    props.active
      ? props.theme.fonts.weight.medium
      : props.theme.fonts.weight.regular};
  width: ${(props) => props.width}%;
  text-align: center;
  color: ${(props) =>
    props.active
      ? props.theme.colors.brand.primary.darkest
      : props.theme.colors.neutral.dark['01']};
  font-size: ${(props) => props.theme.fonts.fontSize.xxs};
`
const Tab = (props) => (
  <TabContainer
    width={props.width}
    onClick={props.onClick}
    active={props.active}
  >
    {props.label}
  </TabContainer>
)

export default Tab
