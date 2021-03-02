import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Tokens } from '../tokens'

const CardStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: inherit;
	width: inherit;
	position: relative;
	padding: ${Tokens.spacing.inset.xs};
	
	background: ${Tokens.colors.neutral.light.base};
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.12);
	border-radius: ${Tokens.border.radius.sm};
	
	pointer-events: ${props => props.disabled && 'none'};
  opacity: ${props => props.disabled && Tokens.opacity.level.medium};
  
  ${props => pickAnimation(props.animationSpawn)};
`

const pickAnimation = (orientation) => {
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
  animation: cardSpawnAnimation${orientation} 0.5s;
  `
}
export const animationSpawnEnum = [
	'left',
	'right',
	'up',
	'down',
]
const Card = props => (
	<CardStyle disabled={props.disabled} style={props.style} animationSpawn={props.animationSpawn}>
		{	props.children }
	</CardStyle>
)

export default Card

Card.propTypes = {
	animationSpawn: PropTypes.string,
	children: PropTypes.any,
	style: PropTypes.any,
}
