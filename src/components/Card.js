import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {Tokens} from '../tokens'
import {Divider} from "./StyledComponents";

const CardStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  width: inherit;
  position: relative;
  flex-flow: column;

  background: ${Tokens.colors.neutral.light.base};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12);
  border-radius: ${Tokens.border.radius.sm};

  pointer-events: ${props => props.disabled && 'none'};
  opacity: ${props => props.disabled && Tokens.opacity.level.medium};

  ${props => pickAnimation(props.animationSpawn)};
`

const CardContent = styled.div`
  padding: ${Tokens.spacing.inset.xs};
  width: 100%;
  box-sizing: border-box;
`
const CardFooter = styled.div`
  padding: 16px;
`
const CardFooterContainer = styled.div`
  width: 100%;
`
const pickAnimation = (orientation) => {
    if (!orientation) return ''

    let translate = ''
    switch (orientation) {
        case 'left':
            translate = 'translateX(-'
            break;
        case 'right':
            translate = 'translateX('
            break;
        case 'up':
            translate = 'translateY(-'
            break;
        case 'down':
            translate = 'translateY('
            break;
    }
    return `
	@keyframes cardSpawnAnimation${orientation} {
    from {
      opacity: 0.2;
      transform: ${translate}8px);
    }
    to {
      opacity: 1;
      transform: ${translate}0px);
    }
  };
  animation: cardSpawnAnimation${orientation} 0.5s;'
  `
}
export const animationSpawnEnum = [
    'left',
    'right',
    'up',
    'down',
]
const Card = props => (
    <CardStyle disabled={props.disabled} style={props.style} className={props.className}
               animationSpawn={props.animationSpawn}>
        <CardContent> {props.children} </CardContent>
        {!!props.footerChildren &&
        <CardFooterContainer>
            <Divider horizontal style={{width: '100%'}}/>
            <CardFooter> {props.footerChildren} </CardFooter>
        </CardFooterContainer>}
    </CardStyle>
)

export {Card}

Card.propTypes = {
    animationSpawn: PropTypes.string,
    children: PropTypes.any,
    style: PropTypes.any,
    className: PropTypes.any,
    footerChildren: PropTypes.any,
}
