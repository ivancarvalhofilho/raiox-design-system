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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  pointer-events: ", ";\n  cursor: ", ";\n  opacity: ", ";\n  ", ";\n  user-select: none;\n  border-radius: ", ";\n  min-height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: ", ";\n  margin-top: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var months = [['Jan', '01'], ['Fev', '02'], ['Mar', '03'], ['Abr', '04'], ['Mai', '05'], ['Jun', '06'], ['Jul', '07'], ['Ago', '08'], ['Set', '09'], ['Out', '10'], ['Nov', '11'], ['Dez', '12']];

var MonthListStyle = _styledComponents["default"].div(_templateObject(), "".concat(_js["default"].styles.spacing.stack.nano, " ").concat(_js["default"].styles.spacing.inline.xs), _js["default"].styles.spacing.stack.nano);

var Month = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.selected && _js["default"].colors.brand.primary.darkest;
}, function (props) {
  return !props.active && 'none';
}, function (props) {
  return props.active && 'pointer';
}, function (props) {
  return !props.active && _js["default"].styles.opacity.level.light;
}, function (props) {
  return (0, _FontUtil["default"])(props.theme, 'body', 'regular', 'xs', props.selected ? 'neutral.light.base' : 'neutral.dark.base');
}, _js["default"].styles.border.radius.sm);

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
        return onSelectMonth(month);
      },
      selected: props.dateSelected === month.date,
      active: month.active,
      key: index
    }, month.name);
  }));
}

MonthList.propTypes = {
  dateSelected: _propTypes["default"].any,
  months: _propTypes["default"].any,
  onSelectMonth: _propTypes["default"].any,
  yearSelected: _propTypes["default"].any,
  showAllMonthsActive: _propTypes["default"].bool
};
var _default = MonthList;
exports["default"] = _default;