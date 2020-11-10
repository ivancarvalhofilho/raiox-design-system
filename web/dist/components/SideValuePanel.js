"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FontUtil = _interopRequireDefault(require("../utils/FontUtil"));

var _StyledComponents = require("./StyledComponents");

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  margin-right: ", ";\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  color: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  margin-bottom: 8px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents["default"].div(_templateObject(), function (props) {
  return (0, _FontUtil["default"])(props.theme, 'body', 'regular', 'xs', 'neutral.dark.01');
});

var Container = _styledComponents["default"].div(_templateObject2());

var Item = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.fullWidth ? "width: 100%;\n      margin: 0 10px;" : 'margin: 0px 40px';
});

var Value = _styledComponents["default"].span(_templateObject4(), function (props) {
  return (0, _FontUtil["default"])(props.theme, 'body', 'light', 'lg', 'neutral.dark.base');
}, function (props) {
  return props.positive === true ? props.theme.colors.feedback.success.dark : props.positive === false && props.theme.colors.feedback.danger.dark;
});

var DollarSign = _styledComponents["default"].span(_templateObject5(), function (props) {
  return (0, _FontUtil["default"])(props.theme, 'body', 'regular', 'sm', 'neutral.dark.base');
}, function (props) {
  return props.theme.styles.spacing.inset.quarck;
}, function (props) {
  return props.positive === true ? props.theme.colors.feedback.success.dark : props.positive === false && props.theme.colors.feedback.danger.dark;
});

var Subtitle = (0, _styledComponents["default"])(_StyledComponents.TextRow)(_templateObject6(), function (props) {
  return (0, _FontUtil["default"])(props.theme, 'body', 'medium', 'sm', 'neutral.dark.base');
}, function (props) {
  return props.color;
});

var SideValuePanel = function SideValuePanel(props) {
  return /*#__PURE__*/_react["default"].createElement(Container, null, props.values.map(function (value, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(Item, {
      fullWidth: props.fullWidth
    }, props.titles && /*#__PURE__*/_react["default"].createElement(Title, null, props.titles[index]), /*#__PURE__*/_react["default"].createElement(_StyledComponents.FlexCenter, {
      "data-tooltip": "R$ ".concat(value)
    }, /*#__PURE__*/_react["default"].createElement(DollarSign, {
      positive: props.checkValue && props.checkValue[index] ? Number.parseFloat(value) > 0 : null
    }, "R$"), /*#__PURE__*/_react["default"].createElement(Value, {
      positive: props.checkValue && props.checkValue[index] ? Number.parseFloat(value) > 0 : null
    }, value)), props.subtitles && /*#__PURE__*/_react["default"].createElement(Subtitle, {
      color: props.subtitlesColors && props.subtitlesColors[index],
      justifyContent: "center"
    }, props.subtitlesIcons && props.subtitlesIcons[index] && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      path: props.subtitlesIcons[index],
      size: "14px",
      appearance: props.subtitlesColors && props.subtitlesColors[index],
      style: {
        marginRight: '5px'
      }
    }), props.subtitles[index])), index < props.values.length - 1 && /*#__PURE__*/_react["default"].createElement(_StyledComponents.Divider, null));
  }));
};

var _default = SideValuePanel;
exports["default"] = _default;
SideValuePanel.propTypes = {
  checkValue: _propTypes["default"].array,
  fullWidth: _propTypes["default"].bool,
  subtitles: _propTypes["default"].array,
  subtitlesColors: _propTypes["default"].array,
  subtitlesIcons: _propTypes["default"].array,
  titles: _propTypes["default"].array,
  values: _propTypes["default"].array
};