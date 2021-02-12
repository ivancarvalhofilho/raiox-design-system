"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mountWithTheme = mountWithTheme;

var _styledComponents = require("styled-components");

var _tokens = _interopRequireDefault(require("../../tokens"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

require("jest-styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function mountWithTheme(child) {
  return (0, _enzyme.mount)(child, {
    wrappingComponent: function wrappingComponent(_ref) {
      var children = _ref.children;
      return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        Tokens: _tokens["default"]
      }, children);
    }
  });
}