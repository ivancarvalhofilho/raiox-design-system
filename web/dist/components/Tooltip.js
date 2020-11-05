
  var _useState7 = (0, _react.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      widthTooltip = _useState8[0],
      setWidthTooltip = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      positionX = _useState10[0],
      setPositionX = _useState10[1];

  var _useState11 = (0, _react.useState)(0),
      _useState12 = _slicedToArray(_useState11, 2),
      positionY = _useState12[0],
      setPositionY = _useState12[1];

  var _useState13 = (0, _react.useState)(''),
      _useState14 = _slicedToArray(_useState13, 2),
      message = _useState14[0],
      setMessage = _useState14[1];

  var tooltipRef = (0, _react.useRef)();
  console.log('widthTooltip', widthTooltip);
  console.log('positionX', positionX);

  var onMouseOver = function onMouseOver(element, e) {
    setMessage(element.attributes.getNamedItem(attributte).value);
    setHeight(element.getBoundingClientRect().height + 25);
    setPositionX(element.getBoundingClientRect().left);
    setShow(true);
    setPositionY(element.getBoundingClientRect().top - (tooltipRef.current ? tooltipRef.current.clientHeight : 50) - 10);
    setWidthTooltip(tooltipRef.current && tooltipRef.current.clientWidth > 0 ? tooltipRef.current.clientWidth : 123);
    setWidth((tooltipRef.current && tooltipRef.current.clientWidth > 0 ? tooltipRef.current.clientWidth / 2 : 62) - element.clientWidth / 2 + 3);
  };

  var onMouseLeave = function onMouseLeave(e) {
    setShow(false);
  };

  (0, _react.useEffect)(function () {
    document.querySelectorAll("[".concat(attributte, "]")).forEach(function (element) {
      element.onmouseover = onMouseOver.bind(_this, element);
      element.onmouseleave = onMouseLeave.bind(_this, element);
    });
    setTimeout(function () {
      document.querySelectorAll("[".concat(attributte, "]")).forEach(function (element) {
        element.onmouseover = onMouseOver.bind(_this, element);
        element.onmouseleave = onMouseLeave.bind(_this, element);
      });
    }, 5000);
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(TooltipMessage, {
    ref: tooltipRef,
    height: height,
    show: show,
    width: width,
    positionX: positionX,
    positionY: positionY
  }, message, /*#__PURE__*/_react["default"].createElement(Arrow, {
    width: widthTooltip
  })));
};

var _default = Tooltip;
exports["default"] = _default;