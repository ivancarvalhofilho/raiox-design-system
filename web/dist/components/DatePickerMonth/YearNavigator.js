"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _js = _interopRequireDefault(require("../../../../tokens/js"));

var _FontUtil = _interopRequireDefault(require("../../utils/FontUtil"));

var _icons = _interopRequireDefault(require("../../../../tokens/js/icons"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  cursor: ", ";\n  opacity: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var YearNavigatorStyle = _styledComponents["default"].div(_templateObject(), _js["default"].styles.spacing.stack.xxxs, function (props) {
  return (0, _FontUtil["default"])(props.theme, 'body', 'regular', 'sm', 'neutral.dark.base');
});

var Arrow = (0, _styledComponents["default"])(_Icon["default"])(_templateObject2(), function (props) {
  return props.enabled && 'pointer';
}, function (props) {
  return !props.enabled && _js["default"].styles.opacity.level.light;
});

function YearNavigator(props) {
  var index = props.years.findIndex(function (item) {
    return item === props.yearSelected.toString();
  });
  var left = index > 0 || props.showAllYears;
  var right = props.years.length > index + 1 || props.showAllYears;
  return /*#__PURE__*/_react["default"].createElement(YearNavigatorStyle, null, /*#__PURE__*/_react["default"].createElement(Arrow, {
    size: _js["default"].styles.icon.size.md,
    appearance: "primary",
    enabled: left,
    style: {
      marginRight: _js["default"].styles.spacing.stack.nano
    },
    path: _icons["default"]['chevron-left'],
    onClick: function onClick() {
      return left && props.onChange((0, _dayjs["default"])(props.years[index], 'YYYY').add(-1, 'year').get('year'));
    }
  }), /*#__PURE__*/_react["default"].createElement("div", null, props.yearSelected), /*#__PURE__*/_react["default"].createElement(Arrow, {
    size: _js["default"].styles.icon.size.md,
    appearance: "primary",
    enabled: right,
    style: {
      marginLeft: _js["default"].styles.spacing.stack.nano
    },
    path: _icons["default"]['chevron-right'],
    onClick: function onClick() {
      return right && props.onChange((0, _dayjs["default"])(props.years[index], 'YYYY').add(1, 'year').get('year'));
    }
  }));
}

YearNavigator.propTypes = {
  onChange: _propTypes["default"].any,
  yearSelected: _propTypes["default"].any,
  years: _propTypes["default"].any,
  showAllYears: _propTypes["default"].bool
};
var _default = YearNavigator;
exports["default"] = _default;