import PropTypes from 'prop-types'
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import theme from '../../tokens/js'

const BackgroundContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1000;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  top: 0;
  overflow: hidden;
  left: 0;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: center;
`
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
const Title = styled.div``
const ModalContent = styled.div`
  padding: 20px;
`
const ModalContainer = styled.div`
  box-shadow: 0px 0px 8px rgba(0, 39, 64, 0.1);
  border-radius: 5px;
  width: 520px;
  transition: top 0.5s;
  background: white;
  position: absolute;
  top: ${(props) =>
    props.show
      ? `calc(50% - ${props.top / 2}px)`
      : `-${props.top ? props.top : 5000}px`};
  padding: 17px;
  height: 436px;
`
const Modal = (props) => {
  const [show, setShow] = useState(props.show)
  const [height, setHeight] = useState(0)
  const ref = useRef()

  useEffect(() => {
    setHeight(ref.current.clientHeight)
    setTimeout(() => {
      setShow(props.show)
    }, 500)
  }, [props.show])

  return (
    <BackgroundContainer show={props.show ? props.show : show}>
      <ModalContainer
        ref={ref}
        show={!props.show ? props.show : show}
        top={height}
      >
        <ModalHeader>
          <Title>{props.title}</Title>
          {props.closable && (
            <Icon
              size="16px"
              onClick={props.onClose}
              path={theme.icons.close}
            />
          )}
        </ModalHeader>
        <ModalContent>{props.children}</ModalContent>
      </ModalContainer>
    </BackgroundContainer>
  )
}

export default Modal

Modal.propTypes = {
  children: PropTypes.any,
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  show: PropTypes.bool,
  title: PropTypes.string,
}
