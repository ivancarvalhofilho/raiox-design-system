import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {Tokens} from '../tokens'

const BigRadioStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  position: relative;
  cursor: pointer;

  & > span {
    position: absolute;
    border: 2px solid ${props => props.tokensColors.neutral.dark["02"]};
    width: inherit;
    height: inherit;
    ${props => props.active && `border-color: ${props.tokensColors.brand.primary.darkest}`};
    border-radius: ${Tokens.border.radius.circular};
    transition: 0.15s;
    box-sizing: border-box;
  }

  &::before {
    content: '';
    position: absolute;
    background: ${props => props.tokensColors.brand.primary.darkest};
    border-radius: ${Tokens.border.radius.circular};
    transition: 0.15s;
    height: 0;
    width: 0;
    ${props => props.active && `
			height: ${props.size * 0.50}px;
			width: ${props.size * 0.50}px;
		`};
  }

  pointer-events: ${props => props.disabled && 'none'};
  opacity: ${props => props.disabled && Tokens.opacity.level.medium};
`

const BigRadio = props => {
    const tokensColors = props.customColors || Tokens.colors

    return (
        <BigRadioStyle
            disabled={props.disabled}
            active={props.active}
            onClick={() => props.setActive()}
            tokensColors={tokensColors}
           size={props.size || '20'}
        >
            <span/>
        </BigRadioStyle>
    )
}

export {BigRadio}

BigRadio.propTypes = {
    identifier: PropTypes.string,
    active: PropTypes.bool,
    setActive: PropTypes.func,
    disabled: PropTypes.bool,
    size: PropTypes.any,
}
