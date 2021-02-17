import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { fontStyleMaker } from '../../utils/FontUtil'
import Icon from '../Icon'
import Tokens from "../../tokens";

const YearNavigatorStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${Tokens.spacing.stack.xxxs};
  ${fontStyleMaker({
    fontFamily: "body",
    fontWeight: "medium",
    fontSize: "xxs"
  })};
  color: ${Tokens.colors.neutral.dark.base};
`

function YearNavigator(props) {
  const index = props.years.findIndex(
    item => item === props.yearSelected.toString(),
  )

  const left = index > 0 || props.showAllYears
  const right = props.years.length > index + 1 || props.showAllYears

  return (
    <YearNavigatorStyle>
      <Icon
        size={Tokens.iconSize.md}
        appearance="primary"
        disabled={!left}
        id="yearLeft"
        style={{
          marginRight: Tokens.spacing.stack.nano,
          opacity: !left ? Tokens.opacity.level.light : 1,
        }}
        path={Tokens.icons['chevron-left']}
        onClick={() =>
          left &&
          props.onChange(
            dayjs()
              .set('year', props.years[index] || props.yearSelected)
              .add(-1, 'year')
              .get('year'),
          )
        }
      />

      <div style={{ userSelect: 'none' }} id="year">
        {props.yearSelected}
      </div>

      <Icon
        size={Tokens.iconSize.md}
        appearance="primary"
        disabled={!right}
        id="yearRight"
        style={{
          marginLeft: Tokens.spacing.stack.nano,
          opacity: !right ? Tokens.opacity.level.light : 1,
        }}
        path={Tokens.icons['chevron-right']}
        onClick={() =>
          right &&
          props.onChange(
            dayjs()
              .set('year', props.years[index] || props.yearSelected)
              .add(1, 'year')
              .get('year'),
          )
        }
      />
    </YearNavigatorStyle>
  )
}

YearNavigator.propTypes = {
  onChange: PropTypes.any,
  yearSelected: PropTypes.any,
  years: PropTypes.any,
  showAllYears: PropTypes.bool,
  disableRight: PropTypes.bool,
  disableLeft: PropTypes.bool,
}

export default YearNavigator
