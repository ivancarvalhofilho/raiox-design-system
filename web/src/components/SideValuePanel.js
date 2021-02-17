import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import fontStyleMaker from '../utils/FontUtil.tsx'
import { Divider, FlexCenter, TextRow } from './StyledComponents'
import Icon from './Icon'
import Tokens from "../tokens";

const Title = styled.div`
  ${fontStyleMaker({
    fontFamily: "body",
    fontWeight: "medium",
    fontSize: "xxs"
  })};
  color: ${Tokens.colors.neutral.dark["01"]};
  margin-bottom: 8px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const Item = styled.div`
  ${props =>
    props.fullWidth
      ? `width: 100%; margin: 0 ${Tokens.spacing.inline.xxxs};`
      : 'margin: 0px 40px'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`
const Value = styled.span`
  ${fontStyleMaker({
    fontFamily: "body",
    fontWeight: "light",
    fontSize: "lg"
  })};
  color: ${props =>
    props.positive === true
      ? Tokens.colors.feedback.success.dark
      : props.positive === false && Tokens.colors.feedback.danger.dark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const DollarSign = styled.span`
  ${fontStyleMaker({
    fontFamily: "body",
    fontWeight: "regular",
    fontSize: "sm"
  })};
  margin-right: ${Tokens.spacing.inset.quarck};
  color: ${props =>
    props.positive === true
      ? Tokens.colors.feedback.success.dark
      : props.positive === false && Tokens.colors.feedback.danger.dark};
`
const Subtitle = styled(TextRow)`
  ${fontStyleMaker({
    fontFamily: "body",
    fontWeight: "medium",
    fontSize: "sm"
  })};
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
`

const SideValuePanel = props => (
  <Container>
    {props.values.map((value, index) => (
      <React.Fragment key={index}>
        <Item fullWidth={props.fullWidth}>
          {props.titles && <Title>{props.titles[index]}</Title>}
          <FlexCenter
            {...(props.showTooltip && {
              'data-tooltip': `R$ ${value}`,
            })}
          >
            <DollarSign
              positive={
                props.checkValue && props.checkValue[index]
                  ? Number.parseFloat(value) !== 0
                    ? Number.parseFloat(value) > 0
                    : null
                  : null
              }
            >
              R$
            </DollarSign>
            <Value
              positive={
                props.checkValue && props.checkValue[index]
                  ? Number.parseFloat(value) !== 0
                    ? Number.parseFloat(value) > 0
                    : null
                  : null
              }
            >
              {value}
            </Value>
          </FlexCenter>

          {props.subtitles && (
            <Subtitle
              color={props.subtitlesColors && props.subtitlesColors[index]}
              justifyContent="center"
            >
              {props.subtitlesIcons && props.subtitlesIcons[index] && (
                <Icon
                  path={props.subtitlesIcons[index]}
                  size="14px"
                  appearance={
                    props.subtitlesColors && props.subtitlesColors[index]
                  }
                  style={{ marginRight: '5px' }}
                />
              )}
              {props.subtitles[index]}
            </Subtitle>
          )}
        </Item>
        {index < props.values.length - 1 && <Divider />}
      </React.Fragment>
    ))}
  </Container>
)

export default SideValuePanel

SideValuePanel.propTypes = {
  showTooltip: PropTypes.bool,
  checkValue: PropTypes.array,
  fullWidth: PropTypes.bool,
  subtitles: PropTypes.array,
  subtitlesColors: PropTypes.array,
  subtitlesIcons: PropTypes.array,
  titles: PropTypes.array,
  values: PropTypes.array,
}
