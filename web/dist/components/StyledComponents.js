"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = exports.Divider = exports.TextRow = exports.FlexCenter = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

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
}, function (props) {
  return props.theme.fonts.family.body;
}, function (props) {
  return props.bold ? props.theme.fonts.weight.medium : props.theme.fonts.weight.regular;
}, function (props) {
  return props.theme.fonts.fontSize.xs;
}, function (props) {
  return props.color ? props.color : props.danger ? props.theme.colors.feedback.danger.dark : props.theme.colors.neutral.dark.base;
});

exports.TextRow = TextRow;

var Divider = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.horizontal ? 'border-bottom' : 'border-left';
}, function (props) {
  return props.theme.colors.neutral.dark['03'];
});

exports.Divider = Divider;

var Container = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.styles.border.radius.sm;
}, function (props) {
  return props.theme.styles.shadow.level1;
});

exports.Container = Container;

var FlexCenter = _styledComponents["default"].span(_templateObject4());

exports.FlexCenter = FlexCenter;