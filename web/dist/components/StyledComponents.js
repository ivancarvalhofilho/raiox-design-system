"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = exports.Divider = exports.TextRow = exports.FlexCenter = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _tokens = _interopRequireDefault(require("../tokens"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 16px;\n  background: white;\n  border-radius: ", ";\n  box-shadow: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ": 1px solid\n    ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextRow = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.justifyContent;
}, _tokens["default"].fonts.family.body, function (props) {
  return props.bold ? _tokens["default"].fonts.weight.medium : _tokens["default"].fonts.weight.regular;
}, _tokens["default"].fonts.fontSize.xs, function (props) {
  return props.color ? props.color : props.danger ? _tokens["default"].colors.feedback.danger.dark : _tokens["default"].colors.neutral.dark.base;
});

exports.TextRow = TextRow;

var Divider = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.horizontal ? 'border-bottom' : 'border-left';
}, _tokens["default"].colors.neutral.dark['03']);

exports.Divider = Divider;

var Container = _styledComponents["default"].div(_templateObject3(), _tokens["default"].border.radius.sm, _tokens["default"].shadow.level1);

exports.Container = Container;

var FlexCenter = _styledComponents["default"].span(_templateObject4());

exports.FlexCenter = FlexCenter;