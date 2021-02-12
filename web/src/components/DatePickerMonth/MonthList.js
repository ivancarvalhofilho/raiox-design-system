import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import Tokens from '../../../tokens'
import { fontStyleMaker } from '../../utils/FontUtil'

const months = [
  ['Jan', '01'],
  ['Fev', '02'],
  ['Mar', '03'],
  ['Abr', '04'],
  ['Mai', '05'],
  ['Jun', '06'],
  ['Jul', '07'],
  ['Ago', '08'],
  ['Set', '09'],
  ['Out', '10'],
  ['Nov', '11'],
  ['Dez', '12'],
]

const MonthListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${`${Tokens.spacing.stack.nano} ${Tokens.spacing.inline.xs}`};
  margin-top: ${Tokens.spacing.stack.nano};
`
const Month = styled.div`
  background: ${props => props.selected && Tokens.colors.brand.primary.darkest};
  cursor: ${props => props.active && 'pointer'};
  opacity: ${props => !props.active && Tokens.opacity.level.light};
  ${fontStyleMaker({
    fontFamily: "body",
    fontWeight: "regular",
    fontSize: "xs"
  })};
  color: ${(props) => props.selected ? Tokens.colors.neutral.light.base : Tokens.colors.neutral.dark.base};
  user-select: none;
  border-radius: ${Tokens.border.radius.sm};
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

function MonthList(props) {
  function generateDate(month) {
    return dayjs(`${month}/01/${props.yearSelected}`).format('YYYY-MM')
  }
  const monthsArray = months.map((months, index) => ({
    name: months[0],
    active:
      !!props.showAllMonthsActive ||
      props.months.some(month => month.month === index),
    date: generateDate(months[1]),
  }))

  function onSelectMonth(month) {
    props.onSelectMonth(month.date)
  }

  return (
    <MonthListStyle>
      {monthsArray.map((month, index) => (
        <Month
          onClick={() => month.active && onSelectMonth(month)}
          selected={props.dateSelected === month.date}
          id={`month${index}`}
          active={month.active}
          data-tooltip={!month.active ? props.disabledTooltipMessage : ''}
          key={index}
        >
          {month.name}
        </Month>
      ))}
    </MonthListStyle>
  )
}

MonthList.propTypes = {
  dateSelected: PropTypes.any,
  months: PropTypes.any,
  onSelectMonth: PropTypes.any,
  yearSelected: PropTypes.any,
  disabledTooltipMessage: PropTypes.string,
  showAllMonthsActive: PropTypes.bool,
}

export default MonthList
