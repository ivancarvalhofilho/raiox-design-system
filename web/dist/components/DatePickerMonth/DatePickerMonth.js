"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _YearNavigator = _interopRequireDefault(require("./YearNavigator"));

var _MonthList = _interopRequireDefault(require("./MonthList"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _js = _interopRequireDefault(require("../../../../tokens/js"));

var _StyledComponents = require("../StyledComponents");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: ", ";\n  border-radius: ", ";\n  padding: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MonthByYearSelectorStyled = _styledComponents["default"].div(_templateObject(), _js["default"].styles.shadow.level1, _js["default"].styles.border.radius.sm, _js["default"].styles.spacing.squish.xs);

var groupBy = function groupBy(xs, key) {
  return xs.reduce(function (rv, x) {
    ;
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

function DatePickerMonth(props) {
  var _useState = (0, _react.useState)((0, _dayjs["default"])(props.dateSelected, 'YYYY-MM').get('year')),
      _useState2 = _slicedToArray(_useState, 2),
      year = _useState2[0],
      setYear = _useState2[1];

  var _useState3 = (0, _react.useState)(props.showAllYears || groupBy(props.data, 'year')),
      _useState4 = _slicedToArray(_useState3, 1),
      yearMonth = _useState4[0];

  return /*#__PURE__*/_react["default"].createElement(MonthByYearSelectorStyled, null, /*#__PURE__*/_react["default"].createElement(_YearNavigator["default"], {
    yearSelected: year,
    onChange: function onChange(year) {
      return setYear(year);
    },
    years: Object.keys(yearMonth).sort(),
    showAllYears: props.showAllYears
  }), /*#__PURE__*/_react["default"].createElement(_StyledComponents.Divider, {
    horizontal: true,
    style: {
      width: 'Calc(100% + 24px + 24px)',
      left: '-24px',
      position: 'relative'
    }
  }), /*#__PURE__*/_react["default"].createElement(_MonthList["default"], {
    months: yearMonth[year],
    showAllMonthsActive: props.showAllYears,
    dateSelected: props.dateSelected,
    onSelectMonth: props.onSelectMonth,
    yearSelected: year
  }));
}

DatePickerMonth.propTypes = {
  data: _propTypes["default"].any,
  dateSelected: _propTypes["default"].any,
  onSelectMonth: _propTypes["default"].any,
  showAllYears: _propTypes["default"].bool
};
var _default = DatePickerMonth;
exports["default"] = _default;