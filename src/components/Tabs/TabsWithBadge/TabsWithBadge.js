import PropTypes from 'prop-types'
import React from 'react'
import TabWithBadge from './TabWithBadge'
import styled from 'styled-components'
import { Tokens } from '../../../tokens'

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: ${({ width }) => width + '%' || auto};
  pointer-events: ${(props) => props.disabled && 'none'};
  ${(props) =>
    props.customStyle?.containerPadding
      ? `padding-top: ${props.customStyle?.containerPadding}px;`
      : null}
  ${(props) =>
    props.customStyle?.containerPadding
      ? `padding-bottom: ${props.customStyle?.containerPadding}px;`
      : null}
`
const Container = styled.div`
  opacity: ${(props) => props.disabled && '0.5'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) =>
    props.customStyle?.containerColor
      ? props.customStyle?.containerColor
      : null};
`
const Bar = styled.div`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height || 4}px;
  border-radius: ${(props) => props.rounded && '4px 4px 0px 0px'};
  background-color: ${(props) =>
    props.customStyle?.barColor
      ? props.customStyle.barColor
      : props.color || Tokens.colors.brand.primary.darkest};
  transform: translate(${(props) => props.left}%, 0);
  transition: transform 0.3s linear;
`

const TabsWithBadge = (props) => (
  <Container
    disabled={props.disabled}
    style={props.style}
    customStyle={props.customStyle}
  >
    <TabsContainer disabled={props.disabled} width={props.tabWidth} customStyle={props.customStyle}>
      {props.tabs.map((tab, index) => (
        <TabWithBadge
          id={`tab${index}`}
          key={index}
          label={tab}
          badge={props.badges[index]}
          width={props.tabWidth / props.tabs.length}
          onClick={() => !props.disabled && props.onTabClick(index)}
          active={props.tabActive === index}
          fontStyle={props.customStyle}
          className={props.className}
        />
      ))}
    </TabsContainer>

    <Bar
      width={props.tabWidth / props.tabs.length}
      left={props.tabActive * 100}
      rounded
      customStyle={props.customStyle}
    />

  </Container>
)

export { TabsWithBadge }

TabsWithBadge.propTypes = {
  disabled: PropTypes.bool,
  onTabClick: PropTypes.func,
  tabActive: PropTypes.number,
  tabs: PropTypes.array,
  // eslint-disable-next-line react/no-unused-prop-types
  identifier: PropTypes.string,
  customStyle: PropTypes.object,
  tabWidth: PropTypes.number,
  style: PropTypes.object,
  badges: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  className: PropTypes.string,
}

