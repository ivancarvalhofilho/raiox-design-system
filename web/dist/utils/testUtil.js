'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.mountWithTheme = mountWithTheme
exports.shallowWithTheme = shallowWithTheme
exports.renderWithTheme = renderWithTheme

var _styledComponents = require('styled-components')

var _js = _interopRequireDefault(require('../../../tokens/js'))

var _react = _interopRequireDefault(require('react'))

var _enzyme = require('enzyme')

var _reactTestRenderer = _interopRequireDefault(require('react-test-renderer'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function mountWithTheme(child) {
  return (0, _enzyme.mount)(child, {
    wrappingComponent: function wrappingComponent(_ref) {
      var children = _ref.children
      return /* #__PURE__ */ _react.default.createElement(
        _styledComponents.ThemeProvider,
        {
          theme: _js.default,
        },
        children,
      )
    },
  })
}

function shallowWithTheme(child) {
  return (0, _enzyme.shallow)(child, {
    wrappingComponent: function wrappingComponent(_ref2) {
      var children = _ref2.children
      return /* #__PURE__ */ _react.default.createElement(
        _styledComponents.ThemeProvider,
        {
          theme: _js.default,
        },
        children,
      )
    },
  })
}

function renderWithTheme(child) {
  return _reactTestRenderer.default.create(child, {
    wrappingComponent: function wrappingComponent(_ref3) {
      var children = _ref3.children
      return /* #__PURE__ */ _react.default.createElement(
        _styledComponents.ThemeProvider,
        {
          theme: _js.default,
        },
        children,
      )
    },
  })
}
