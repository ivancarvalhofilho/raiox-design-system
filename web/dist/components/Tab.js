"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 5px 0px;\n  font-family: ", ";\n  font-weight: ", ";\n  width: ", "%;\n  text-align: center;\n  color: ", ";\n  font-size: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.fonts.family.body;
}, function (props) {
  return props.active ? props.theme.fonts.weight.medium : props.theme.fonts.weight.regular;
}, function (props) {
  return props.width;
}, function (props) {
  return props.active ? props.theme.colors.brand.primary.darkest : props.theme.colors.neutral.dark['01'];
}, function (props) {
  return props.theme.fonts.fontSize.xxs;
});

var Tab = function Tab(props) {
  return /*#__PURE__*/_react["default"].createElement(TabContainer, {
    width: props.width,
    id: props.id,
    onClick: props.onClick,
    active: props.active
  }, props.label);
};

var _default = Tab;
exports["default"] = _default;
Tab.propTypes = {
  active: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  width: _propTypes["default"].number
};