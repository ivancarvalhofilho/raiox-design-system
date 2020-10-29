import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import YearNavigator from './YearNavigator'
import MonthList from './MonthList'
import dayjs from 'dayjs'
import theme from '../../../../tokens/js'
import { Divider } from '../StyledComponents'

const MonthByYearSelectorStyled = styled.div`
  box-shadow: ${theme.styles.shadow.level1};
  border-radius: ${theme.styles.border.radius.sm};
  padding: ${theme.styles.spacing.squish.xs};
`

const groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}

function DatePickerMonth(props) {
  const [year, setYear] = useState(
    dayjs(props.dateSelected, 'YYYY-MM').get('year'),
  )

  const [yearMonth] = useState(
    props.showAllYears || groupBy(props.data, 'year'),
  )

  return (
    <MonthByYearSelectorStyled>
      <YearNavigator
        yearSelected={year}
        onChange={(year) => setYear(year)}
        years={Object.keys(yearMonth).sort()}
        showAllYears={props.showAllYears}
      />
      <Divider
        horizontal
        style={{
          width: 'Calc(100% + 24px + 24px)',
          left: '-24px',
          position: 'relative',
        }}
      />
      <MonthList
        months={yearMonth[year]}
        showAllMonthsActive={props.showAllYears}
        dateSelected={props.dateSelected}
        onSelectMonth={props.onSelectMonth}
        yearSelected={year}
      />
    </MonthByYearSelectorStyled>
  )
}

DatePickerMonth.propTypes = {
  data: PropTypes.any,
  dateSelected: PropTypes.any,
  onSelectMonth: PropTypes.any,
  showAllYears: PropTypes.bool,
}

export default DatePickerMonth
