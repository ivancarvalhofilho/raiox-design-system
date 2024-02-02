import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
  margin: 2em auto;
  width: 40px;
  height: 40px;
  position: relative;
`

const circleFadeDelay = keyframes`
  0%,
  39%,
  100% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }
`

const Loading = props => {
	const CirclePrimitive = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    ${props.rotate &&
	`
      -webkit-transform: rotate(${props.rotate}deg);
      -ms-transform: rotate(${props.rotate}deg);
      transform: rotate(${props.rotate}deg);
    `} &:before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 15%;
      height: 15%;
      background-color: #999;
      border-radius: 100%;
      animation: ${circleFadeDelay} 1.2s infinite ease-in-out both;
      ${props.delay &&
	`
        -webkit-animation-delay: ${props.delay}s;
        animation-delay: ${props.delay}s;
      `};
    }
  `
	return <CirclePrimitive />
}

Loading.propTypes = {
	delay: PropTypes.number,
	rotate: PropTypes.number,
}

const LoadingIndicator = () => (
	<Wrapper>
		<Loading />
		<Loading rotate={30} delay={-1.1} />
		<Loading rotate={60} delay={-1} />
		<Loading rotate={90} delay={-0.9} />
		<Loading rotate={120} delay={-0.8} />
		<Loading rotate={150} delay={-0.7} />
		<Loading rotate={180} delay={-0.6} />
		<Loading rotate={210} delay={-0.5} />
		<Loading rotate={240} delay={-0.4} />
		<Loading rotate={270} delay={-0.3} />
		<Loading rotate={300} delay={-0.2} />
		<Loading rotate={330} delay={-0.1} />
	</Wrapper>
)

export { LoadingIndicator as Loading }
