import React from 'react'
import styled from 'styled-components'
import Colors from '../../../../tokens/js/colors'
import fontStyleMaker from '../../utils/FontUtil'
import PropTypes from 'prop-types'

const CalendarCellContainer = styled.div`
  border-radius: 0px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-end;
  border: 1px solid
    ${(props) =>
      props.isSelected
        ? Colors.brand.primary.darkest
        : Colors.neutral.dark['03']};
  background: ${(props) =>
    (props.isHolyday && `${Colors.neutral.light['02']} !important`) ||
    ((props.isSelected || props.isHovered) &&
      `${Colors.brand.primary.light} !important`)};
  cursor: ${(props) =>
    (props.isBlockedSelection && 'not-allowed') ||
    (props.currentMonth && 'pointer')};
`
const DayNumber = styled.span`
  height: 14px;
  ${(props) =>
    fontStyleMaker(
      props.theme,
      'body',
      (props.isSelected && 'medium') || 'regular',
      'xs',
    )};
  margin: ${(props) => props.theme.styles.spacing.inset.nano};
  color: ${(props) =>
    (props.isBlockedSelection && Colors.neutral.dark['02']) ||
    (props.isSelected && Colors.brand.primary.darkest)};
  user-select: none;
`
const DaySales = styled.span`
  & > div {
    display: inline-flex;
    align-items: center;
    margin: ${(props) => props.theme.styles.spacing.inset.nano};
  }
  ${(props) => fontStyleMaker(props.theme, 'body', 'regular', 'xs')};
`
const SalesValue = styled.span`
  height: 14px;
  ${(props) => fontStyleMaker(props.theme, 'condensed', 'regular', 'xs')};
  margin-right: ${(props) => props.theme.styles.spacing.inset.quarck};
  color: ${(props) => !props.currentMonth && Colors.neutral.dark['02']};
  display: flex;
  align-items: center;
`
const SalesStatusDot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: ${(props) => props.theme.styles.border.radius.circular};
  background: ${(props) => props.color};
`
const CalendarCell = (props) => (
  <CalendarCellContainer
    data-tooltip={
      !(
        props.date.isBlockedSelection &&
        props.date.currentMonth &&
        props.maxDateRange
      ) &&
      `Não é possível selecionar um período maior que ${props.maxDateRange} dias`
    }
    isSelected={props.date.isSelected}
    isHovered={props.date.isHovered}
    onClick={() =>
      props.date.currentMonth &&
      !props.date.isBlockedSelection &&
      props.onDayClick()
    }
    onMouseOver={() =>
      props.date.currentMonth &&
      !props.date.isBlockedSelection &&
      props.onDayHover()
    }
    onFocus={() => {}}
    currentMonth={props.date.currentMonth}
    isHolyday={props.date.isHolyday}
    isBlockedSelection={props.date.isBlockedSelection}
  >
    {props.date.currentMonth && (
      <DayNumber
        currentMonth={props.date.currentMonth}
        isSelected={props.date.isSelected}
        isBlockedSelection={props.date.isBlockedSelection}
      >
        {props.date.day}
      </DayNumber>
    )}
    {props.date.currentMonth && (
      <DaySales>
        {props.daySale && (
          <div>
            <SalesValue currentMonth={props.date.currentMonth}>
              R${' '}
              {parseFloat(Math.abs(props.daySale.sale)).toLocaleString(
                'pt-br',
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                },
              )}
            </SalesValue>
            <SalesStatusDot
              color={
                props.daySale.type === 'R'
                  ? Colors.feedback.success.dark
                  : Colors.feedback.attention.darkest
              }
            />
          </div>
        )}
      </DaySales>
    )}
  </CalendarCellContainer>
)

export { CalendarCell }

CalendarCell.propTypes = {
  date: PropTypes.object,
  daySale: PropTypes.object,
  onDayHover: PropTypes.func,
  onDayClick: PropTypes.func,
  maxDateRange: PropTypes.number,
}
