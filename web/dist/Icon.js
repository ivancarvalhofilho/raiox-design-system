"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactSvgInline = _interopRequireDefault(require("react-svg-inline"));

var _js = _interopRequireDefault(require("../../tokens/js"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  cursor: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconContainer = _styledComponents["default"].span(_templateObject(), function (props) {
  return props.onClick && 'pointer';
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
        return _js["default"].colors.neutral.dark['02'];
    }
  }

  function getIconSvgSize(props) {
    if (props.size && !Object.keys(_js["default"].styles.icon.size).includes(props.size)) {
      return props.size;
    }

    return _js["default"].styles.icon.size[props.size] || _js["default"].styles.icon.size.sm;
  }

  return /*#__PURE__*/_react["default"].createElement(IconContainer, {
    onClick: props.onClick
  }, /*#__PURE__*/_react["default"].createElement(_reactSvgInline["default"], {
    style: props.style,
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