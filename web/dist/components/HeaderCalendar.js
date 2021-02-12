"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _FontUtil = require("../utils/FontUtil");

var _tokens = _interopRequireDefault(require("../../tokens"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  color: ", ";\n  padding: ", ";\n  white-space: nowrap;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  color: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  color: ", ";\n  white-space: nowrap;\n  margin-left: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: Calc(70% - 24px);\n  margin-left: 24px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border: ", " solid #e0e0e0;\n  box-sizing: border-box;\n  border-radius: ", ";\n  padding: ", ";\n  display: flex;\n  align-items: center;\n  height: 56px;\n  justify-content: space-between;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-left: ", ";\n  ", ";\n  \n  color: ", ";\n  cursor: pointer;\n  user-select: none;\n  white-space: nowrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 30%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Month = _styledComponents["default"].div(_templateObject());

var Date = _styledComponents["default"].div(_templateObject2(), _tokens["default"].spacing.inline.nano, (0, _FontUtil.fontStyleMaker)({
  fontFamily: "body",
  fontWeight: "medium",
  fontSize: "md"
}), _tokens["default"].colors.neutral.dark.base);

var Container = _styledComponents["default"].div(_templateObject3(), _tokens["default"].border.width.hairline, _tokens["default"].border.sm, _tokens["default"].spacing.inset.xs);

var Values = _styledComponents["default"].div(_templateObject4());

var Label = _styledComponents["default"].div(_templateObject5(), (0, _FontUtil.fontStyleMaker)({
  fontFamily: "body",
  fontWeight: "medium",
  fontSize: "sm"
}), function (props) {
  return props.color;
}, _tokens["default"].spacing.inline.xxs);

var Value = _styledComponents["default"].div(_templateObject6(), (0, _FontUtil.fontStyleMaker)({
  fontFamily: "body",
  fontWeight: "light",
  fontSize: "lg"
}), _tokens["default"].colors.neutral.dark.base);

var MoneySign = _styledComponents["default"].div(_templateObject7(), (0, _FontUtil.fontStyleMaker)({
  fontFamily: "body",
  fontWeight: "regular",
  fontSize: "sm"
}), _tokens["default"].colors.neutral.dark.base, "0 ".concat(_tokens["default"].spacing.inline.quarck, " 0 ").concat(_tokens["default"].spacing.inline.nano));

var HeaderCalendar = function HeaderCalendar(props) {
  return /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement(Month, null, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    size: _tokens["default"].iconSize.md,
    appearance: "primary",
    disabled: props.disabledLeft,
    id: "backMonth",
    style: {
      marginRight: _tokens["default"].spacing.inline.nano,
      cursor: !props.disabledLeft && 'pointer',
      opacity: props.disabledLeft ? _tokens["default"].opacity.level.medium : 1
    },
    path: _tokens["default"].icons['chevron-left'],
    onClick: function onClick() {
      return !props.disabledLeft && props.onBackMonthClick();
    }
  }), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    size: _tokens["default"].iconSize.md,
    id: "nextMonth",
    appearance: "primary",
    disabled: props.disabledRight,
    style: {
      cursor: !props.disabledRight && 'pointer',
      opacity: props.disabledRight ? _tokens["default"].opacity.level.medium : 1
    },
    path: _tokens["default"].icons['chevron-right'],
    onClick: function onClick() {
      return !props.disabledRight && props.onNextMonthClick();
    }
  }), /*#__PURE__*/_react["default"].createElement(Date, {
    onClick: function onClick() {
      return props.onMonthClick();
    },
    id: "date"
  }, (0, _dayjs["default"])().set('month', props.month).set('year', props.year).format('MMMM [de] YYYY'))), /*#__PURE__*/_react["default"].createElement(Values, null, props.values && props.values.map(function (_ref, index) {
    var label = _ref.label,
        value = _ref.value,
        color = _ref.color;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(Label, {
      color: color
    }, label), /*#__PURE__*/_react["default"].createElement(MoneySign, null, "R$"), /*#__PURE__*/_react["default"].createElement(Value, {
      "data-tooltip": "R$ ".concat(value)
    }, value));
  })));
};

var _default = HeaderCalendar;
exports["default"] = _default;
HeaderCalendar.propTypes = {
  month: _propTypes["default"].number,
  values: _propTypes["default"].array,
  year: _propTypes["default"].number,
  disabledRight: _propTypes["default"].bool,
  disabledLeft: _propTypes["default"].bool,
  onBackMonthClick: _propTypes["default"].func,
  onNextMonthClick: _propTypes["default"].func,
  onMonthClick: _propTypes["default"].func
};