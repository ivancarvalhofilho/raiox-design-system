import PropTypes from 'prop-types'
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import theme from '../../tokens/js'

const BackgroundContainer = styled.div`
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.75);
  top: 0;
  left: 0;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: center;
`
const LeftModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
const Title = styled.div``
const LeftModalContent = styled.div`
  padding: 20px;
`
const LeftModalContainer = styled.div`
  box-shadow: 0px 0px 8px rgba(0, 39, 64, 0.1);
  border-radius: 5px;
  width: 374px;
  background: white;
  transition: right 0.5s;
  position: absolute;
  right: ${(props) =>
    props.show ? `0px` : `-${props.width ? props.width : 5000}px`};
  padding: 17px;
  height: 100%;
`
const SideModal = (props) => {
  const [show, setShow] = useState(props.show)
  const [width, setWidth] = useState(0)
  const ref = useRef()

  useEffect(() => {
    setWidth(ref.current.clientWidth)
    setTimeout(() => {
      setShow(props.show)
    }, 500)
  }, [props.show])

  return (
    <BackgroundContainer
      show={props.show ? props.show : show}
      onClick={() => props.onClickOut()}
    >
      <LeftModalContainer
        ref={ref}
        show={!props.show ? props.show : show}
        width={width}
      >
        <LeftModalHeader>
          <Title>{props.title}</Title>
          {props.closable && (
            <Icon
              size="16px"
              onClick={props.onClose}
              path={theme.icons.close}
            />
          )}
        </LeftModalHeader>
        <LeftModalContent>{props.children}</LeftModalContent>
      </LeftModalContainer>
    </BackgroundContainer>
  )
}

export default SideModal

SideModal.propTypes = {
  children: PropTypes.any,
  closable: PropTypes.bool,
  onClickOut: PropTypes.func,
  onClose: PropTypes.func,
  show: PropTypes.bool,
  title: PropTypes.string,
}
