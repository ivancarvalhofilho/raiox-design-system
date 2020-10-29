import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Icon from './Icon'
import icons from '../../../tokens/js/icons'
import styled from 'styled-components'
import fontStyleMaker from '../utils/FontUtil'
import { UnmountClosed } from 'react-collapse'

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Button = styled.div`
  cursor: pointer;
`
const Container = styled.div`
  border-radius: ${(props) => props.theme.styles.border.radius.xs};
  box-shadow: ${(props) => props.theme.styles.shadow.level0};
  padding: 16px;
  background: white;
`
const Body = styled(UnmountClosed)``
const Title = styled.span`
  ${(props) =>
    fontStyleMaker(
      props.theme,
      'body',
      'regular',
      'sm',
      'brand.secondary.dark',
    )};
`
const CollapseContainer = (props) => {
  const [opened, setOpened] = useState(false)
  return (
    <Container>
      <Header>
        <Title>{props.title}</Title>
        <Button onClick={() => setOpened(!opened)}>
          <Icon
            path={icons['chevron-down']}
            size="16px"
            rotate={opened ? 180 : 0}
          />
        </Button>
      </Header>
      <Body isOpened={opened}>{props.children}</Body>
    </Container>
  )
}

export default CollapseContainer

CollapseContainer.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
}
