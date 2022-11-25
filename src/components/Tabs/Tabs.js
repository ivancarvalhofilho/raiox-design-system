import PropTypes from 'prop-types'
import React from 'react'
import { Tab } from './Tab'
import styled from 'styled-components'
import { Tokens } from '../../tokens'

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
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

const Tabs = (props) => (
  <Container
    disabled={props.disabled}
    style={props.style}
    customStyle={props.customStyle}
  >
    <TabsContainer disabled={props.disabled} customStyle={props.customStyle}>
      {props.tabs.map((tab, index) => (
        <Tab
          id={`tab${index}`}
          key={index}
          label={tab}
          width={100 / props.tabs.length}
          onClick={() => !props.disabled && props.onTabClick(index)}
          active={props.tabActive === index}
          fontStyle={props.customStyle}
        />
      ))}
    </TabsContainer>

    <Bar
      width={100 / props.tabs.length}
      left={props.tabActive * 100}
      rounded
      customStyle={props.customStyle}
    />
    <Bar width={100} color={Tokens.colors.neutral.dark['03']} height={1} />
  </Container>
)

export { Tabs }
Tabs.propTypes = {
  disabled: PropTypes.bool,
  onTabClick: PropTypes.func,
  tabActive: PropTypes.number,
  tabs: PropTypes.array,
  // eslint-disable-next-line react/no-unused-prop-types
  identifier: PropTypes.string,
  customStyle: PropTypes.object,
}
