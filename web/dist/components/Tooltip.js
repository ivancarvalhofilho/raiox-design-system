"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FontUtil = _interopRequireDefault(require("../utils/FontUtil"));

var _reactTooltipLite = _interopRequireDefault(require("react-tooltip-lite"));

var _js = _interopRequireDefault(require("../../../tokens/js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TooltipMessage = _styledComponents["default"].div(_templateObject(), function (props) {
  return (0, _FontUtil["default"])(props.theme, 'body', 'regular', 'xxs', 'neutral.light.base');
});

var Tooltip = function Tooltip(props) {
  return props.message ? /*#__PURE__*/_react["default"].createElement(_reactTooltipLite["default"], {
    background: _js["default"].colors.neutral.dark.base,
    content: /*#__PURE__*/_react["default"].createElement(TooltipMessage, null, props.message)
  }, props.children) : props.children;
};

var _default = Tooltip;
exports["default"] = _default;