'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var _Tab = _interopRequireDefault(require('./Tab'))

var _styledComponents = _interopRequireDefault(require('styled-components'))

var _js = _interopRequireDefault(require('../../../tokens/theme'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([
    '\n  width: ',
    '%;\n  height: ',
    'px;\n  border-radius: ',
    ';\n  background-color: ',
    ';\n  transform: translate(',
    '%, 0);\n  transition: transform 0.3s linear;\n',
  ])

  _templateObject3 = function _templateObject3() {
    return data
  }

  return data
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(['\n  opacity: ', ';\n  cursor: ', ';\n'])

  _templateObject2 = function _templateObject2() {
    return data
  }

  return data
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  display: flex;\n  justify-content: space-around;\n  pointer-events: ',
    ';\n',
  ])

  _templateObject = function _templateObject() {
    return data
  }

  return data
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0)
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }),
  )
}

var TabsContainer = _styledComponents.default.div(_templateObject(), function(
  props,
) {
  return props.disabled && 'none'
})

var Container = _styledComponents.default.div(
  _templateObject2(),
  function(props) {
    return props.disabled && '0.5'
  },
  function(props) {
    return props.disabled ? 'not-allowed' : 'pointer'
  },
)

var Bar = _styledComponents.default.div(
  _templateObject3(),
  function(props) {
    return props.width
  },
  function(props) {
    return props.height || 4
  },
  function(props) {
    return props.rounded && '4px 4px 0px 0px'
  },
  function(props) {
    return props.color || props.theme.colors.brand.primary.darkest
  },
  function(props) {
    return props.left
  },
)

var Tabs = function Tabs(props) {
  return /* #__PURE__ */ _react.default.createElement(
    Container,
    {
      disabled: props.disabled,
      style: props.style,
    },
    /* #__PURE__ */ _react.default.createElement(
      TabsContainer,
      {
        disabled: props.disabled,
      },
      props.tabs.map(function(tab, index) {
        return /* #__PURE__ */ _react.default.createElement(_Tab.default, {
          id: 'tab'.concat(index),
          key: index,
          label: tab,
          width: 100 / props.tabs.length,
          onClick: function onClick() {
            return !props.disabled && props.onTabClick(index)
          },
          active: props.tabActive === index,
        })
      }),
    ),
    /* #__PURE__ */ _react.default.createElement(Bar, {
      width: 100 / props.tabs.length,
      left: props.tabActive * 100,
      rounded: true,
    }),
    /* #__PURE__ */ _react.default.createElement(Bar, {
      width: 100,
      color: _js.default.colors.neutral.dark['03'],
      height: 1,
    }),
  )
}

var _default = Tabs
exports.default = _default
Tabs.propTypes = {
  disabled: _propTypes.default.bool,
  onTabClick: _propTypes.default.func,
  tabActive: _propTypes.default.number,
  tabs: _propTypes.default.array,
}
