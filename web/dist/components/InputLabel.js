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

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  padding: 16px;\n  border: 1px solid #e0e0e0;\n  box-sizing: border-box;\n  border-radius: 4px;\n  background: white;\n  &:focus {\n    outline: none;\n  }\n  transition: 0.25s;\n\n  &:focus + div {\n    top: -8px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 1;\n  margin: 12px;\n  padding: 4px;\n  color: ", ";\n  ", ";\n  background: inherit;\n  transition: 0.25s;\n  top: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SuspendedLabel = _styledComponents["default"].div(_templateObject(), _tokens["default"].colors.neutral.dark.base, (0, _FontUtil.fontStyleMaker)({
  Tokens: _tokens["default"],
  fontFamily: "body",
  fontWeight: "medium",
  fontSize: "lg"
}));

var InputLabelStyled = _styledComponents["default"].input(_templateObject2());

var InputLabelContainer = _styledComponents["default"].div(_templateObject3(), _tokens["default"].colors.neutral.light.base);

var InputLabel = function InputLabel(props) {
  return /*#__PURE__*/_react["default"].createElement(InputLabelContainer, null, /*#__PURE__*/_react["default"].createElement(InputLabelStyled, {
    type: "text"
  }), /*#__PURE__*/_react["default"].createElement(SuspendedLabel, null, "Label"));
};

var _default = InputLabel;
exports["default"] = _default;
InputLabel.propTypes = {
  state: _propTypes["default"].string
};