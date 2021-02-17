"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = exports.Divider = exports.TextRow = exports.FlexCenter = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _tokens = require("../tokens");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextRow = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  color: ", ";\n"])), function (props) {
  return props.justifyContent;
}, _tokens.Tokens.fonts.family.body, function (props) {
  return props.bold ? _tokens.Tokens.fonts.weight.medium : _tokens.Tokens.fonts.weight.regular;
}, _tokens.Tokens.fonts.fontSize.xs, function (props) {
  return props.color ? props.color : props.danger ? _tokens.Tokens.colors.feedback.danger.dark : _tokens.Tokens.colors.neutral.dark.base;
});

exports.TextRow = TextRow;

var Divider = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", ": 1px solid\n    ", ";\n"])), function (props) {
  return props.horizontal ? 'border-bottom' : 'border-left';
}, _tokens.Tokens.colors.neutral.dark['03']);

exports.Divider = Divider;

var Container = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 16px;\n  background: white;\n  border-radius: ", ";\n  box-shadow: ", ";\n"])), _tokens.Tokens.border.radius.sm, _tokens.Tokens.shadow.level1);

exports.Container = Container;

var FlexCenter = _styledComponents["default"].span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));

exports.FlexCenter = FlexCenter;