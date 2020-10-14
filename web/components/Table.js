/**
 *
 * Table
 *
 */

import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from '@mdi/react'
import {
  mdiChevronDown,
  mdiChevronUp,
  mdiReload,
  mdiUnfoldMoreHorizontal,
} from '@mdi/js'

import InfiniteScroll from 'react-infinite-scroll-component'
// import styled from 'styled-components';

const LoaderContainer = styled.div`
  position: absolute;
  bottom: 0;
  align-items: center;
  flex-direction: column;
  width: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(to bottom, transparent, white);

  > p {
    color: #7f7f7f;
    margin: 0;
  }

  > svg {
    margin-top: 10px;
  }
`
const Container = styled.div`
  display: grid;
  margin-right: ${(props) => props.optional && '-12px'};
  overflow: overlay;
  font-size: 14px;
  min-width: ${(props) => !props.optional && 'fit-content'};
  border-bottom: 1px solid #e7e7e7;
  width: 100%;
  height: auto !important;
  max-height: ${(props) => props.maxheight};
  box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.2);
  color: ${(props) => props.theme.colors.neutral.dark.base};
  grid-template-columns: ${(props) => props.cols.reduce((x) => `${x} 1fr`, '')};
`
const ContainerInfinite = styled(InfiniteScroll)`
  display: grid;
  margin-right: ${(props) => props.optional && '-12px'};
  overflow: auto;
  font-size: 14px;
  height: auto !important;
  max-height: ${(props) => props.maxheight};
  min-width: ${(props) => !props.optional && 'fit-content'};
  border-bottom: 1px solid #e7e7e7;
  width: 100%;
  box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.2);
  color: ${(props) => props.theme.colors.neutral.dark.base};
  grid-template-columns: ${(props) => props.cols.reduce((x) => `${x} 1fr`, '')};
`
const Scroll = styled.div`
  background: white;
  position: relative;
`
const DisplayGrid = styled.div`
  display: flex;
  flex-direction: row;
  font-family: ${(props) => props.theme.fonts.family.body};
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
  display: grid;
  font-size: 14px;
  border-bottom: 1px solid #e7e7e7;
  box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.2);
  overflow: ${(props) => props.optional && 'hidden'};
  padding-right: ${(props) => !props.optional && props.paddingScroll && '13px'};
  background-color: #f2f5f7;
  min-width: ${(props) => !props.optional && 'fit-content'};
  width: ${(props) =>
    !props.optional && props.paddingScroll ? '101%' : '100%'};
  color: ${(props) => props.theme.colors.neutral.dark.base};
  grid-template-columns: ${(props) => props.cols.reduce((x) => `${x} 1fr`, '')};
`
const Column = styled.div`
  display: grid;
  grid-template-rows: ${(props) =>
    props.rows.reduce((x) => `${x} ${props.size || '55px'}`, '')};
`

const Row = styled.div`
  display: inherit;
  height: 100%;
  cursor: ${(props) => props.onClick && 'pointer'};
  border-bottom: ${(props) => props.border && '1px solid #e7e7e7'};
  background-color: ${(props) => props.color || 'white'};
  padding: 5px;
  padding-left: ${(props) => props.first && '10%'};
  padding-right: ${(props) => props.last && '10%'};
`

const Value = styled.div`
  white-space: nowrap;
  margin: auto 0;
  min-width: 100px;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: ${(props) => props.justify || 'center'};
`
function Table(props) {
  const keys = Object.keys(props.data)
  const indexOptional =
    keys.findIndex((key) => props.data[key].optional) +
    keys.filter((key) => props.data[key].optional).length
  const colsOriginal = keys.filter((key) => !props.data[key].optional)
  const cols = keys.slice(indexOptional, keys.length)
  const colsOptional = keys.slice(0, indexOptional)
  const optionalHeader = useRef()
  const optionalContent = useRef()
  const content = useRef()
  const scrollableDiv = useRef()

  const [optionalMouse, setOptionalMouse] = useState(false)

  return (
    <div>
      <div>
        <DisplayGrid>
          {props.complete && (
            <ContainerHeader optional cols={colsOptional} ref={optionalHeader}>
              {colsOptional.map((key, indexCol) => (
                <Column key={indexCol} rows={[0]} size="32px">
                  <Row
                    first={indexCol === 0}
                    last={indexCol === cols.length}
                    key={indexCol}
                    onClick={() => {
                      props.data[key].ordenable && props.onClickToOrder(key)
                    }}
                    border
                    color="#f2f5f7"
                    title={props.data[key].title}
                  >
                    <Value justify={props.data[key].justify}>
                      {props.data[key].title}
                      {props.data[key].ordenable && (
                        <Icon
                          path={
                            props.orderBy !== key
                              ? mdiUnfoldMoreHorizontal
                              : props.order === 'ASC'
                              ? mdiChevronDown
                              : mdiChevronUp
                          }
                          size={0.6}
                        />
                      )}
                    </Value>
                  </Row>
                </Column>
              ))}
            </ContainerHeader>
          )}
          <ContainerHeader
            paddingScroll={
              scrollableDiv.current &&
              scrollableDiv.current.firstChild.firstChild.firstChild
                .scrollHeight > scrollableDiv.current.clientHeight
            }
            cols={props.complete ? cols : colsOriginal}
            width={content.current && `${content.current.clientWidth + 13}px`}
          >
            {(props.complete ? cols : colsOriginal).map((key, indexCol) => (
              <Column key={indexCol} rows={[0]} size="32px">
                <Row
                  first={indexCol === 0}
                  last={indexCol === cols.length}
                  key={indexCol}
                  onClick={() => {
                    props.data[key].ordenable && props.onClickToOrder(key)
                  }}
                  border
                  color="#f2f5f7"
                  title={props.data[key].title}
                >
                  <Value justify={props.data[key].justify}>
                    {props.data[key].title}
                    {props.data[key].ordenable && (
                      <Icon
                        path={
                          props.orderBy !== key
                            ? mdiUnfoldMoreHorizontal
                            : props.order === 'ASC'
                            ? mdiChevronDown
                            : mdiChevronUp
                        }
                        size={0.6}
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
                  maxheight={props.height}
                  cols={colsOptional}
                  ref={optionalContent}
                  className="custom-scrollbar"
                  onMouseEnter={() => {
                    setOptionalMouse(false)
                  }}
                  onScroll={(e) => {
                    optionalHeader.current.scrollLeft =
                      optionalContent.current.scrollLeft

                    if (!optionalMouse) {
                      content.current.el.scrollTop =
                        optionalContent.current.scrollTop
                    }
                  }}
                >
                  {colsOptional.map((key, indexCol) => (
                    <Column key={indexCol} rows={props.data[key].values}>
                      {props.data[key].values.map((value, indexRow) => (
                        <Row
                          key={indexRow}
                          border={
                            indexRow !== props.data[key].values.length - 1
                          }
                          first={indexCol === 0}
                          last={indexCol === cols.length}
                        >
                          <Value justify={props.data[key].justify}>
                            {props.data[key].template(
                              value,
                              props.data[key].params &&
                                props.data[key].params.map(
                                  (param) =>
                                    props.data[param] &&
                                    props.data[param].values[indexRow],
                                ),
                              props.dispatch,
                              props.subdata && props.subdata[indexRow],
                            )}
                          </Value>
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
                  cols={props.complete ? cols : colsOriginal}
                  ref={content}
                  style={{ transition: 'all .3s ease' }}
                  className="scroll custom-scrollbar"
                  hasChildren
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
                    <LoaderContainer>
                      <p>Carregando</p>
                      <Icon
                        className="rotating"
                        path={mdiReload}
                        size={1}
                        spin
                        color="#CECFCF"
                      />
                    </LoaderContainer>
                  }
                >
                  {(props.complete ? cols : colsOriginal).map(
                    (key, indexCol) => (
                      <Column key={indexCol} rows={props.data[key].values}>
                        {props.data[key].values.map((value, indexRow) => (
                          <Row
                            key={indexRow}
                            border={
                              indexRow !== props.data[key].values.length - 1
                            }
                            first={indexCol === 0}
                            last={indexCol === cols.length}
                          >
                            <Value justify={props.data[key].justify}>
                              {props.data[key].template(
                                value,
                                props.data[key].params &&
                                  props.data[key].params.map(
                                    (param) =>
                                      props.data[param] &&
                                      props.data[param].values[indexRow],
                                  ),
                                props.dispatch,
                                props.subdata && props.subdata[indexRow],
                              )}
                            </Value>
                          </Row>
                        ))}
                      </Column>
                    ),
                  )}
                  <div style={{ position: 'relative' }}>
                    <div id="scrollableDiv" />
                  </div>
                </ContainerInfinite>
              </div>
            </DisplayGrid>
          </Scroll>
        )}
      </div>
    </div>
  )
}

Table.propTypes = {
  complete: PropTypes.bool,
  data: PropTypes.object,
  dispatch: PropTypes.any,
  height: PropTypes.any,
  onClickToOrder: PropTypes.func,
  onEndScroll: PropTypes.func,
  order: PropTypes.any,
  orderBy: PropTypes.any,
  subdata: PropTypes.any,
  theme: PropTypes.any,
  total: PropTypes.any,
}

export default Table
