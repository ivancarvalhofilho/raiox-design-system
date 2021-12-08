import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Tokens } from "../../tokens";

const TabContainer = styled.div`
  padding: 5px 0px;
  font-family: ${Tokens.fonts.family.body};
  font-weight: ${props =>
    props.active
      ? Tokens.fonts.weight.medium
      : Tokens.fonts.weight.regular};
  width: ${props => props.width}%;
  text-align: center;
  color: ${props =>
    props.active
      ? Tokens.colors.brand.primary.darkest
      : Tokens.colors.neutral.dark['01']};
  font-size: ${Tokens.fonts.fontSize.xxs};
`
const Tab = props => (
  <TabContainer
    width={props.width}
    id={props.id}
    onClick={props.onClick}
    active={props.active}
  >
    {props.label}
  </TabContainer>
)

export { Tab }
Tab.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.number,
}
