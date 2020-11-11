import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import icons from '../../../tokens/js/icons'
import dayjs from 'dayjs'
import fontStyleMaker from '../utils/FontUtil'
import theme from '../../../tokens/js'

const Month = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
`
const Date = styled.div`
  margin-left: ${(props) => props.theme.styles.spacing.inline.nano};
  ${(props) =>
    fontStyleMaker(props.theme, 'body', 'medium', 'md', 'neutral.dark.base')};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
`
const Container = styled.div`
  border: ${(props) => props.theme.styles.border.width.hairline} solid #e0e0e0;
  box-sizing: border-box;
  border-radius: ${(props) => props.theme.styles.border.sm};
  padding: ${(props) => props.theme.styles.spacing.inset.xs};
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
  ${(props) =>
    fontStyleMaker(props.theme, 'body', 'medium', 'sm', 'neutral.dark.base')};
  color: ${(props) => props.color};
  white-space: nowrap;
  margin-left: ${(props) => props.theme.styles.spacing.inline.xxs};
`
const Value = styled.div`
  ${(props) =>
    fontStyleMaker(props.theme, 'body', 'light', 'lg', 'neutral.dark.base')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const MoneySign = styled.div`
  ${(props) =>
    fontStyleMaker(props.theme, 'body', 'regular', 'sm', 'neutral.dark.base')};
  padding: ${(props) =>
    `0 ${props.theme.styles.spacing.inline.quarck} 0 ${props.theme.styles.spacing.inline.nano}`};
  white-space: nowrap;
`
const HeaderCalendar = (props) => (
  <Container>
    <Month>
      <Icon
        size={theme.styles.icon.size.md}
        appearance="primary"
        disabled={props.disabledLeft}
        id="backMonth"
        style={{
          marginRight: theme.styles.spacing.inline.nano,
          cursor: !props.disabledLeft && 'pointer',
          opacity: props.disabledLeft ? theme.styles.opacity.level.medium : 1,
        }}
        path={icons['chevron-left']}
        onClick={() => !props.disabledLeft && props.onBackMonthClick()}
      />
      <Icon
        size={theme.styles.icon.size.md}
        id="nextMonth"
        appearance="primary"
        disabled={props.disabledRight}
        style={{
          cursor: !props.disabledRight && 'pointer',
          opacity: props.disabledRight ? theme.styles.opacity.level.medium : 1,
        }}
        path={icons['chevron-right']}
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
