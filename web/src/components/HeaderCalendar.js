import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import dayjs from 'dayjs'
import { fontStyleMaker } from '../utils/FontUtil'
import Tokens from '../../tokens'

const Month = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
`
const Date = styled.div`
  margin-left: ${Tokens.spacing.inline.nano};
  ${fontStyleMaker({
    Tokens,
    fontFamily: "body",
    fontWeight: "medium",
    fontSize: "md"
  })};
  
  color: ${Tokens.colors.neutral.dark.base}
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
`
const Container = styled.div`
  border: ${Tokens.border.width.hairline} solid #e0e0e0;
  box-sizing: border-box;
  border-radius: ${Tokens.border.sm};
  padding: ${Tokens.spacing.inset.xs};
  display: flex;
  align-items: center;
  height: 56px;
  justify-content: space-between;
`
const Values = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: Calc(70% - 24px);
  margin-left: 24px;
`
const Label = styled.div`
  ${fontStyleMaker({
    Tokens,
    fontFamily: "body",
    fontWeight: "medium",
    fontSize: "sm"
  })};
  color: ${props => props.color};
  white-space: nowrap;
  margin-left: ${Tokens.spacing.inline.xxs};
`
const Value = styled.div`
  ${fontStyleMaker({
    Tokens,
    fontFamily: "body",
    fontWeight: "light",
    fontSize: "lg"
  })};
  color: ${Tokens.colors.neutral.dark.base}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const MoneySign = styled.div`
  ${fontStyleMaker({
    Tokens,
    fontFamily: "body",
    fontWeight: "regular",
    fontSize: "sm"
  })};
  color: ${Tokens.colors.neutral.dark.base}
  padding: ${`0 ${Tokens.spacing.inline.quarck} 0 ${Tokens.spacing.inline.nano}`};
  white-space: nowrap;
`
const HeaderCalendar = props => (
  <Container>
    <Month>
      <Icon
        size={Tokens.iconSize.md}
        appearance="primary"
        disabled={props.disabledLeft}
        id="backMonth"
        style={{
          marginRight: Tokens.spacing.inline.nano,
          cursor: !props.disabledLeft && 'pointer',
          opacity: props.disabledLeft ? Tokens.opacity.level.medium : 1,
        }}
        path={Tokens.icons['chevron-left']}
        onClick={() => !props.disabledLeft && props.onBackMonthClick()}
      />
      <Icon
        size={Tokens.iconSize.md}
        id="nextMonth"
        appearance="primary"
        disabled={props.disabledRight}
        style={{
          cursor: !props.disabledRight && 'pointer',
          opacity: props.disabledRight ? Tokens.opacity.level.medium : 1,
        }}
        path={Tokens.icons['chevron-right']}
        onClick={() => !props.disabledRight && props.onNextMonthClick()}
      />
      <Date onClick={() => props.onMonthClick()} id="date">
        {dayjs()
          .set('month', props.month)
          .set('year', props.year)
          .format('MMMM [de] YYYY')}
      </Date>
    </Month>
    <Values>
      {props.values &&
        props.values.map(({ label, value, color }, index) => (
          <React.Fragment key={index}>
            <Label color={color}>{label}</Label>
            <MoneySign>R$</MoneySign>
            <Value data-tooltip={`R$ ${value}`}>{value}</Value>
          </React.Fragment>
        ))}
    </Values>
  </Container>
)

export default HeaderCalendar

HeaderCalendar.propTypes = {
  month: PropTypes.number,
  values: PropTypes.array,
  year: PropTypes.number,
  disabledRight: PropTypes.bool,
  disabledLeft: PropTypes.bool,
  onBackMonthClick: PropTypes.func,
  onNextMonthClick: PropTypes.func,
  onMonthClick: PropTypes.func,
}
