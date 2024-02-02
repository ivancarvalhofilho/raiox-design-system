import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Tokens } from '../tokens'

const HeaderContainer = styled.div`
  display: flex;
  padding: 8px 16px;
  background: ${Tokens.colors.neutral.light['02']};
  color: ${Tokens.colors.neutral.dark['01']};
  border-bottom: 1px solid #e0e0e0;
  font-family: ${Tokens.fonts.family.body};
  font-size: ${Tokens.fonts.fontSize.xxs};

  ${props => props.ignoreWidth && `justify-content: space-between;`}
  ${props => props.headerStyle}
`
const Column = styled.div`
  ${props => !props.ignoreWidth && `width: ${props => props.width}%;`}
  text-align: ${props => props.align};
`
const ListHeader = props => (
  <HeaderContainer ignoreWidth={props.ignoreWidth}>
    {props.data &&
      props.data.map((key, index) => (
        <Column
          key={index}
          width={
            props.nowRapRow && index === 0 ? 100 / 2 : 100 / props.data.length
          }
          align={props.align[index]}
          ignoreWidth={props.ignoreWidth}
        >
          {key}
        </Column>
      ))}
  </HeaderContainer>
)

export { ListHeader }
ListHeader.propTypes = {
  align: PropTypes.array,
  data: PropTypes.array,
  nowRapRow: PropTypes.any,
  ignoreWidth: PropTypes.bool,
  headerStyle: PropTypes.object,
}
