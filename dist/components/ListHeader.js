"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderContainer = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 8px 16px;\n  background: ", ";\n  color: ", ";\n  border-bottom: 1px solid #e0e0e0;\n  font-family: ", ";\n  font-size: ", ";\n"])), Tokens.colors.neutral.light['02'], Tokens.colors.neutral.dark['01'], Tokens.fonts.family.body, Tokens.fonts.fontSize.xxs);

var Column = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: ", "%;\n  text-align: ", ";\n"])), function (props) {
  return props.width;
}, function (props) {
  return props.align;
});

var ListHeader = function ListHeader(props) {
  return /*#__PURE__*/_react["default"].createElement(HeaderContainer, null, props.data.map(function (key, index) {
    return /*#__PURE__*/_react["default"].createElement(Column, {
      key: index,
      width: 100 / props.data.length,
      align: props.align[index]
    }, key);
  }));
};

var _default = ListHeader;
exports["default"] = _default;
ListHeader.propTypes = {
  align: _propTypes["default"].array,
  data: _propTypes["default"].array
};