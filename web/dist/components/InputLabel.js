"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _tokens = _interopRequireDefault(require("../../tokens"));

var _FontUtil = require("../utils/FontUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: flex;\n\tcolor: ", ";\n\t", ";\n\tmargin-top: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 16px;\n  box-shadow: 0 0 0 1px ", ";\n  border:none;\n  box-sizing: border-box;\n  border-radius: 4px;\n  background: ", ";\n  transition: 0.25s;\n  color: ", ";\n  ", ";\n\t\t\n\n  &:focus {\n    outline: none;\n\t\tbox-shadow: 0 0 0 2px ", ";\n  }\n  \n  &:focus + div {\n    ", ";\n  }\n  \n\t", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 1;\n  margin: 12px;\n  padding: 4px;\n  color: ", ";\n  ", ";\n  background: inherit;\n  transition: 0.25s;\n  top: 16px;\n  pointer-events: none;\n  user-select: none;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SuspendedLabel = _styledComponents["default"].div(_templateObject(), _tokens["default"].colors.neutral.dark["01"], (0, _FontUtil.fontStyleMaker)({
  fontFamily: "body",
  fontWeight: "regular",
  fontSize: "xs"
}), function (props) {
  return props.hasText && makeLabelSuspended();
});

function makeLabelSuspended() {
  return _objectSpread({
    top: '-7px'
  }, (0, _FontUtil.fontStyleMaker)({
    fontFamily: "body",
    fontWeight: "regular",
    fontSize: "xxs"
  }));
}

var InputLabelStyled = _styledComponents["default"].input(_templateObject2(), _tokens["default"].colors.neutral.dark["03"], _tokens["default"].colors.neutral.light.base, _tokens["default"].colors.neutral.dark.base, (0, _FontUtil.fontStyleMaker)({
  fontFamily: "body",
  fontWeight: "regular",
  fontSize: "xs"
}), _tokens["default"].colors.brand.primary.darkest, makeLabelSuspended(), function (props) {
  return props.hasError && "\n\t\tbox-shadow: 0 0 0 2px ".concat(_tokens["default"].colors.feedback.danger.dark, " !important;\n\t");
});

var InputLabelContainer = _styledComponents["default"].div(_templateObject3(), _tokens["default"].colors.neutral.light.base, function (props) {
  return props.disabled && "\n    opacity:".concat(_tokens["default"].opacity.level.medium, ";\n    pointer-events: none;\n  ");
});

var SpanError = _styledComponents["default"].span(_templateObject4(), _tokens["default"].colors.feedback.danger.dark, (0, _FontUtil.fontStyleMaker)({
  fontWeight: "regular",
  fontFamily: "body",
  fontSize: "xs"
}), _tokens["default"].spacing.inline.nano);

var InputLabel = function InputLabel(props) {
  return /*#__PURE__*/_react["default"].createElement(InputLabelContainer, {
    disabled: props.disabled
  }, /*#__PURE__*/_react["default"].createElement(InputLabelStyled, {
    type: "text",
    value: props.text,
    hasError: props.error,
    onChange: function onChange(text) {
      props.setText(text.target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement(SuspendedLabel, {
    hasText: !!props.text
  }, props.label), props.error && /*#__PURE__*/_react["default"].createElement(SpanError, null, props.errorLabel));
};

var _default = InputLabel;
exports["default"] = _default;
InputLabel.propTypes = {
  state: _propTypes["default"].string,
  text: _propTypes["default"].string,
  setText: _propTypes["default"].func,
  disabled: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  errorLabel: _propTypes["default"].string
};