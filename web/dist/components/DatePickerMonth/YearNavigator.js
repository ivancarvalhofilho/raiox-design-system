"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _FontUtil = require("../../utils/FontUtil");

var _Icon = _interopRequireDefault(require("../Icon"));

var _tokens = _interopRequireDefault(require("../../../tokens"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: ", ";\n  ", ";\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var YearNavigatorStyle = _styledComponents["default"].div(_templateObject(), _tokens["default"].spacing.stack.xxxs, (0, _FontUtil.fontStyleMaker)({
  fontFamily: "body",
  fontWeight: "medium",
  fontSize: "xxs"
}), _tokens["default"].colors.neutral.dark.base);

function YearNavigator(props) {
  var index = props.years.findIndex(function (item) {
    return item === props.yearSelected.toString();
  });
  var left = index > 0 || props.showAllYears;
  var right = props.years.length > index + 1 || props.showAllYears;
  return /*#__PURE__*/_react["default"].createElement(YearNavigatorStyle, null, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    size: _tokens["default"].iconSize.md,
    appearance: "primary",
    disabled: !left,
    id: "yearLeft",
    style: {
      marginRight: _tokens["default"].spacing.stack.nano,
      opacity: !left ? _tokens["default"].opacity.level.light : 1
    },
    path: _tokens["default"].icons['chevron-left'],
    onClick: function onClick() {
      return left && props.onChange((0, _dayjs["default"])().set('year', props.years[index] || props.yearSelected).add(-1, 'year').get('year'));
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      userSelect: 'none'
    },
    id: "year"
  }, props.yearSelected), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    size: _tokens["default"].iconSize.md,
    appearance: "primary",
    disabled: !right,
    id: "yearRight",
    style: {
      marginLeft: _tokens["default"].spacing.stack.nano,
      opacity: !right ? _tokens["default"].opacity.level.light : 1
    },
    path: _tokens["default"].icons['chevron-right'],
    onClick: function onClick() {
      return right && props.onChange((0, _dayjs["default"])().set('year', props.years[index] || props.yearSelected).add(1, 'year').get('year'));
    }
  }));
}

YearNavigator.propTypes = {
  onChange: _propTypes["default"].any,
  yearSelected: _propTypes["default"].any,
  years: _propTypes["default"].any,
  showAllYears: _propTypes["default"].bool,
  disableRight: _propTypes["default"].bool,
  disableLeft: _propTypes["default"].bool
};
var _default = YearNavigator;
exports["default"] = _default;