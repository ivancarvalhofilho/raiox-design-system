import React from 'react'
import styled from 'styled-components'
import { fontStyleMaker } from '../../utils/FontUtil'
import PropTypes from 'prop-types'
import Tokens from "../../tokens";

const CalendarCellContainer = styled.div`
  position: relative;
  min-height: 60px;
  border-radius: 0px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-end;
  border: 1px solid
    ${props =>
      props.isSelected
        ? Tokens.colors.brand.primary.darkest
        : Tokens.colors.neutral.dark['03']};
  background: ${props =>
    (props.isHolyday && `${Tokens.colors.neutral.light['02']} !important`) ||
    ((props.isSelected || props.isHovered) &&
      `${Tokens.colors.brand.primary.light} !important`)};
  cursor: ${props =>
    (props.isBlockedSelection && 'not-allowed') ||
    (props.currentMonth && 'pointer')};
`
const DayNumber = styled.span`
  height: 14px;
  ${(props) => fontStyleMaker({
    fontFamily: "body",
    fontWeight: (props.isSelected && 'medium') || 'regular',
    fontSize: "xs"
  })};
  margin: ${Tokens.spacing.inset.nano};
  color: ${props =>
    (props.isBlockedSelection && Tokens.colors.neutral.dark['02']) ||
    (props.isSelected && Tokens.colors.brand.primary.darkest)};
  user-select: none;
`
const DaySales = styled.span`
  & > div {
    display: inline-flex;
    align-items: center;
    margin: ${Tokens.spacing.inset.nano};
    position: absolute;
    width: Calc(100% - 16px);
    bottom: 0;
    left: 0;
    justify-content: flex-end;
  }
  ${fontStyleMaker({
    fontFamily: "body",
    fontWeight: "regular",
    fontSize: "xs"
  })};
`
const SalesValue = styled.span`
  height: 14px;
  ${fontStyleMaker({
    fontFamily: "condensed",
    fontWeight: "regular",
    fontSize: "xs"
  })};
  margin-right: ${Tokens.spacing.inset.quarck};
  color: ${props => !props.currentMonth && Tokens.colors.neutral.dark['02']};
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  line-height: 14px;
  text-align: end;
`
const SalesStatusDot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: ${Tokens.border.radius.circular};
  background: ${props => props.color};
`
const CalendarCell = props => (
  <CalendarCellContainer
    id={props.id}
    {...(props.date.isBlockedSelection &&
      props.date.currentMonth &&
      props.maxDateRange && {
        'data-tooltip': `Não é possível selecionar um período maior que ${props.maxDateRange} dias`,
      })}
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
            <SalesValue
              currentMonth={props.date.currentMonth}
              {...(!(
                props.date.isBlockedSelection &&
                props.date.currentMonth &&
                props.maxDateRange
              ) && {
                'data-tooltip': `R$ ${parseFloat(
                  Math.abs(props.daySale.sale),
                ).toLocaleString('pt-br', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`,
              })}
            >
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
                  ? Tokens.colors.feedback.success.dark
                  : Tokens.colors.feedback.attention.darkest
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
