import React from 'react'
import styled from 'styled-components'
import Colors from '../../../tokens/js/colors'
import CalendarConst from './const'
import fonts from '../../../tokens/js/fonts'
import styles from '../../../tokens/js/styles'

const CalendarCellContainer = styled.div`
  height: ${CalendarConst.CELL_HEIGHT};
  border-radius: 0px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-end;
  border: 1px solid ${Colors.neutral.dark['03']};
`
const DayNumber = styled.span`
  height: 14px;
  font-size: ${fonts.fontSize.xs}px;
  font-weight: ${fonts.weight.medium};
  margin: ${styles.spacing.inset.nano};
  font-family: ${fonts.family.body};
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
  font-size: ${fonts.fontSize.xs}px;
  font-weight: ${fonts.weight.regular};
  margin-right: ${styles.spacing.inset.quarck};
`
const SalesStatusDot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: ${styles.border.radius.cirular};
  background: ${(props) => props.color};
`
const CalendarCell = (props) => (
  <CalendarCellContainer>
    <DayNumber>{props.date.day}</DayNumber>
    <DaySales>
      {props.daySales && (
        <div>
          <SalesValue>
            R${' '}
            {parseFloat(Math.abs(props.daySales)).toLocaleString('pt-br', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </SalesValue>
          <SalesStatusDot color={props.daySales ?  Colors.feedback.success.dark : Colors.feedback.danger.dark}></SalesStatusDot>
        </div>
      )}
    </DaySales>
  </CalendarCellContainer>
)

export { CalendarCell }
