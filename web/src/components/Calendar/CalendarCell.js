import React from 'react'
import styled from 'styled-components'
import Colors from '../../../../tokens/js/colors'
import CalendarConst from './const'
import fonts from '../../../../tokens/js/fonts'
import styles from '../../../../tokens/js/styles'
import { Tooltip } from '@material-ui/core'
import { TooltipText } from '../StyledComponents'

const CalendarCellContainer = styled.div`
  height: ${CalendarConst.CELL_HEIGHT};
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
  font-size: ${fonts.fontSize.xs};
  font-weight: ${(props) =>
    (props.isSelected && fonts.weight.medium) || fonts.weight.regular};
  margin: ${styles.spacing.inset.nano};
  font-family: ${fonts.family.body};
  color: ${(props) =>
    (props.isBlockedSelection && Colors.neutral.dark['02']) ||
    (props.isSelected && Colors.brand.primary.darkest)};
`
const DaySales = styled.span`
  & > div {
    display: inline-flex;
    align-items: center;
    margin: ${styles.spacing.inset.nano};
  }
  font-family: ${fonts.family.body};
`
const SalesValue = styled.span`
  height: 14px;
  font-size: ${fonts.fontSize.xs};
  font-family: ${fonts.family.condensed};
  font-weight: ${fonts.weight.regular};
  margin-right: ${styles.spacing.inset.quarck};
  color: ${(props) => !props.currentMonth && Colors.neutral.dark['02']};
`
const SalesStatusDot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: ${styles.border.radius.cirular};
  background: ${(props) => props.color};
`
const CalendarCell = (props) => (
  <Tooltip
    key={`${props.date.fullDate}tooltip`}
    title={<TooltipText>{`Não é possível selecionar um período maior que ${props.maxDateRange} dias`}</TooltipText>}
    disableHoverListener={
      !(props.date.isBlockedSelection && props.date.currentMonth && props.maxDateRange)
    }
    arrow
  >
    <CalendarCellContainer
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
          {props.daySales && (
            <div>
              <SalesValue currentMonth={props.date.currentMonth}>
                R${' '}
                {parseFloat(Math.abs(props.daySales)).toLocaleString('pt-br', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </SalesValue>
              <SalesStatusDot
                color={
                  props.daySales
                    ? Colors.feedback.success.dark
                    : Colors.feedback.danger.dark
                }
              />
            </div>
          )}
        </DaySales>
      )}
    </CalendarCellContainer>
  </Tooltip>
)

export { CalendarCell }
