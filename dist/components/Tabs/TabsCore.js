import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {Tokens} from '../../tokens'

const TabsCoreContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  pointer-events: ${props => props.disabled && 'none'};
  min-height: 44px;
  padding-left: 8px;
`
const Container = styled.div`
  opacity: ${props => props.disabled && '0.5'};
`
const TopBar = styled.span`
  height: 3px;
  width: calc(100% + 2px);
  position: absolute;
  top: -1px;
  left: -1px;
  display: block;
  background: ${Tokens.colors.brand.primary.dark};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`
const Bar = styled.div`
  width: ${props => props.width}%;
  height: ${props => props.height || 4}px;
  border-radius: ${props => props.rounded && '4px 4px 0px 0px'};
  background-color: ${props =>
    props.color || Tokens.colors.brand.primary.darkest};
  transform: translate(${props => props.left}%, 0);
  transition: transform 0.3s linear;
`
const TabContainer = styled.div`
  font-family: ${Tokens.fonts.family.head};
  font-weight: ${Tokens.fonts.weight.medium};
  text-align: center;
  color: ${Tokens.coreColors.brand.secondary.darkest};
  background: ${props =>
      props.active
          ? Tokens.coreColors.neutral.light.base
          : Tokens.coreColors.neutral.light["02"]};
  font-size: ${Tokens.fonts.fontSize.sm};
  transition: 0.2s all, 0s font-weight, 0s width;

  border: 1px solid ${Tokens.coreColors.neutral.dark['03']};
  bottom: -1px;
  position: relative;
  height: 100%;
  ${props =>
      props.active
              ? 'padding: 10px 16px;'
              : 'padding: 8px 16px;'};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  margin-right: 4px;
`

const TabsCore = props => {
     return (
        <Container disabled={props.disabled} style={props.style}>
            <TabsCoreContainer disabled={props.disabled}>
                {props.tabs.map((tab, index) => {
                    const isActive = props.tabActive === index;
                    return (
                        <TabContainer
                            id={`tab${index}`}
                            key={index}
                            onClick={() => !props.disabled && props.onTabClick(index)}
                            active={isActive}
                        >
                            {isActive && <TopBar/>}
                            {tab}
                        </TabContainer>
                    );
                })}
            </TabsCoreContainer>

            <Bar width={100} color={Tokens.coreColors.neutral.dark['03']} height={1}/>
        </Container>
    )
}

export {TabsCore}
TabsCore.propTypes = {
  disabled: PropTypes.bool,
  onTabClick: PropTypes.func,
  tabActive: PropTypes.number,
  tabs: PropTypes.array,
  identifier: PropTypes.string,
}
