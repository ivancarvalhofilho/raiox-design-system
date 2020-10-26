import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import icons from '../../../tokens/js/icons'
import dayjs from 'dayjs'
import fontStyleMaker from '../utils/FontUtil'
const Month = styled.div`
  display: flex;
  align-items: center;
`
const Date = styled.div`
  margin-left: 11px;
  ${(props) =>
    fontStyleMaker(props.theme, 'body', 'medium', 'md', 'neutral.dark.base')};
  cursor: pointer;
`
const Container = styled.div`
  border: ${(props) => props.theme.styles.border.width.hairline} solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  align-items: center;
  height: 56px;
  justify-content: space-between;
`
const Values = styled.div`
  display: flex;
  align-items: center;
`
const Label = styled.div`
  ${(props) =>
    fontStyleMaker(props.theme, 'body', 'medium', 'sm', 'neutral.dark.base')};
  color: ${(props) => props.color};
`
const Value = styled.div`
  ${(props) =>
    fontStyleMaker(props.theme, 'body', 'light', 'lg', 'neutral.dark.base')};
  margin-right: ${(props) => props.notLast && '24px'};
`
const MoneySign = styled.div`
  ${(props) =>
    fontStyleMaker(props.theme, 'body', 'regular', 'sm', 'neutral.dark.base')};
  padding: 0 4px 0 8px;
`
const HeaderCalendar = (props) => (
  <Container>
    <Month>
      <Icon
        size="14px"
        appearance="primary"
        style={{ marginRight: '16px', cursor: 'pointer' }}
        path={icons['chevron-left']}
        onClick={() => props.onBackMonthClick()}
      />
      <Icon
        appearance="primary"
        style={{ cursor: 'pointer' }}
        size="14px"
        path={icons['chevron-right']}
        onClick={() => props.onNextMonthClick()}
      />
      <Date
          onClick={() => props.onMonthClick()}
      >
        {dayjs()
          .set('month', props.month)
          .set('year', props.year)
          .format('MMMM [de] YYYY')}
      </Date>
    </Month>
    <Values>
      {props.values &&
        props.values.map(({ label, value, color }, index) => (
          <>
            <Label color={color}>{label}</Label>
            <MoneySign>R$</MoneySign>
            <Value notLast={index !== props.values.length - 1}>{value}</Value>
          </>
        ))}
    </Values>
  </Container>
)

export default HeaderCalendar

HeaderCalendar.propTypes = {
  month: PropTypes.number,
  values: PropTypes.array,
  year: PropTypes.number,
  onBackMonthClick: PropTypes.func,
  onNextMonthClick: PropTypes.func,
  onMonthClick: PropTypes.func,
}