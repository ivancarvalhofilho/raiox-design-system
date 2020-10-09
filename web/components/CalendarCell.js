import React from 'react'
import styled from 'styled-components'

const CalendarCellContainer = styled.div`
  height: 75px;
  border-radius: 0px;
  display: flex;
  justify-content: flex-end;
`
const DayNumber = styled.span`
  height: 14px;
  width: 8px;
`
const CalendarCell = (props) => {
  return <CalendarCellContainer>
    <DayNumber>
      {props.day}
    </DayNumber>
  </CalendarCellContainer>
}

export { CalendarCell }
