"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarCell = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 14px;\n  width: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 75px;\n  border-radius: 0px;\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CalendarCellContainer = _styledComponents["default"].div(_templateObject());

var DayNumber = _styledComponents["default"].span(_templateObject2());

var CalendarCell = function CalendarCell(props) {
  return /*#__PURE__*/_react["default"].createElement(CalendarCellContainer, null, /*#__PURE__*/_react["default"].createElement(DayNumber, null, props.day));
};

exports.CalendarCell = CalendarCell;