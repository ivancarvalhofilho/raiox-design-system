import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'
import { Icon } from './Icon'
import styled from 'styled-components'
import { UnmountClosed } from 'react-collapse'
import {
  Container as StyledContainer,
  Divider as DividerStyled,
} from './StyledComponents'
import { Tokens } from "../tokens";
import { fontStyleMaker, handleOutsideDivClick } from "../utils";

const Container = styled(StyledContainer)`
  box-shadow: ${Tokens.shadow.level0};
  padding: 0;
  background: white;
  margin-top: ${Tokens.spacing.inline.nano};
  margin-bottom: ${Tokens.spacing.inline.nano};

  ${({ borderLeft }) => borderLeft &&
    `
    &#mainContainer {
      border-left: 6px solid ${borderLeft};
    }
    `
  }
`
const Header = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${Tokens.spacing.inset.xs};
`
const Button = styled.div`
  display: flex;
  padding-left: ${Tokens.spacing.inline.nano};
`

const Divider = styled(DividerStyled)`
  width: auto;
  margin: auto 16px;
  position: relative;
`
const Body = styled.div`
  ${fontStyleMaker({
  fontFamily: "body",
  fontWeight: "regular",
  fontSize: "xs"
})};
  line-height: 21px;
  color: ${Tokens.colors.neutral.dark.base};
  padding: ${Tokens.spacing.inset.xs};
`
const Title = styled.span`
  ${fontStyleMaker({
  fontFamily: "body",
  fontWeight: "regular",
  fontSize: "xs",
})};
  line-height: 21px;
  color: ${Tokens.colors.brand.secondary.dark};
`
const CollapseContainer = props => {
  const [opened, setOpened] = useState(false)

  const openRef = useRef()
  openRef.current = opened

  const wrapperRef = handleOutsideDivClick(
    () => {
      if (!props.collapseOnOutsideClick) return
      if (openRef.current) {
        setTimeout(() => {
          setOpened(false)
        }, 100)
      }
    },
  )

  const handleClick = (e) => {
    setOpened(!opened)
    props.onClick && props.onClick(e)
  }

  return (
    <Container ref={wrapperRef} borderLeft={props.borderLeft} className={props.className} id='mainContainer'>
      <Header id="header" onClick={handleClick}>
        {props.customHeader ? props.customHeader : <Title>{props.title}</Title>}
        <Button>
          <Icon
            path={Tokens.icons['chevron-down']}
            size="16px"
            rotate={opened ? 180 : 0}
            appearance={opened ? 'primary' : 'default'}
          />
        </Button>
      </Header>
      <UnmountClosed isOpened={opened} style={{ padding: 0 }}>
        <Divider horizontal />
        <Body id="children">{props.children}</Body>
      </UnmountClosed>
    </Container>
  )
}

export { CollapseContainer }

CollapseContainer.defaultProps = {
  collapseOnOutsideClick: true
}

CollapseContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.any,
  ]),
  title: PropTypes.string,
  onClick: PropTypes.func,
  customHeader: PropTypes.object,
  borderLeft: PropTypes.string,
  className: PropTypes.string,
  collapseOnOutsideClick: PropTypes.bool
}
