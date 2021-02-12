"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("./index");

var _tokens = _interopRequireDefault(require("../../tokens"));

var _StyledComponents = require("./StyledComponents");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _FontUtil = require("../utils/FontUtil");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  color: ", "\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  background-color: ", ";\n  border-radius: ", ";\n  border-radius: ", ";\n  border-radius: ", ";\n  border-radius: ", ";\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  cursor: ", ";\n  background-color: ", ";\n  ", ";\n  color: ", ";\n  ", "\n      ", "\n      ", "\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  height: 58px;\n  background: ", ";\n  padding: 8px 13px;\n  display: flex;\n  align-items: center;\n  ", ";\n  color: ", ";\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(7, 1fr);\n  row-gap: 8px;\n  height: 250px;\n  padding: 0 16px 16px 16px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  padding: 16px;\n  display: flex;\n  justify-content: space-between;\n  flex: 1;\n  align-items: center;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  color: ", ";\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  background: #ffffff;\n  box-shadow: 0px 9px 46px rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  display: flex;\n  //height: 315px;\n  justify-content: space-between;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  background: #ffffff;\n  box-shadow: ", ";\n  border-radius: ", ";\n  width: 514px;\n  ", ";\n  top: 48px;\n  z-index: 1000;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  color: ", ";\n  line-height: 15px;\n  display: flex;\n  align-items: center;\n\n  color: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  color: ", ";\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 ", ";\n  display: flex;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 0 5px 5px 0;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n  width: 342px;\n  height: 40px;\n  display: flex;\n  cursor: pointer;\n  justify-content: space-between;\n  background: #ffffff;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonContainer = _styledComponents["default"].div(_templateObject());

var ContainerDatepicker = _styledComponents["default"].div(_templateObject2());

var CalendarIcon = _styledComponents["default"].div(_templateObject3(), _tokens["default"].colors.brand.primary.darkest);

var ContainerDate = _styledComponents["default"].div(_templateObject4(), _tokens["default"].spacing.inset.xs);

var Text = _styledComponents["default"].div(_templateObject5(), (0, _FontUtil.fontStyleMaker)({
  Tokens: _tokens["default"],
  fontFamily: "body",
  fontWeight: "medium",
  fontSize: "xxs"
}), _tokens["default"].colors.neutral.dark.base);

var Date = _styledComponents["default"].div(_templateObject6(), (0, _FontUtil.fontStyleMaker)({
  Tokens: _tokens["default"],
  fontFamily: "body",
  fontWeight: "medium",
  fontSize: "xxs"
}), _tokens["default"].colors.neutral.dark.base, _tokens["default"].colors.neutral.dark["03"]);

var DatepickerContainer = _styledComponents["default"].div(_templateObject7(), _tokens["default"].shadow.level1, _tokens["default"].border.sm, function (props) {
  return props.alignContainer === 'center' ? 'left: -150px' : "".concat(props.alignContainer, ": 0");
});

var Container = _styledComponents["default"].div(_templateObject8());

var MonthContainer = _styledComponents["default"].div(_templateObject9());

var MonthTitle = _styledComponents["default"].div(_templateObject10(), (0, _FontUtil.fontStyleMaker)({
  Tokens: _tokens["default"],
  fontFamily: "body",
  fontWeight: "regular",
  fontSize: "xs"
}), _tokens["default"].colors.neutral.dark.base);

var MonthHeader = _styledComponents["default"].div(_templateObject11());

var CalendarContainer = _styledComponents["default"].div(_templateObject12());

var BlockMessage = _styledComponents["default"].div(_templateObject13(), _tokens["default"].colors.feedback.danger.light, (0, _FontUtil.fontStyleMaker)({
  Tokens: _tokens["default"],
  fontFamily: "body",
  fontWeight: "medium",
  fontSize: "xs"
}), _tokens["default"].colors.neutral.dark.dark);

var Day = _styledComponents["default"].div(_templateObject14(), function (props) {
  return props.disabled ? 'not-allowed' : props.onClick && 'pointer';
}, function (props) {
  return props.selected && _tokens["default"].colors.brand.primary.medium;
}, (0, _FontUtil.fontStyleMaker)({
  Tokens: _tokens["default"],
  fontFamily: "body",
  fontWeight: "medium",
  fontSize: "xxs"
}), function (props) {
  return props.disabled ? _tokens["default"].colors.neutral.dark['02'] : _tokens["default"].colors.neutral.dark.base;
}, function (props) {
  return (props.first || props.last) && "color: ".concat(_tokens["default"].colors.neutral.light.base, ";\n  background: ").concat(_tokens["default"].colors.brand.primary.darkest, ";");
}, function (props) {
  return props.first && " border-radius: 5px";
}, function (props) {
  return props.last && "  border-radius: 5px";
});

var DayBackground = _styledComponents["default"].div(_templateObject15(), function (props) {
  return props.selected && _tokens["default"].colors.brand.primary.medium;
}, function (props) {
  return props.disabled && _tokens["default"].colors.neutral.dark['03'];
}, function (props) {
  return props.firstInLine && '5px 0 0  5px';
}, function (props) {
  return props.lastInLine && '0 5px 5px 0';
}, function (props) {
  return props.first && '5px 0 0  5px';
}, function (props) {
  return props.last && '0 5px 5px 0';
});

var DayHeader = (0, _styledComponents["default"])(Day)(_templateObject16(), (0, _FontUtil.fontStyleMaker)({
  Tokens: _tokens["default"],
  fontFamily: "body",
  fontWeight: "regular",
  fontSize: "xxs"
}), _tokens["default"].colors.neutral.dark['01']);

var Datepicker = function Datepicker(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      daysCalendar = _useState4[0],
      setDaysCalendar = _useState4[1];

  var _useState5 = (0, _react.useState)([(0, _dayjs["default"])(props.dates[0]), (0, _dayjs["default"])(props.dates[0]).add(1, 'month')]),
      _useState6 = _slicedToArray(_useState5, 2),
      months = _useState6[0],
      setMonths = _useState6[1];

  var _useState7 = (0, _react.useState)((0, _dayjs["default"])()),
      _useState8 = _slicedToArray(_useState7, 1),
      today = _useState8[0];

  var _useState9 = (0, _react.useState)(true),
      _useState10 = _slicedToArray(_useState9, 2),
      firstClick = _useState10[0],
      setFirstClick = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      secondDateHover = _useState12[0],
      setSecondDateHover = _useState12[1];

  var createArray = function createArray(size, firstNumber) {
    var firstNumberCounter = firstNumber ? firstNumber + 1 : 1;
    var array = Array.from(Array(size).keys());
    array = array.map(function (number) {
      firstNumberCounter = firstNumberCounter + 1;
      return firstNumberCounter - 1;
    });
    return array;
  };

  (0, _react.useEffect)(function () {
    var dates = [];
    months.forEach(function (date, index) {
      var numberOfDaysOfThisMonth = date.daysInMonth();
      var numberOfDaysOfPastMonth = (0, _dayjs["default"])(date).add(-1, 'month').daysInMonth();
      var firstDayOfThisMonth = date.startOf('month').weekday();
      dates[index] = [].concat(_toConsumableArray(createArray(firstDayOfThisMonth, numberOfDaysOfPastMonth - firstDayOfThisMonth).map(function (value) {
        return -value;
      })), _toConsumableArray(createArray(numberOfDaysOfThisMonth)));
    });
    setDaysCalendar(dates);
  }, [months]);
  (0, _react.useEffect)(function () {
    if (!opened) {
      setFirstClick(true);
      props.onClose && props.onClose();
    }
  }, [opened]);

  var changeYear = function changeYear(index, plus) {
    var newMonths = months.map(function (month) {
      return (0, _dayjs["default"])(month).add(plus ? 1 : -1, 'year');
    });
    setMonths(newMonths);
  };

  var changeMonth = function changeMonth(index, plus) {
    var newMonths = months.map(function (month, indexMonth) {
      return (0, _dayjs["default"])(month).add(plus ? 1 : -1, 'month');
    });
    setMonths(newMonths);
  };

  var ref = (0, _react.useRef)(null);

  var handleClickOutside = function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpened(false);
    }
  };

  (0, _react.useEffect)(function () {
    document.addEventListener('click', handleClickOutside, true);
    return function () {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(ContainerDatepicker, {
    ref: ref,
    style: props.style
  }, /*#__PURE__*/_react["default"].createElement(ButtonContainer, {
    id: "button",
    onClick: function onClick() {
      setOpened(!opened);
    }
  }, /*#__PURE__*/_react["default"].createElement(ContainerDate, null, /*#__PURE__*/_react["default"].createElement(Text, null, "Per\xEDodo"), /*#__PURE__*/_react["default"].createElement(Date, null, "".concat((0, _dayjs["default"])(props.dates[0]).format('DD MMM'), " - ").concat((0, _dayjs["default"])(props.dates[1]).format('DD MMM')))), /*#__PURE__*/_react["default"].createElement(CalendarIcon, null, /*#__PURE__*/_react["default"].createElement(_index.Icon, {
    path: _tokens["default"].icons.calendar,
    size: "22px",
    appearance: "light"
  }))), opened && /*#__PURE__*/_react["default"].createElement(DatepickerContainer, {
    id: "container",
    alignContainer: props.alignContainer
  }, /*#__PURE__*/_react["default"].createElement(Container, null, months.map(function (date, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(MonthContainer, null, /*#__PURE__*/_react["default"].createElement(MonthHeader, null, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        minWidth: '30px'
      }
    }, index === 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index.Icon, {
      path: _tokens["default"].icons['double-arrow-left'],
      size: "14px",
      id: "previousYear".concat(index),
      style: {
        marginRight: '8px'
      },
      onClick: function onClick() {
        return changeYear(index, false);
      }
    }), /*#__PURE__*/_react["default"].createElement(_index.Icon, {
      path: _tokens["default"].icons['single-arrow-left'],
      size: "14px",
      id: "previousMonth".concat(index),
      onClick: function onClick() {
        return changeMonth(index, false);
      }
    }))), /*#__PURE__*/_react["default"].createElement(MonthTitle, null, date.format('MMMM YYYY')), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        minWidth: '30px'
      }
    }, index === 1 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index.Icon, {
      path: _tokens["default"].icons['single-arrow-right'],
      size: "14px",
      style: {
        marginRight: '8px'
      },
      id: "nextMonth".concat(index),
      onClick: function onClick() {
        return changeMonth(index, true);
      }
    }), /*#__PURE__*/_react["default"].createElement(_index.Icon, {
      path: _tokens["default"].icons['double-arrow-right'],
      size: "14px",
      id: "nextYear".concat(index),
      onClick: function onClick() {
        return changeYear(index, true);
      }
    })))), /*#__PURE__*/_react["default"].createElement(CalendarContainer, null, ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(function (day, index) {
      return /*#__PURE__*/_react["default"].createElement(DayHeader, {
        key: index
      }, day);
    }), daysCalendar[index] && daysCalendar[index].map(function (day, indexDay) {
      var dayMonth = (0, _dayjs["default"])(months[index]).set('date', Math.abs(day)).add(Math.sign(day) === -1 ? -1 : 0, 'month');
      var disabledByRange = props.maxRange && !firstClick && Math.abs((0, _dayjs["default"])(props.dates[0]).diff(dayMonth, 'day')) > props.maxRange;
      var disabled = props.maxDate && dayMonth.isSameOrAfter(props.maxDate) || props.minDate && dayMonth.isSameOrBefore(props.minDate) || disabledByRange;
      var isToday = dayMonth.isSame(today, 'day');
      return /*#__PURE__*/_react["default"].createElement(DayBackground, {
        key: date + indexDay,
        firstInLine: indexDay % 7 === 0,
        lastInLine: (indexDay + 1) % 7 === 0,
        first: day >= 0 && dayMonth.isSame((0, _dayjs["default"])(props.dates[0])),
        last: day >= 0 && firstClick && dayMonth.isSame(props.dates[1]),
        "data-tooltip": disabledByRange ? 'Não é possível selecionar um período maior que 120 dias' : '',
        selected: Math.sign(day) === 1 && (dayMonth.isSameOrAfter((0, _dayjs["default"])(props.dates[0])) && dayMonth.isSameOrBefore(!firstClick ? secondDateHover : props.dates[1]) || dayMonth.isSameOrBefore((0, _dayjs["default"])(props.dates[0])) && dayMonth.isSameOrAfter(!firstClick ? secondDateHover : (0, _dayjs["default"])(props.dates[1])))
      }, Math.sign(day) === 1 && /*#__PURE__*/_react["default"].createElement(Day, {
        onMouseOver: function onMouseOver() {
          if (!firstClick) {
            setSecondDateHover(dayMonth);
          }
        },
        id: "day".concat(dayMonth.format('DDMMYY')),
        first: day >= 0 && dayMonth.isSame((0, _dayjs["default"])(props.dates[0])),
        last: day >= 0 && dayMonth.isSame(firstClick ? (0, _dayjs["default"])(props.dates[1]) : secondDateHover),
        onClick: function onClick() {
          if (!disabled) {
            props.onSelectDay(dayMonth, firstClick ? 0 : 1);
            setFirstClick(!firstClick);
            setOpened(firstClick);
          }
        },
        disabled: disabled
      }, isToday ? 'Hoje' : Math.abs(day)));
    }))), index < props.dates.length && /*#__PURE__*/_react["default"].createElement(_StyledComponents.Divider, null));
  }))));
};

var _default = Datepicker;
exports["default"] = _default;
Datepicker.propTypes = {
  alignContainer: _propTypes["default"].string,
  dates: _propTypes["default"].array,
  maxDate: _propTypes["default"].object,
  maxRange: _propTypes["default"].number,
  minDate: _propTypes["default"].object,
  onClose: _propTypes["default"].func,
  onSelectDay: _propTypes["default"].func,
  style: _propTypes["default"].object
};