"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _tokens = require("../../tokens");

var _FontUtil = require("../../utils/FontUtil");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var months = [['Jan', '01'], ['Fev', '02'], ['Mar', '03'], ['Abr', '04'], ['Mai', '05'], ['Jun', '06'], ['Jul', '07'], ['Ago', '08'], ['Set', '09'], ['Out', '10'], ['Nov', '11'], ['Dez', '12']];

var MonthListStyle = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: ", ";\n  margin-top: ", ";\n"])), "".concat(_tokens.Tokens.spacing.stack.nano, " ").concat(_tokens.Tokens.spacing.inline.xs), _tokens.Tokens.spacing.stack.nano);

var Month = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background: ", ";\n  cursor: ", ";\n  opacity: ", ";\n  ", ";\n  color: ", ";\n  user-select: none;\n  border-radius: ", ";\n  min-height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])), function (props) {
  return props.selected && _tokens.Tokens.colors.brand.primary.darkest;
}, function (props) {
  return props.active && 'pointer';
}, function (props) {
  return !props.active && _tokens.Tokens.opacity.level.light;
}, (0, _FontUtil.fontStyleMaker)({
  fontFamily: "body",
  fontWeight: "regular",
  fontSize: "xs"
}), function (props) {
  return props.selected ? _tokens.Tokens.colors.neutral.light.base : _tokens.Tokens.colors.neutral.dark.base;
}, _tokens.Tokens.border.radius.sm);

function MonthList(props) {
  function generateDate(month) {
    return (0, _dayjs["default"])("".concat(month, "/01/").concat(props.yearSelected)).format('YYYY-MM');
  }

  var monthsArray = months.map(function (months, index) {
    return {
      name: months[0],
      active: !!props.showAllMonthsActive || props.months.some(function (month) {
        return month.month === index;
      }),
      date: generateDate(months[1])
    };
  });

  function onSelectMonth(month) {
    props.onSelectMonth(month.date);
  }

  return /*#__PURE__*/_react["default"].createElement(MonthListStyle, null, monthsArray.map(function (month, index) {
    return /*#__PURE__*/_react["default"].createElement(Month, {
      onClick: function onClick() {
        return month.active && onSelectMonth(month);
      },
      selected: props.dateSelected === month.date,
      id: "month".concat(index),
      active: month.active,
      "data-tooltip": !month.active ? props.disabledTooltipMessage : '',
      key: index
    }, month.name);
  }));
}

MonthList.propTypes = {
  dateSelected: _propTypes["default"].any,
  months: _propTypes["default"].any,
  onSelectMonth: _propTypes["default"].any,
  yearSelected: _propTypes["default"].any,
  disabledTooltipMessage: _propTypes["default"].string,
  showAllMonthsActive: _propTypes["default"].bool
};
var _default = MonthList;
exports["default"] = _default;