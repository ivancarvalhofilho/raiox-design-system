import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Icon from './Icon'
import icons from '../../../tokens/js/icons'
import styled from 'styled-components'
import fontStyleMaker from '../utils/FontUtil'
import { UnmountClosed } from 'react-collapse'
import {
  Container as StyledContainer,
  Divider as DividerStyled,
} from './StyledComponents'

const Header = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Button = styled.div`
  padding-left: ${(props) => props.theme.styles.spacing.inline.nano};
`

const Divider = styled(DividerStyled)`
  margin-top: ${(props) => props.theme.styles.spacing.stack.xxxs};
`

const Container = styled(StyledContainer)`
  box-shadow: ${(props) => props.theme.styles.shadow.level0};
  padding: ${(props) => props.theme.styles.spacing.inset.xs};
  background: white;
`
const Body = styled.div`
  margin-top: ${(props) => props.theme.styles.spacing.stack.xxxs};
  ${(props) =>
    fontStyleMaker(props.theme, 'body', 'regular', 'xs', 'neutral.dark.base')};
`
const Title = styled.span`
  ${(props) =>
    fontStyleMaker(
      props.theme,
      'body',
      'regular',
      'xs',
      'brand.secondary.dark',
    )};
`
const CollapseContainer = (props) => {
  const [opened, setOpened] = useState(false)
  return (
    <Container>
      <Header onClick={() => setOpened(!opened)}>
        <Title>{props.title}</Title>
        <Button>
          <Icon
            path={icons['chevron-down']}
            size="16px"
            rotate={opened ? 180 : 0}
          />
        </Button>
      </Header>
      <UnmountClosed isOpened={opened}>
        <Divider horizontal />
        <Body>{props.children}</Body>
      </UnmountClosed>
    </Container>
  )
}

export default CollapseContainer

CollapseContainer.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
}
