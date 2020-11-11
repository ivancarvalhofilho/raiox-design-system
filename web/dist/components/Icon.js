"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactSvgInline = _interopRequireDefault(require("react-svg-inline"));

var _theme = _interopRequireDefault(require("../../../tokens/theme"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  transition-duration: 0.2s;\n  cursor: ", ";\n  -webkit-animation: ", ";\n  transition-property: transform;\n  transform: rotate(-", "deg);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Svg = (0, _styledComponents["default"])(_reactSvgInline["default"])(_templateObject(), function (props) {
  return props.onClick && !props.disabled && 'pointer';
}, function (props) {
  return props.spin && 'spin 2s infinite linear';
}, function (props) {
  return props.rotate;
});

var Icon = function Icon(props) {
  function getIconSvgColor(props) {
    switch (props.appearance) {
      case 'default':
        return _theme["default"].colors.neutral.dark['02'];

      case 'primary':
        return _theme["default"].colors.brand.primary.darkest;

      case 'light':
        return _theme["default"].colors.neutral.light.base;

      case 'danger':
        return _theme["default"].colors.feedback.danger.dark;

      case 'info':
        return _theme["default"].colors.feedback.info.dark;

      case 'warning':
        return _theme["default"].colors.feedback.warning.dark;

      case 'success':
        return _theme["default"].colors.feedback.success.dark;

      case 'dark':
        return _theme["default"].colors.neutral.dark.base;

      case 'default-disabled':
        return _theme["default"].colors.neutral.dark['02'];

      case 'primary-disabled':
        return _theme["default"].colors.brand.primary.darkest;

      default:
        return props.appearance || _theme["default"].colors.neutral.dark['02'];
    }
  }

  function getIconSvgSize(props) {
    if (props.size && !Object.keys(_theme["default"].styles.icon.size).includes(props.size)) {
      return props.size;
    }

    return _theme["default"].styles.icon.size[props.size] || _theme["default"].styles.icon.size.sm;
  }

  return /*#__PURE__*/_react["default"].createElement(Svg, _extends({}, props, {
    onClick: props.onClick,
    rotate: props.rotate,
    spin: props.spin,
    className: props.className,
    style: _objectSpread({}, props.style),
    svg: props.path ? props.path : _theme["default"].icons[props.name],
    fill: getIconSvgColor(props),
    width: getIconSvgSize(props)
  }));
};

var _default = Icon;
exports["default"] = _default;
Icon.propTypes = {
  appearance: _propTypes["default"].string,
  className: _propTypes["default"].string,
  name: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  path: _propTypes["default"].string,
  rotate: _propTypes["default"].number,
  size: _propTypes["default"].string,
  spin: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].bool]),
  style: _propTypes["default"].object
};