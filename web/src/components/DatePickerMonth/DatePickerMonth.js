import PropTypes from 'prop-types'
import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import YearNavigator from './YearNavigator'
import MonthList from './MonthList'
import dayjs from 'dayjs'
import theme from '../../../../tokens/js'
import { Divider } from '../StyledComponents'
import { handleOutsideDivClick } from '../../utils/clickHandleUtil'

const MonthByYearSelectorStyled = styled.div`
  box-shadow: ${theme.styles.shadow.level1};
  border-radius: ${theme.styles.border.radius.sm};
  padding: ${theme.styles.spacing.squish.xs};
`

const groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
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

  const wrapperRef = handleOutsideDivClick(
    () => !!props.setComponentVisibility && props.setComponentVisibility(false),
  )

  return (
    <MonthByYearSelectorStyled ref={wrapperRef}>
      <YearNavigator
        yearSelected={year}
        onChange={year => {
          setYear(year)
        }}
        disableLeft={props.disableLeftYearPicker}
        disableRight={props.disableRightYearPicker}
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
        disabledTooltipMessage={props.disabledMonthTooltipMessage}
      />
    </MonthByYearSelectorStyled>
  )
}

DatePickerMonth.propTypes = {
  data: PropTypes.any,
  dateSelected: PropTypes.any,
  disableLeftYearPicker: PropTypes.bool,
  disableRightYearPicker: PropTypes.bool,
  disabledMonthTooltipMessage: PropTypes.string,
  onSelectMonth: PropTypes.func,
  setComponentVisibility: PropTypes.func,
  showAllYears: PropTypes.bool,
}

export default DatePickerMonth
