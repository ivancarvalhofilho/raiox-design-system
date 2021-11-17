import PropTypes from 'prop-types'
import React, {useState} from 'react'
import styled from 'styled-components'
import {Tokens} from '../../tokens'
import {camelize} from "../../utils/stringUtil";
import {Icon} from "../Icon";
import {fontStyleMaker} from "../../utils";
import {InputLabelContainer} from "./InputLabel";

const InputFilterStyled = styled.input`
  padding: 8px 8px 8px 44px;
  box-shadow: inset 0 0 0 1px ${Tokens.colors.neutral.dark['03']};
  border: none;
  box-sizing: border-box;
  border-radius: ${Tokens.border.radius.pill};
  background: ${Tokens.colors.neutral.light.base};
  transition: 0.25s;
  color: ${Tokens.colors.neutral.dark.base};
  ${fontStyleMaker({
    fontFamily: 'body',
    fontWeight: 'regular',
    fontSize: 'xs',
  })};
  line-height: 24px;
  width: inherit;

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px ${Tokens.colors.brand.primary.darkest};
  }
`
const SpanError = styled.span`
  position: relative;
  display: flex;
  color: ${Tokens.colors.feedback.danger.dark};
  ${fontStyleMaker({
    fontWeight: 'regular',
    fontFamily: 'body',
    fontSize: 'xs',
  })};
  margin-top: ${Tokens.spacing.inline.nano};
  margin-left: ${Tokens.spacing.inline.xxxs};
  text-align: start;
`
const IconSearchPosition = styled(Icon)`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 16px;
  pointer-events: none;
`
const SpanCancel = styled.span`
  width: 0;
  opacity: 0;
  clip-path: inset(0px 100% 0px 0px);
  ${props => props.visible && `
    width: 60px;
    opacity: 1;
    clip-path: inset(0px 0px 0px 0px);
  `};
  transition: 0.5s, 0.8s opacity;
  margin-left: 8px;
  color: ${Tokens.colors.brand.primary.darkest};
  ${fontStyleMaker({
    fontFamily: "head",
    fontWeight: "medium",
    fontSize: 'xs',
  })};
  cursor: pointer;
  word-break: normal;
`
const DivInput = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`
const InputFilter = props => {
    return (
        <InputLabelContainer
            disabled={props.disabled}
            style={props.style}
            className={props.className}
        >
            <DivInput>
                <IconSearchPosition path={Tokens.icons["search"]} appearance={'default'} size={20}/>
                <InputFilterStyled
                    id={camelize(props.label)}
                    type='text'
                    value={props.text}
                    hasError={props.error}
                    maxLength={props.maxLength}
                    placeholder={props.placeholder}
                    onChange={(text) => {
                        props.setText(text.target.value)
                    }}
                    autoFocus={props.autofocus}
                    name={props.label}
                    onKeyDown={(event) => {
                        if (!!props.submitOnEnter && event.key === 'Enter') {
                            props.submitOnEnter()
                        }
                    }}
                    onBlur={props.onBlur}
                />
                <SpanCancel visible={props.text} onClick={() => props.setText('')}>
                    Cancelar
                </SpanCancel>
            </DivInput>
            {props.error && <SpanError>{props.error}</SpanError>}
        </InputLabelContainer>
    )
}

export {InputFilter}

InputFilter.propTypes = {
    placeholder: PropTypes.string,
    active: PropTypes.bool,
    setActive: PropTypes.func,
    disabled: PropTypes.bool,
    size: PropTypes.any,
}
