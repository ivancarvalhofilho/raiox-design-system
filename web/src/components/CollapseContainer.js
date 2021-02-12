import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Icon from './Icon'
import styled from 'styled-components'
import { UnmountClosed } from 'react-collapse'
import {
  Container as StyledContainer,
  Divider as DividerStyled,
} from './StyledComponents'
import Tokens from "../../tokens";
import {fontStyleMaker} from "../utils/FontUtil";

const Header = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Button = styled.div`
  display: flex;
  padding-left: ${Tokens.spacing.inline.nano};
`

const Divider = styled(DividerStyled)`
  margin-top: ${Tokens.spacing.stack.xxxs};
`

const Container = styled(StyledContainer)`
  box-shadow: ${Tokens.shadow.level0};
  padding: ${Tokens.spacing.inset.xs};
  background: white;
`
const Body = styled.div`
  margin-top: ${Tokens.spacing.stack.xxxs};
  ${fontStyleMaker({
    Tokens,
    fontFamily: "body",
    fontWeight: "regular",
    fontSize: "xs"
  })};
  color: ${Tokens.colors.neutral.dark.base};
`
const Title = styled.span`
  ${fontStyleMaker({
    Tokens,
    fontFamily: "body",
    fontWeight: "regular",
    fontSize: "xs"
  })};
  color: ${Tokens.colors.brand.secondary.dark};
`
const CollapseContainer = props => {
  const [opened, setOpened] = useState(false)
  return (
    <Container>
      <Header id="header" onClick={() => setOpened(!opened)}>
        <Title>{props.title}</Title>
        <Button>
          <Icon
            path={Tokens.icons['chevron-down']}
            size="16px"
            rotate={opened ? 180 : 0}
          />
        </Button>
      </Header>
      <UnmountClosed isOpened={opened}>
        <Divider horizontal />
        <Body id="children">{props.children}</Body>
      </UnmountClosed>
    </Container>
  )
}

export default CollapseContainer

CollapseContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
}
