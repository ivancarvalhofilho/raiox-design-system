import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  padding: 8px 16px;
  background: ${props => props.theme.colors.neutral.light['02']};
  color: ${props => props.theme.colors.neutral.dark['01']};
  border-bottom: 1px solid #e0e0e0;
  font-family: ${props => props.theme.fonts.family.body};
  font-size: ${props => props.theme.fonts.fontSize.xxs};
`
const Column = styled.div`
  width: ${props => props.width}%;
  text-align: ${props => props.align};
`
const ListHeader = props => (
  <HeaderContainer>
    {props.data.map((key, index) => (
      <Column
        key={index}
        width={100 / props.data.length}
        align={props.align[index]}
      >
        {key}
      </Column>
    ))}
  </HeaderContainer>
)

export default ListHeader

ListHeader.propTypes = {
  align: PropTypes.array,
  data: PropTypes.array,
}
