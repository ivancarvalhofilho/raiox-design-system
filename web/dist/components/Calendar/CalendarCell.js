"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarCell = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = _interopRequireDefault(require("../../../../tokens/js/colors"));

var _const = _interopRequireDefault(require("./const"));

var _fonts = _interopRequireDefault(require("../../../../tokens/js/fonts"));

var _styles = _interopRequireDefault(require("../../../../tokens/js/styles"));

var _core = require("@material-ui/core");

var _StyledComponents = require("../StyledComponents");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 4px;\n  height: 4px;\n  border-radius: ", ";\n  background: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: 14px;\n  font-size: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  margin-right: ", ";\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  & > div {\n    display: inline-flex;\n    align-items: center;\n    margin: ", ";\n  }\n  font-family: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 14px;\n  font-size: ", ";\n  font-weight: ", ";\n  margin: ", ";\n  font-family: ", ";\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: ", ";\n  border-radius: 0px;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n  align-items: flex-end;\n  border: 1px solid\n    ", ";\n  background: ", ";\n  cursor: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CalendarCellContainer = _styledComponents["default"].div(_templateObject(), _const["default"].CELL_HEIGHT, function (props) {
  return props.isSelected ? _colors["default"].brand.primary.darkest : _colors["default"].neutral.dark['03'];
}, function (props) {
  return props.isHolyday && "".concat(_colors["default"].neutral.light['02'], " !important") || (props.isSelected || props.isHovered) && "".concat(_colors["default"].brand.primary.light, " !important");
}, function (props) {
  return props.isBlockedSelection && 'not-allowed' || props.currentMonth && 'pointer';
});

var DayNumber = _styledComponents["default"].span(_templateObject2(), _fonts["default"].fontSize.xs, function (props) {
  return props.isSelected && _fonts["default"].weight.medium || _fonts["default"].weight.regular;
}, _styles["default"].spacing.inset.nano, _fonts["default"].family.body, function (props) {
  return props.isBlockedSelection && _colors["default"].neutral.dark['02'] || props.isSelected && _colors["default"].brand.primary.darkest;
});

var DaySales = _styledComponents["default"].span(_templateObject3(), _styles["default"].spacing.inset.nano, _fonts["default"].family.body);

var SalesValue = _styledComponents["default"].span(_templateObject4(), _fonts["default"].fontSize.xs, _fonts["default"].family.condensed, _fonts["default"].weight.regular, _styles["default"].spacing.inset.quarck, function (props) {
  return !props.currentMonth && _colors["default"].neutral.dark['02'];
});

var SalesStatusDot = _styledComponents["default"].span(_templateObject5(), _styles["default"].border.radius.cirular, function (props) {
  return props.color;
});

var CalendarCell = function CalendarCell(props) {
  return /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
    key: "".concat(props.date.fullDate, "tooltip"),
    title: /*#__PURE__*/_react["default"].createElement(_StyledComponents.TooltipText, null, "N\xE3o \xE9 poss\xEDvel selecionar um per\xEDodo maior que ".concat(props.maxDateRange, " dias")),
    disableHoverListener: !(props.date.isBlockedSelection && props.date.currentMonth && props.maxDateRange),
    arrow: true
  }, /*#__PURE__*/_react["default"].createElement(CalendarCellContainer, {
    isSelected: props.date.isSelected,
    isHovered: props.date.isHovered,
    onClick: function onClick() {
      return props.date.currentMonth && !props.date.isBlockedSelection && props.onDayClick();
    },
    onMouseOver: function onMouseOver() {
      return props.date.currentMonth && !props.date.isBlockedSelection && props.onDayHover();
    },
    currentMonth: props.date.currentMonth,
    isHolyday: props.date.isHolyday,
    isBlockedSelection: props.date.isBlockedSelection
  }, props.date.currentMonth && /*#__PURE__*/_react["default"].createElement(DayNumber, {
    currentMonth: props.date.currentMonth,
    isSelected: props.date.isSelected,
    isBlockedSelection: props.date.isBlockedSelection
  }, props.date.day), props.date.currentMonth && /*#__PURE__*/_react["default"].createElement(DaySales, null, props.daySales && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(SalesValue, {
    currentMonth: props.date.currentMonth
  }, "R$", ' ', parseFloat(Math.abs(props.daySales)).toLocaleString('pt-br', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), /*#__PURE__*/_react["default"].createElement(SalesStatusDot, {
    color: props.daySales ? _colors["default"].feedback.success.dark : _colors["default"].feedback.danger.dark
  })))));
};

exports.CalendarCell = CalendarCell;