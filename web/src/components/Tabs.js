import PropTypes from 'prop-types'
import React from 'react'
import Tab from './Tab'
import styled from 'styled-components'
import theme from '../../../tokens/theme'

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  pointer-events: ${props => props.disabled && 'none'};
`
const Container = styled.div`
  opacity: ${props => props.disabled && '0.5'};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`
const Bar = styled.div`
  width: ${props => props.width}%;
  height: ${props => props.height || 4}px;
  border-radius: ${props => props.rounded && '4px 4px 0px 0px'};
  background-color: ${props =>
    props.color || props.theme.colors.brand.primary.darkest};
  transform: translate(${props => props.left}%, 0);
  transition: transform 0.3s linear;
`

const Tabs = props => (
  <Container disabled={props.disabled} style={props.style}>
    <TabsContainer disabled={props.disabled}>
      {props.tabs.map((tab, index) => (
        <Tab
          id={`tab${index}`}
          key={index}
          label={tab}
          width={100 / props.tabs.length}
          onClick={() => !props.disabled && props.onTabClick(index)}
          active={props.tabActive === index}
        />
      ))}
    </TabsContainer>

    <Bar width={100 / props.tabs.length} left={props.tabActive * 100} rounded />
    <Bar width={100} color={theme.colors.neutral.dark['03']} height={1} />
  </Container>
)

export default Tabs

Tabs.propTypes = {
  disabled: PropTypes.bool,
  onTabClick: PropTypes.func,
  tabActive: PropTypes.number,
  tabs: PropTypes.array,
}
