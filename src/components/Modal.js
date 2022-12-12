import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Icon } from './Icon'
import { Tokens } from '../tokens'
import { handleOutsideDivClick } from '../utils'

const BackgroundContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1000;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  top: 0;
  overflow: hidden;
  left: 0;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
const Title = styled.div``
const ModalContent = styled.div`
  ${(props) => 
    !props.ignoreInsidePadding && `padding: ${Tokens.spacing.inline.xxxs};`}
  box-sizing: border-box;
  height: 100%;
`
const ModalContainer = styled.div`
  box-shadow: 0px 0px 8px rgba(0, 39, 64, 0.1);
  border-radius: 5px;
  ${(props) => 
    !props.ignoreHeight && `height: ${props.height ? `${props.height}px` : '100%'};`}
  width: ${(props) => (props.width ? `${props.width}px` : '520px')};
  transition: 0.5s;
  background: white;
  position: absolute;
  padding: ${Tokens.spacing.inline.xxxs};

  animation: modalSpawnAnimation 0.5s;
  animation-iteration-count: 1;
`
const Modal = (props) => {
  const openRef = useRef()
  openRef.current = props.show

  const modalBodyRef = handleOutsideDivClick(() => {
    if (openRef.current) {
      props.onClickOut(false)
    }
  })

  function onKeyboardHit(event) {
    if (event.key === 'Escape') {
      props.onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyboardHit)
    return () => {
      document.removeEventListener('keydown', onKeyboardHit)
    }
  }, [])

  return (
    <BackgroundContainer
      show={props.show}
      style={props.style}
      className={props.className}
    >
      <ModalContainer
        height={props.height}
        width={props.width}
        ref={modalBodyRef}
        ignoreHeight={props.ignoreHeight}
      >
        <ModalHeader>
          <Title>{props.title}</Title>
          {props.closable && (
            <Icon
              size="16px"
              onClick={props.onClose}
              path={Tokens.icons.close}
              style={{
                position: 'absolute',
                right: '16px',
                top: '16px',
              }}
            />
          )}
        </ModalHeader>
        <ModalContent ignoreInsidePadding={props.ignoreInsidePadding}>{props.children}</ModalContent>
      </ModalContainer>
    </BackgroundContainer>
  )
}

export { Modal }
Modal.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
  className: PropTypes.any,
  closable: PropTypes.bool,
  onClickOut: PropTypes.func,
  onClose: PropTypes.func,
  show: PropTypes.bool,
  title: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.number,
  ignoreHeight: PropTypes.bool,
  ignoreInsidePadding: PropTypes.bool,
}
