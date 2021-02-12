import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Tokens from '../../tokens'
import { fontStyleMaker } from '../utils/FontUtil'

const SuspendedLabel = styled.div`
  position: absolute;
  z-index: 1;
  margin: 12px;
  padding: 4px;
  color: ${Tokens.colors.neutral.dark.base};
  ${fontStyleMaker({
    Tokens,
    fontFamily: "body",
    fontWeight: "medium",
    fontSize: "lg"
  })};
  background: inherit;
  transition: 0.25s;
  top: 12px;
`
const InputLabelStyled = styled.input`
  position: absolute;
  padding: 16px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 4px;
  background: white;
  &:focus {
    outline: none;
  }
  transition: 0.25s;

  &:focus + div {
    top: -8px;
  }
`
const InputLabelContainer = styled.div`
  background: ${Tokens.colors.neutral.light.base};
`
const InputLabel = props => (
  <InputLabelContainer>
    <InputLabelStyled type="text" />
    <SuspendedLabel>Label</SuspendedLabel>
  </InputLabelContainer>
)

export default InputLabel

InputLabel.propTypes = {
  state: PropTypes.string,
}
