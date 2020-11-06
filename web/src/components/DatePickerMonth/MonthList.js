import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import theme from '../../../../tokens/js'
import fontStyleMaker from '../../utils/FontUtil'

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
  grid-gap: ${`${theme.styles.spacing.stack.nano} ${theme.styles.spacing.inline.xs}`};
  margin-top: ${theme.styles.spacing.stack.nano};
`
const Month = styled.div`
  background: ${(props) =>
    props.selected && theme.colors.brand.primary.darkest};
  pointer-events: ${(props) => !props.active && 'none'};
  cursor: ${(props) => props.active && 'pointer'};
  opacity: ${(props) => !props.active && theme.styles.opacity.level.light};
  ${(props) =>
    fontStyleMaker(
      props.theme,
      'body',
      'regular',
      'xs',
      props.selected ? 'neutral.light.base' : 'neutral.dark.base',
    )};
  user-select: none;
  border-radius: ${theme.styles.border.radius.sm};
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
      props.months.some((month) => month.month === index),
    date: generateDate(months[1]),
  }))

  function onSelectMonth(month) {
    props.onSelectMonth(month.date)
  }

  return (
    <MonthListStyle>
      {monthsArray.map((month, index) => (
        <Month
          onClick={() => onSelectMonth(month)}
          selected={props.dateSelected === month.date}
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
