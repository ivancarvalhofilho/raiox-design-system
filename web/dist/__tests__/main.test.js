"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _enzymeToJson = _interopRequireDefault(require("enzyme-to-json"));

var _Calendar = _interopRequireDefault(require("../components/Calendar/Calendar"));

var _js = _interopRequireDefault(require("../../../tokens/js"));

var _styledComponents = require("styled-components");

var _const = _interopRequireDefault(require("../components/Calendar/const"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

it('should render the homepage for the non logged in user', function () {
  var spy = jest.spyOn(global.console, 'error');
  var props = {
    month: 0,
    year: 2020,
    maxDateRange: 7,
    dayWithSales: [{
      day: '01/01/2020',
      sale: 50,
      type: 'A'
    }, {
      day: '01/13/2020',
      sale: 700.55,
      type: 'R'
    }, {
      day: '02/01/2020',
      sale: 500,
      type: 'R'
    }],
    holydays: ['01/24/2020', '04/01/2020']
  };
  var selectedDates = {
    state: _const["default"].STATES.SELECTED,
    firstClickDate: null,
    startDate: '01/09/2020',
    endDate: '01/22/2020'
  };
  var app = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: _js["default"]
  }, /*#__PURE__*/_react["default"].createElement(_Calendar["default"], _extends({}, props, {
    selectedDates: selectedDates,
    setSelectedDates: function setSelectedDates() {}
  }))));
  expect((0, _enzymeToJson["default"])(app)).toMatchSnapshot();
  expect(spy).not.toHaveBeenCalled();
});