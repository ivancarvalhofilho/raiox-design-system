/**
 *
 * Table
 *
 */

import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import InfiniteScroll from 'react-infinite-scroll-component'
import theme from '../../../tokens/js'
import Icon from './Icon'
import icons from '../../../tokens/js/icons'
import clone from 'ramda/src/clone'
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
    color: ${props => props.theme.colors.neutral.dark.base};
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
  color: ${props => props.theme.colors.neutral.dark.base};
  grid-template-columns: ${props =>
    (props.color ? '8px ' : '') +
    props.cols
      .splice(props.color ? 1 : 0)
      .reduce(
        (x, y, index) => `${x} minmax(${props.colHeadersWidth[index]}px,auto)`,
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
  color: ${props => props.theme.colors.neutral.dark.base};
  grid-template-columns: ${props =>
    (props.color ? '8px ' : '') +
    props.cols.reduce(
      (x, y, index) => `${x} minmax(${props.colHeadersWidth[index]}px,auto)`,
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
  font-family: ${props => props.theme.fonts.family.body};
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
    `${props.theme.styles.border.width.hairline} solid ${props.theme.colors.neutral.dark['03']}`};
  overflow: ${props => props.optional && 'hidden'};
  padding-right: ${props => !props.optional && props.paddingScroll && '13px'};
  background-color: #f2f5f7;
  min-width: ${props => !props.optional && 'fit-content'};
  width: ${props => (!props.optional && props.paddingScroll ? '101%' : '100%')};
  color: ${props => props.theme.colors.neutral.dark.base};
  grid-template-columns: ${props =>
    (props.color ? '8px ' : '') +
    props.colsWidth.reduce(
      (x, y, index) => `${x} minmax(${props.colsWidth[index]}px, auto)`,
      '',
    )};
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

const SpanValue = styled.span``
const Children = styled.div`
  position: absolute;
  transition: 2s;
  cursor: auto;
  border-left: 8px ${props => props.color} solid;
  left: 0;
  width: 99.5%;
  top: ${props => props.top};
`
const Collapse = styled.div`
  padding: 0 20px;
  cursor: pointer;
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
    setTimeout(() => {
      handleResize()
    }, 0)
  }, [])

  const handleResize = () => {
    setColsWidth(items.current.map(item => item.clientWidth))
    setColHeadersWidth(
      itemsHeader.current
        .map(item => item.lastChild.clientWidth)
        .filter(item => item > 0),
    )
  }

  useEffect(() => {
    setColsWidth(items.current.map(item => item.clientWidth))
    setColHeadersWidth(
      itemsHeader.current
        .map(item => item.lastChild.clientWidth)
        .filter(item => item > 0),
    )
  }, [items, itemsHeader])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  console.log(colHeadersWidth)
  return (
    <div>
      <DisplayGrid>
        {props.complete && (
          <ContainerHeader
            optional
            colsWidth={colsWidth}
            cols={colsOptional}
            ref={optionalHeader}
            color={hasColor}
          >
            {colsOptional.map((key, indexCol) => (
              <Column key={indexCol} rows={[0]} size={28}>
                <Row
                  first={indexCol === 0}
                  clicable
                  ref={ref => {
                    itemsHeader.current[indexCol] = ref
                  }}
                  last={indexCol === cols.length}
                  key={indexCol}
                  justify={props.data[key].justify}
                  onClick={() => {
                    props.data[key].ordenable && props.onClickToOrder(key)
                  }}
                  border
                  color={theme.colors.neutral.light['02']}
                  title={props.data[key].title}
                >
                  <Value>
                    {props.data[key].title}
                    {props.data[key].ordenable && (
                      <Icon
                        path={
                          props.orderBy !== key
                            ? theme.icons['arrow-horizontal']
                            : props.order === 'DESC'
                            ? theme.icons['arrow-up']
                            : theme.icons['arrow-down']
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
          color={hasColor}
          colsWidth={colsWidth}
          paddingScroll
          cols={props.complete ? cols : colsOriginalWithoutColor}
          width={content.current && `${content.current.clientWidth + 13}px`}
        >
          {(props.complete ? cols : colsOriginal).map((key, indexCol) => (
            <Column key={indexCol} rows={[0]} size={28}>
              <Row
                first={indexCol === 0}
                ref={ref => {
                  itemsHeader.current[indexCol] = ref
                }}
                justify={props.data[key].justify}
                last={indexCol === cols.length}
                key={indexCol}
                clicable
                onClick={() => {
                  props.data[key].ordenable && props.onClickToOrder(key)
                }}
                border
                color={theme.colors.neutral.light['02']}
                title={props.data[key].title}
              >
                <Value>
                  {props.data[key].title}
                  {props.data[key].ordenable && (
                    <Icon
                      style={{ padding: '0 5px' }}
                      appearance="dark"
                      size="10px"
                      path={
                        props.orderBy !== key
                          ? theme.icons['arrow-horizontal']
                          : props.order === 'DESC'
                          ? theme.icons['arrow-up']
                          : theme.icons['arrow-down']
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
                optional
                colHeadersWidth={colHeadersWidth}
                color={hasColor}
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
                        key={indexRow}
                        justify={props.data[key].justify}
                        border={indexRow !== props.data[key].values.length - 1}
                        first={indexCol === 0}
                        last={indexCol === cols.length}
                        ref={ref => {
                          indexRow === 0 && key !== 'colors'
                            ? (items.current[indexCol] = ref)
                            : null
                        }}
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
              ref={scrollableDiv}
              style={{
                width: '100%',
                minWidth: 'fit-content',
              }}
            >
              <ContainerInfinite
                cols={props.complete ? cols : colsOriginalWithoutColor}
                ref={content}
                style={{ transition: 'all .3s ease' }}
                className="scroll custom-scrollbar"
                color={hasColor}
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
                        path={icons.loading}
                        size="16px"
                        spin
                        appearance={theme.colors.neutral.light['02']}
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
                      <>
                        <Row
                          children={props.indexRowOpened === indexRow}
                          key={indexRow}
                          justify={props.data[key].justify}
                          ref={ref => {
                            indexRow === 0 && key !== 'colors'
                              ? (items.current[indexCol] = ref)
                              : null
                          }}
                          clicable={props.isMultiple}
                          onClick={() =>
                            props.isMultiple && props.onRowClick(indexRow)
                          }
                          color={
                            indexCol === 0 &&
                            props.data.colors &&
                            props.data.colors.values[indexRow]
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
                                      path={icons.loading}
                                      size="20px"
                                    />
                                  </LoaderContainer>
                                )}
                              </Children>
                            )}
                        </Row>
                      </>
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
  complete: PropTypes.bool,
  data: PropTypes.object,
  dispatch: PropTypes.any,
  height: PropTypes.string,
  indexRowOpened: PropTypes.number,
  onClickToOrder: PropTypes.func,
  onEndScroll: PropTypes.func,
  onRowClick: PropTypes.func,
  order: PropTypes.func,
  orderBy: PropTypes.string,
  subdata: PropTypes.array,
  total: PropTypes.number,
}

export default Table
