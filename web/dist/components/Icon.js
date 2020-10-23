"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactSvgInline = _interopRequireDefault(require("react-svg-inline"));

var _js = _interopRequireDefault(require("../../../tokens/js"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tooltip = _interopRequireDefault(require("./Tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  cursor: ", ";\n\n  -webkit-animation: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconContainer = _styledComponents["default"].span(_templateObject(), function (props) {
  return props.onClick && 'pointer';
}, function (props) {
  return props.spin && 'spin 2s infinite linear';
});

var Icon = function Icon(props) {
  function getIconSvgColor(props) {
    switch (props.appearance) {
      case 'default':
        return _js["default"].colors.neutral.dark['02'];

      case 'primary':
        return _js["default"].colors.brand.primary.darkest;

      case 'light':
        return _js["default"].colors.neutral.light.base;

      case 'danger':
        return _js["default"].colors.feedback.danger.dark;

      case 'info':
        return _js["default"].colors.feedback.info.dark;

      case 'warning':
        return _js["default"].colors.feedback.warning.dark;

      case 'success':
        return _js["default"].colors.feedback.success.dark;

      case 'dark':
        return _js["default"].colors.neutral.dark.base;

      case 'default-disabled':
        return _js["default"].colors.neutral.dark['02'];

      case 'primary-disabled':
        return _js["default"].colors.brand.primary.darkest;

      default:
        return props.appearance || _js["default"].colors.neutral.dark['02'];
    }
  }

  function getIconSvgSize(props) {
    if (props.size && !Object.keys(_js["default"].styles.icon.size).includes(props.size)) {
      return props.size;
    }

    return _js["default"].styles.icon.size[props.size] || _js["default"].styles.icon.size.sm;
  }

  return /*#__PURE__*/_react["default"].createElement(IconContainer, {
    onClick: props.onClick,
    spin: props.spin,
    "data-tip": props['data-tip']
  }, /*#__PURE__*/_react["default"].createElement(_reactSvgInline["default"], {
    style: _objectSpread(_objectSpread({}, props.style), {}, {
      display: 'flex'
    }),
    svg: props.path ? props.path : _js["default"].icons[props.name],
    fill: getIconSvgColor(props),
    width: getIconSvgSize(props)
  }));
};

var _default = Icon;
exports["default"] = _default;
Icon.propTypes = {
  appearance: _propTypes["default"].string,
  name: _propTypes["default"].string,
  path: _propTypes["default"].string,
  size: _propTypes["default"].string,
  style: _propTypes["default"].object
};