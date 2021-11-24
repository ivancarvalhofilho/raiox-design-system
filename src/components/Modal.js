import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {Icon} from './Icon'
import { Tokens } from '../tokens'

const BackgroundContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1000;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  top: 0;
  overflow: hidden;
  left: 0;
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
const Title = styled.div``
const ModalContent = styled.div`
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
`
const ModalContainer = styled.div`
  box-shadow: 0px 0px 8px rgba(0, 39, 64, 0.1);
  border-radius: 5px;
  width: 520px;
  transition: 0.5s;
  background: white;
  position: absolute;
  padding: 17px;
  
  animation: modalSpawnAnimation 0.5s;
  animation-iteration-count: 1;
`
const Modal = props => {
  return (
    <BackgroundContainer
      show={props.show}
      onClick={props.onClickOut}
      style={props.style}
      className={props.className}
    >
      <ModalContainer>
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
        <ModalContent>{props.children}</ModalContent>
      </ModalContainer>
    </BackgroundContainer>
  )
}

export { Modal }
Modal.propTypes = {
  children: PropTypes.any,
  closable: PropTypes.bool,
  onClickOut: PropTypes.func,
  onClose: PropTypes.func,
  show: PropTypes.bool,
  title: PropTypes.string,
}
