'use strict'

function _typeof(obj) {
  '@babel/helpers - typeof'
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj
    }
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj
    }
  }
  return _typeof(obj)
}

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireWildcard(require('react'))

var _Icon = _interopRequireDefault(require('./Icon'))

var _icons = _interopRequireDefault(require('../../../tokens/theme/icons'))

var _styledComponents = _interopRequireDefault(require('styled-components'))

var _utils = require('../utils')

var _reactCollapse = require('react-collapse')

var _StyledComponents = require('./StyledComponents')

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null
  var cache = new WeakMap()
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache
  }
  return cache
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj }
  }
  var cache = _getRequireWildcardCache()
  if (cache && cache.has(obj)) {
    return cache.get(obj)
  }
  var newObj = {}
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc)
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  newObj.default = obj
  if (cache) {
    cache.set(obj, newObj)
  }
  return newObj
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  )
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  )
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen)
  var n = Object.prototype.toString.call(o).slice(8, -1)
  if (n === 'Object' && o.constructor) n = o.constructor.name
  if (n === 'Map' || n === 'Set') return Array.from(o)
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen)
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i]
  }
  return arr2
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr))) return
  var _arr = []
  var _n = true
  var _d = false
  var _e = undefined
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value)
      if (i && _arr.length === i) break
    }
  } catch (err) {
    _d = true
    _e = err
  } finally {
    try {
      if (!_n && _i.return != null) _i.return()
    } finally {
      if (_d) throw _e
    }
  }
  return _arr
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(['\n  ', ';\n'])

  _templateObject6 = function _templateObject6() {
    return data
  }

  return data
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(['\n  margin-top: ', ';\n  ', ';\n'])

  _templateObject5 = function _templateObject5() {
    return data
  }

  return data
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([
    '\n  box-shadow: ',
    ';\n  padding: ',
    ';\n  background: white;\n',
  ])

  _templateObject4 = function _templateObject4() {
    return data
  }

  return data
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(['\n  margin-top: ', ';\n'])

  _templateObject3 = function _templateObject3() {
    return data
  }

  return data
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(['\n  padding-left: ', ';\n'])

  _templateObject2 = function _templateObject2() {
    return data
  }

  return data
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n',
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

var Header = _styledComponents.default.div(_templateObject())

var Button = _styledComponents.default.div(_templateObject2(), function(props) {
  return props.theme.styles.spacing.inline.nano
})

var Divider = (0, _styledComponents.default)(_StyledComponents.Divider)(
  _templateObject3(),
  function(props) {
    return props.theme.styles.spacing.stack.xxxs
  },
)
var Container = (0, _styledComponents.default)(_StyledComponents.Container)(
  _templateObject4(),
  function(props) {
    return props.theme.styles.shadow.level0
  },
  function(props) {
    return props.theme.styles.spacing.inset.xs
  },
)

var Body = _styledComponents.default.div(
  _templateObject5(),
  function(props) {
    return props.theme.styles.spacing.stack.xxxs
  },
  function(props) {
    return (0, _utils.fontStyleMaker)(
      props.theme,
      'body',
      'regular',
      'xs',
      'neutral.dark.base',
    )
  },
)

var Title = _styledComponents.default.span(_templateObject6(), function(props) {
  return (0,
  _utils.fontStyleMaker)(props.theme, 'body', 'regular', 'xs', 'brand.secondary.dark')
})

var CollapseContainer = function CollapseContainer(props) {
  var _useState = (0, _react.useState)(false)

  var _useState2 = _slicedToArray(_useState, 2)

  var opened = _useState2[0]

  var setOpened = _useState2[1]

  return /* #__PURE__ */ _react.default.createElement(
    Container,
    null,
    /* #__PURE__ */ _react.default.createElement(
      Header,
      {
        id: 'header',
        onClick: function onClick() {
          return setOpened(!opened)
        },
      },
      /* #__PURE__ */ _react.default.createElement(Title, null, props.title),
      /* #__PURE__ */ _react.default.createElement(
        Button,
        null,
        /* #__PURE__ */ _react.default.createElement(_Icon.default, {
          path: _icons.default['chevron-down'],
          size: '16px',
          rotate: opened ? 180 : 0,
        }),
      ),
    ),
    /* #__PURE__ */ _react.default.createElement(
      _reactCollapse.UnmountClosed,
      {
        isOpened: opened,
      },
      /* #__PURE__ */ _react.default.createElement(Divider, {
        horizontal: true,
      }),
      /* #__PURE__ */ _react.default.createElement(
        Body,
        {
          id: 'children',
        },
        props.children,
      ),
    ),
  )
}

var _default = CollapseContainer
exports.default = _default
CollapseContainer.propTypes = {
  children: _propTypes.default.oneOfType([
    _propTypes.default.object,
    _propTypes.default.string,
  ]),
  title: _propTypes.default.string,
}
