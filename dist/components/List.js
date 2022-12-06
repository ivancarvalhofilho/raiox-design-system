import PropTypes from 'prop-types'
import React from 'react'
import { ListHeader } from './ListHeader'

import styled from 'styled-components'

const ListContainer = styled.div``
const Row = styled.div`
  display: flex;
  height: ${props => props.size || 46}px;
  padding: 0px 16px;
  border-bottom: 1px solid #e0e0e0;
`
const Column = styled.div`
  height: 100%;
  width: ${props => props.width}%;
  justify-content: ${props =>
    props.align === 'right'
      ? 'flex-end'
      : props.align === 'left'
      ? 'flex-start'
      : props.align};
  align-items: center;
  display: flex;
`
const ListData = styled.div``
const List = props => (
  <ListContainer style={props.style}>
    <ListHeader
      data={props.header}
      align={props.align}
      nowRapRow={props.nowRapRow}
    />
    <ListData style={props.styleData} className="custom-scrollbar">
      {props.rows.map((row, index) => (
        <Row key={index} size={props.rowSize}>
          {row.map((column, index) => (
            <Column
              key={index}
              align={props.align[index]}
              width={
                props.nowRapRow && index === 0 ? 100 / 2 : 100 / row.length
              }
            >
              {column}
            </Column>
          ))}
        </Row>
      ))}
    </ListData>
  </ListContainer>
)

export { List }
List.propTypes = {
  align: PropTypes.array,
  header: PropTypes.array,
  rowSize: PropTypes.number,
  rows: PropTypes.array,
  style: PropTypes.object,
  styleData: PropTypes.object,
  nowRapRow: PropTypes.bool,
}
