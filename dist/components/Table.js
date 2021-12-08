import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import InfiniteScroll from 'react-infinite-scroll-component'
import { Tokens } from '../tokens'
import {Icon} from './Icon'

const LoaderContainer = styled.div`
  display: flex;
  width: ${props => props.cols * '100'}%;
  justify-content: center;
  flex-direction: column;
  min-width: fit-content;
  height: 60px;
  align-items: center;
  background-image: linear-gradient(to bottom, transparent, white);

  > p {
    color: ${Tokens.colors.neutral.dark.base};
    margin: 0;
  }

  > svg {
    margin-top: 10px;
  }
`
const Container = styled.div`
  display: inline-grid;
  position: relative;
  margin-right: ${props => props.optional && '-12px'};
  overflow: overlay;
  font-size: 14px;
  min-width: ${props => !props.optional && 'fit-content'};
  width: 100%;
  height: auto !important;
  max-height: ${props => props.maxheight};
  color: ${Tokens.colors.neutral.dark.base};
  grid-template-columns: ${props =>
    (props.hasColor ? '8px ' : '') +
    props.cols
      .splice(props.color ? 1 : 0)
      .reduce(
        (x, y, index) =>
          `${x} minmax(${
            props.colHeadersWidth[index]
              ? `${props.colHeadersWidth[index]}px`
              : 'auto'
          },auto)`,
        '',
      )};
`
const ContainerInfinite = styled(InfiniteScroll)`
  display: inline-grid;
  position: relative;
  margin-right: ${props => props.optional && '-12px'};
  overflow: auto;
  font-size: 14px;
  height: auto !important;
  max-height: ${props => props.maxheight};
  min-width: ${props => !props.optional && 'fit-content'};
  border-bottom: 1px solid #e7e7e7;
  width: 100%;
  color: ${Tokens.colors.neutral.dark.base};
  grid-template-columns: ${props =>
    (props.hasColor ? '8px ' : '') +
    props.cols
      .splice(props.color ? 1 : 0)
      .reduce(
        (x, y, index) =>
          `${x} minmax(${
            props.colHeadersWidth[index]
              ? `${props.colHeadersWidth[index]}px`
              : 'auto'
          },auto)`,
        '',
      )};
`
const Scroll = styled.div`
  background: white;
  position: relative;
`
const DisplayGrid = styled.div`
  display: flex;
  flex-direction: row;
  font-family: ${Tokens.fonts.family.body};
  flex: 1;

  .custom-scrollbar,
  .select__menu-list {
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar {
      width: 14px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(216, 216, 216, 1);
      border-radius: 20px;
      border: 4px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
      width: 4px;
    }
  }
`
const ContainerHeader = styled.div`
  display: inline-grid;
  font-size: 14px;
  border: ${props =>
    `${Tokens.border.width.hairline} solid ${Tokens.colors.neutral.dark['03']}`};
  overflow: ${props => props.optional && 'hidden'};
  background-color: #f2f5f7;
  min-width: ${props => !props.optional && 'fit-content'};
  width: 100%;
  color: ${Tokens.colors.neutral.dark.base};
  grid-template-columns: ${props =>
    props.colsWidth.length > 0
      ? (props.hasColor ? '8px ' : '') +
        props.colsWidth.reduce(
          (x, y, index) =>
            props.colsWidth[index] ? `${x} ${props.colsWidth[index]}px` : x,
          '',
        )
      : `${props.hasColor ? '8px ' : ''} repeat(${props.cols.length}, auto)`};
`
const Column = styled.div`
  display: inline-grid;
  transition: 2s;
  grid-template-rows: ${props =>
    props.rows.reduce(
      (x, y, index) =>
        `${x} ${`${(props.size || 48) +
          (index === props.indexRowOpened && props.indexRowOpened != null
            ? props.childrenHeight
            : 0)}px`}`,
      '',
    )};
`

const Row = styled.div`
  display: flex;
  //width: 100%;
  align-items: center;
  justify-content: ${props =>
    props.justify === 'right'
      ? 'flex-end'
      : (props.justify === 'left' && 'flex-start') || 'center'};
  cursor: ${props => props.clicable && 'pointer'};
  border-bottom: ${props => props.border && '1px solid #e7e7e7'};
  background-color: ${props => props.color || 'white'};
  padding: 5px;
  max-height: 48px;
  padding-left: ${props => props.first && '10%'};
  padding-right: ${props => props.last && '10%'};
`

const Value = styled.div`
  white-space: nowrap;
  display: flex;
  margin: auto 0;
  align-items: center;
`

const SpanValue = styled.span`
  display: flex;
  align-items: center;
`
const Children = styled.div`
  position: absolute;
  transition: 2s;
  cursor: auto;
  border-left: 8px ${props => props.color} solid;
  left: 0;
  width: 100%;
  top: ${props => props.top};
`
const Collapse = styled.div`
  padding: 0 20px;
  cursor: pointer;
  display: flex;
`

function Table(props) {
  const hasColor = Object.keys(props.data).find(key => key === 'colors')
  const keys = Object.keys(props.data)
  const refChildren = useRef()
  const indexOptional =
    keys.findIndex(key => props.data[key].optional) +
    keys.filter(key => props.data[key].optional).length
  const colsOriginal = keys.filter(key => !props.data[key].optional)
  const colsOriginalWithoutColor = colsOriginal.filter(key => key !== 'colors')
  const cols = keys.slice(indexOptional, keys.length)
  const colsOptional = keys.slice(0, indexOptional)
  const optionalHeader = useRef()
  const optionalContent = useRef()
  const content = useRef()
  const scrollableDiv = useRef()

  const [optionalMouse, setOptionalMouse] = useState(false)

  const [childrenSize, setChildrenSize] = useState(0)
  const items = useRef([])
  const itemsHeader = useRef([])
  const [colsWidth, setColsWidth] = useState([])
  const [colHeadersWidth, setColHeadersWidth] = useState([])

  useEffect(() => {
    setChildrenSize(refChildren.current ? refChildren.current.clientHeight : 0)
    handleResize()
  }, [props.children])

  useEffect(() => {
    handleResize()
  }, [props.data])

  const handleResize = () => {
    setColHeadersWidth(
      itemsHeader.current
        .map((item, index) => {
          if (hasColor && index === 0) {
            return null
          }
          return item && item.clientWidth
        })
        .filter(item => item !== null),
    )
  }

  useEffect(() => {
    setColsWidth(items.current.map(item => item && item.clientWidth))
  }, [colHeadersWidth])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <DisplayGrid>
        {props.complete && (
          <ContainerHeader
            optional
            colsWidth={colsWidth}
            cols={colsOptional}
            ref={optionalHeader}
            hasColor={hasColor}
          >
            {colsOptional.map((key, indexCol) => (
              <Column key={indexCol} rows={[0]} size={28}>
                <Row
                  first={indexCol === 0}
                  clicable
                  last={indexCol === cols.length}
                  key={indexCol}
                  id={`headerOptional${indexCol}`}
                  justify={props.data[key].justify}
                  onClick={() => {
                    props.data[key].ordenable && props.onClickToOrder(key)
                  }}
                  border
                  color={Tokens.colors.neutral.light['02']}
                  title={props.data[key].title}
                >
                  <Value
                    ref={ref => {
                      itemsHeader.current[indexCol] = ref
                    }}
                  >
                    {props.data[key].title}
                    {props.data[key].ordenable && (
                      <Icon
                        path={
                          props.orderBy !== key
                            ? Tokens.icons['arrow-horizontal']
                            : props.order === 'DESC'
                            ? Tokens.icons['arrow-up']
                            : Tokens.icons['arrow-down']
                        }
                      />
                    )}
                  </Value>
                </Row>
              </Column>
            ))}
          </ContainerHeader>
        )}
        <ContainerHeader
          hasColor={hasColor}
          colsWidth={colsWidth}
          paddingScroll
          cols={props.complete ? cols : colsOriginalWithoutColor}
        >
          {(props.complete ? cols : colsOriginal).map((key, indexCol) => (
            <Column key={indexCol} rows={[0]} size={28}>
              <Row
                first={indexCol === 0}
                justify={props.data[key].justify}
                last={indexCol === cols.length}
                key={indexCol}
                clicable
                id={`header${indexCol}`}
                onClick={() => {
                  props.data[key].ordenable && props.onClickToOrder(key)
                }}
                border
                color={Tokens.colors.neutral.light['02']}
                title={props.data[key].title}
              >
                <Value
                  ref={ref => {
                    itemsHeader.current[indexCol] = ref
                  }}
                >
                  {props.data[key].title}
                  {props.data[key].ordenable && (
                    <Icon
                      style={{ padding: '0 5px' }}
                      appearance="dark"
                      size="10px"
                      path={
                        props.orderBy !== key
                          ? Tokens.icons['arrow-horizontal']
                          : props.order === 'DESC'
                          ? Tokens.icons['arrow-up']
                          : Tokens.icons['arrow-down']
                      }
                    />
                  )}
                </Value>
              </Row>
            </Column>
          ))}
        </ContainerHeader>
      </DisplayGrid>
      {props.data[keys[0]] && props.data[keys[0]].values && (
        <Scroll>
          <DisplayGrid>
            {props.complete && (
              <Container
                id="containerOptional"
                optional
                colHeadersWidth={colHeadersWidth}
                hasColor={hasColor}
                maxheight={props.height}
                cols={colsOptional}
                ref={optionalContent}
                className="custom-scrollbar"
                onMouseEnter={() => {
                  setOptionalMouse(false)
                }}
                onScroll={e => {
                  optionalHeader.current.scrollLeft =
                    optionalContent.current.scrollLeft

                  if (!optionalMouse) {
                    content.current.el.scrollTop =
                      optionalContent.current.scrollTop
                  }
                }}
              >
                {colsOptional.map((key, indexCol) => (
                  <Column
                    indexRowOpened={props.indexRowOpened}
                    childrenHeight={
                      childrenSize > 30
                        ? childrenSize
                        : props.children
                        ? props.childrenSize
                        : 60
                    }
                    key={indexCol}
                    rows={props.data[key].values}
                  >
                    {props.data[key].values.map((value, indexRow) => (
                      <Row
                        id={`item${indexCol}${indexRow}`}
                        key={indexRow}
                        justify={props.data[key].justify}
                        border={indexRow !== props.data[key].values.length - 1}
                        first={indexCol === 0}
                        last={indexCol === cols.length}
                        ref={ref =>
                          indexRow === 0 && key !== 'colors'
                            ? (items.current[indexCol] = ref)
                            : null
                        }
                      >
                        <SpanValue>
                          {props.data[key].template
                            ? props.data[key].template(
                                value,
                                props.data[key].params &&
                                  props.data[key].params.map(
                                    param =>
                                      props.data[param] &&
                                      props.data[param].values[indexRow],
                                  ),
                                props.dispatch,
                                props.subdata && props.subdata[indexRow],
                              )
                            : value}
                        </SpanValue>
                      </Row>
                    ))}
                  </Column>
                ))}
              </Container>
            )}
            <div
              onMouseEnter={() => {
                setOptionalMouse(true)
              }}
              id="scrollableDiv"
              ref={scrollableDiv}
              style={{
                width: '100%',
                minWidth: 'fit-content',
              }}
            >
              <ContainerInfinite
                id="container"
                cols={props.complete ? cols : colsOriginalWithoutColor}
                ref={content}
                style={{ transition: 'all .3s ease' }}
                className="scroll custom-scrollbar"
                hasColor={hasColor}
                hasChildren
                colHeadersWidth={colHeadersWidth}
                maxheight={props.height}
                height={props.height}
                scrollThreshold="20px"
                scrollableTarget="scrollableDiv"
                dataLength={props.data[keys[0]].values.length}
                next={() => props.onEndScroll()}
                hasMore={props.total !== props.data[keys[0]].values.length}
                onScroll={() => {
                  if (props.complete && optionalMouse) {
                    optionalContent.current.scrollTop =
                      content.current.el.scrollTop
                  }
                }}
                loader={
                  <div style={{ position: 'relative' }}>
                    <LoaderContainer
                      cols={
                        props.complete
                          ? cols.length
                          : colsOriginal.length - (props.isMultiple ? 1 : 2)
                      }
                    >
                      <p style={{ paddingBottom: '10px' }}>Carregando</p>
                      <Icon
                        className="rotating"
                        path={Tokens.icons.loading}
                        size="16px"
                        spin
                        appearance={Tokens.colors.neutral.light['02']}
                      />
                    </LoaderContainer>
                  </div>
                }
              >
                {(props.complete ? cols : colsOriginal).map((key, indexCol) => (
                  <Column
                    childrenHeight={
                      childrenSize > 30
                        ? childrenSize
                        : props.children
                        ? props.childrenSize
                        : 60
                    }
                    key={indexCol}
                    rows={props.data[key].values}
                    indexRowOpened={props.indexRowOpened}
                  >
                    {props.data[key].values.map((value, indexRow) => (
                      <React.Fragment key={indexRow}>
                        <Row
                          id={`item${indexCol}${indexRow}`}
                          children={props.indexRowOpened === indexRow}
                          justify={props.data[key].justify}
                          ref={ref =>
                            indexRow === 0 && key !== 'colors'
                              ? (items.current[indexCol] = ref)
                              : null
                          }
                          clicable={props.isMultiple}
                          onClick={() =>
                            props.isMultiple && props.onRowClick(indexRow)
                          }
                          color={
                            indexCol === 0 && props.data.colors
                              ? props.data.colors.values[indexRow]
                              : null
                          }
                          border={
                            indexRow !== props.data[key].values.length - 1
                          }
                          first={indexCol === 0}
                          last={indexCol === cols.length}
                        >
                          {key !== 'colors' && (
                            <SpanValue>
                              {props.data[key].template
                                ? props.data[key].template(
                                    value,
                                    props.data[key].params &&
                                      props.data[key].params.map(
                                        param =>
                                          props.data[param] &&
                                          props.data[param].values[indexRow],
                                      ),
                                    props.dispatch,
                                    props.subdata && props.subdata[indexRow],
                                  )
                                : value}
                            </SpanValue>
                          )}
                          {indexCol === colsOriginalWithoutColor.length &&
                            props.isMultiple && (
                              <Collapse>
                                <Icon
                                  size="md"
                                  name={
                                    props.indexRowOpened === indexRow
                                      ? 'chevron-up'
                                      : 'chevron-down'
                                  }
                                />
                              </Collapse>
                            )}
                          {indexCol === colsOriginalWithoutColor.length &&
                            props.indexRowOpened === indexRow && (
                              <Children
                                id="children"
                                color={props.data.colors.values[indexRow]}
                                onClick={e => {
                                  e.stopPropagation()
                                }}
                                ref={refChildren}
                                top={`${(props.indexRowOpened + 1) * 48}px`}
                              >
                                {props.children || (
                                  <LoaderContainer style={{ display: 'flex' }}>
                                    <Icon
                                      spin
                                      path={Tokens.icons.loading}
                                      size="20px"
                                    />
                                  </LoaderContainer>
                                )}
                              </Children>
                            )}
                        </Row>
                      </React.Fragment>
                    ))}
                  </Column>
                ))}
                <div id="scrollableDiv" />
              </ContainerInfinite>
            </div>
          </DisplayGrid>
        </Scroll>
      )}
    </div>
  )
}

Table.propTypes = {
  children: PropTypes.any,
  childrenSize: PropTypes.any,
  complete: PropTypes.bool,
  data: PropTypes.object,
  dispatch: PropTypes.any,
  height: PropTypes.string,
  indexRowOpened: PropTypes.number,
  isMultiple: PropTypes.any,
  onClickToOrder: PropTypes.func,
  onEndScroll: PropTypes.func,
  onRowClick: PropTypes.func,
  order: PropTypes.string,
  orderBy: PropTypes.string,
  subdata: PropTypes.array,
  total: PropTypes.number,
}

export { Table }
