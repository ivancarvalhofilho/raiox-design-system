import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Tokens } from '../../../tokens'
import Badge from './Badge'

const getFontWeight = (props) => {
  if (props.active) {
    if (props.fontStyle && props.fontStyle?.activeTabfontWeight)
      return props.fontStyle?.activeTabfontWeight
    else return Tokens.fonts.weight.medium
  } else {
    if (props.fontStyle && props.fontStyle?.inactiveTabfontWeight)
      return props.fontStyle?.inactiveTabfontWeight
    else return Tokens.fonts.weight.regular
  }
}

const getFontColor = (props) => {
  if (props.active) {
    if (props.fontStyle && props.fontStyle.activeFontColor) {
      return props.fontStyle?.activeFontColor
    } else {
      return Tokens.colors.brand.primary.darkest
    }
  } else {
    if (props.fontStyle && props.fontStyle?.inactiveFontColor) {
      return props.fontStyle?.inactiveFontColor
    } else {
      return Tokens.colors.neutral.dark['01']
    }
  }
}

const TabContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 5px 0px;
  font-family: ${(props) =>
    props.fontStyle?.fontFamily || Tokens.fonts.family.body};
  font-weight: ${(props) => getFontWeight(props)};
  width: ${(props) => props.width}%;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: ${(props) => getFontColor(props)};
  font-size: ${(props) =>
    props.fontStyle?.fontSize || Tokens.fonts.fontSize.xxs};
`
const TabWithBadge = (props) => (
  <TabContainer
    width={props.width}
    id={props.id}
    onClick={props.onClick}
    active={props.active}
    fontStyle={props.fontStyle}
    className={props.className}
  >
    {props.label}<Badge active={props.active} label={props.badge} />
  </TabContainer>
)

export default TabWithBadge

TabWithBadge.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  width: PropTypes.number,
  fontStyle: PropTypes.any,
  badge: PropTypes.number,
  className: PropTypes.string,
}
