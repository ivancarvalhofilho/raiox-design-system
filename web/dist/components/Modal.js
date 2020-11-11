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

var _styledComponents = _interopRequireDefault(require('styled-components'))

var _Icon = _interopRequireDefault(require('./Icon'))

var _js = _interopRequireDefault(require('../../../tokens/theme'))

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

function _templateObject5() {
  var data = _taggedTemplateLiteral([
    '\n  box-shadow: 0px 0px 8px rgba(0, 39, 64, 0.1);\n  border-radius: 5px;\n  width: 520px;\n  transition: top 0.5s;\n  background: white;\n  position: absolute;\n  top: ',
    ';\n  padding: 17px;\n  height: 436px;\n',
  ])

  _templateObject5 = function _templateObject5() {
    return data
  }

  return data
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(['\n  padding: 20px;\n'])

  _templateObject4 = function _templateObject4() {
    return data
  }

  return data
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([''])

  _templateObject3 = function _templateObject3() {
    return data
  }

  return data
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    '\n  display: flex;\n  justify-content: space-between;\n',
  ])

  _templateObject2 = function _templateObject2() {
    return data
  }

  return data
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  position: absolute;\n  width: 100%;\n  z-index: 1000;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.75);\n  top: 0;\n  overflow: hidden;\n  left: 0;\n  display: ',
    ';\n  justify-content: center;\n',
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

var BackgroundContainer = _styledComponents.default.div(
  _templateObject(),
  function(props) {
    return props.show ? 'flex' : 'none'
  },
)

var ModalHeader = _styledComponents.default.div(_templateObject2())

var Title = _styledComponents.default.div(_templateObject3())

var ModalContent = _styledComponents.default.div(_templateObject4())

var ModalContainer = _styledComponents.default.div(_templateObject5(), function(
  props,
) {
  return props.show
    ? 'calc(50% - '.concat(props.top / 2, 'px)')
    : '-'.concat(props.top ? props.top : 5000, 'px')
})

var Modal = function Modal(props) {
  var _useState = (0, _react.useState)(props.show)

  var _useState2 = _slicedToArray(_useState, 2)

  var show = _useState2[0]

  var setShow = _useState2[1]

  var _useState3 = (0, _react.useState)(0)

  var _useState4 = _slicedToArray(_useState3, 2)

  var height = _useState4[0]

  var setHeight = _useState4[1]

  var ref = (0, _react.useRef)()
  ;(0, _react.useEffect)(
    function() {
      setHeight(ref.current.clientHeight)
      setTimeout(function() {
        setShow(props.show)
      }, 500)
    },
    [props.show],
  )
  return /* #__PURE__ */ _react.default.createElement(
    BackgroundContainer,
    {
      show: props.show ? props.show : show,
      onClick: function onClick() {
        return props.onClickOut()
      },
    },
    /* #__PURE__ */ _react.default.createElement(
      ModalContainer,
      {
        ref: ref,
        show: !props.show ? props.show : show,
        top: height,
      },
      /* #__PURE__ */ _react.default.createElement(
        ModalHeader,
        null,
        /* #__PURE__ */ _react.default.createElement(Title, null, props.title),
        props.closable &&
          /* #__PURE__ */ _react.default.createElement(_Icon.default, {
            size: '16px',
            onClick: props.onClose,
            path: _js.default.icons.close,
          }),
      ),
      /* #__PURE__ */ _react.default.createElement(
        ModalContent,
        null,
        props.children,
      ),
    ),
  )
}

var _default = Modal
exports.default = _default
Modal.propTypes = {
  children: _propTypes.default.any,
  closable: _propTypes.default.bool,
  onClickOut: _propTypes.default.func,
  onClose: _propTypes.default.func,
  show: _propTypes.default.bool,
  title: _propTypes.default.string,
}
