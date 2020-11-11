'use strict'

function _typeof(obj) {
  '@babel/helpers - typeof'
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj
    }
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj
    }
  }
  return _typeof(obj)
}

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _react = _interopRequireWildcard(require('react'))

var _CalendarCell = require('./CalendarCell')

var _dayjs = _interopRequireDefault(require('../../utils/dayjs'))

var _styledComponents = _interopRequireDefault(require('styled-components'))

var _const = _interopRequireDefault(require('./const'))

var _FontUtil = _interopRequireDefault(require('../../utils/FontUtil'))

var _propTypes = _interopRequireDefault(require('prop-types'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null
  var cache = new WeakMap()
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache
  }
  return cache
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj }
  }
  var cache = _getRequireWildcardCache()
  if (cache && cache.has(obj)) {
    return cache.get(obj)
  }
  var newObj = {}
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc)
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  newObj.default = obj
  if (cache) {
    cache.set(obj, newObj)
  }
  return newObj
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object)
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object)
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable
      })
    keys.push.apply(keys, symbols)
  }
  return keys
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key])
      })
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        )
      })
    }
  }
  return target
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    })
  } else {
    obj[key] = value
  }
  return obj
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  )
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  )
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen)
  var n = Object.prototype.toString.call(o).slice(8, -1)
  if (n === 'Object' && o.constructor) n = o.constructor.name
  if (n === 'Map' || n === 'Set') return Array.from(o)
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen)
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i]
  }
  return arr2
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr))) return
  var _arr = []
  var _n = true
  var _d = false
  var _e = undefined
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value)
      if (i && _arr.length === i) break
    }
  } catch (err) {
    _d = true
    _e = err
  } finally {
    try {
      if (!_n && _i.return != null) _i.return()
    } finally {
      if (_d) throw _e
    }
  }
  return _arr
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([
    '\n  display: flex;\n  justify-content: center;\n  ',
    ';\n  margin-bottom: ',
    ';\n',
  ])

  _templateObject4 = function _templateObject4() {
    return data
  }

  return data
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([
    '\n  display: grid;\n  grid-template-columns: 45px 1fr 1fr 1fr 1fr 1fr 1fr;\n  user-select: none;\n',
  ])

  _templateObject3 = function _templateObject3() {
    return data
  }

  return data
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    '\n  display: grid;\n  grid-template-columns: 45px 1fr 1fr 1fr 1fr 1fr 1fr;\n  height: 100%;\n  grid-auto-rows: 1fr;\n  & > *:nth-child(7n-6) {\n    background: ',
    ';\n  }\n',
  ])

  _templateObject2 = function _templateObject2() {
    return data
  }

  return data
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  display: flex;\n  flex-flow: column;\n  height: inherit;\n',
  ])

  _templateObject = function _templateObject() {
    return data
  }

  return data
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0)
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }),
  )
}

var isSameOrBefore = require('dayjs/plugin/isSameOrBefore')

var isSameOrAfter = require('dayjs/plugin/isSameOrAfter')

_dayjs.default.extend(isSameOrBefore)

_dayjs.default.extend(isSameOrAfter)

var CalendarContainer = _styledComponents.default.div(_templateObject())

var CalendarGrid = _styledComponents.default.div(_templateObject2(), function(
  props,
) {
  return props.theme.colors.neutral.light['02']
})

var CalendarGridHeader = _styledComponents.default.div(_templateObject3())

var DayOfWeek = _styledComponents.default.div(
  _templateObject4(),
  function(props) {
    return (0, _FontUtil.default)(props.theme, 'body', 'medium', 'xxs')
  },
  function(props) {
    return props.theme.styles.spacing.stack.nano
  },
)

var Calendar = function Calendar(props) {
  var _useState = (0, _react.useState)(null)

  var _useState2 = _slicedToArray(_useState, 2)

  var dates = _useState2[0]

  var setDates = _useState2[1]

  function findDayWithSale(currentDay) {
    var dayWithSale = props.dayWithSales.find(function(date) {
      return (0, _dayjs.default)(date.day).isSame(currentDay, 'day')
    })
    return dayWithSale || null
  }

  function currentDayIsSelected(currentDay) {
    var isSelectedDay =
      (props.selectedDates.state === _const.default.STATES.SELECTED &&
        (0, _dayjs.default)(props.selectedDates.startDate).isSameOrBefore(
          currentDay,
          'day',
        ) &&
        !!props.selectedDates.endDate &&
        (0, _dayjs.default)(props.selectedDates.endDate).isSameOrAfter(
          currentDay,
          'day',
        )) ||
      (props.selectedDates.state === _const.default.STATES.IN_SELECTION &&
        (0, _dayjs.default)(props.selectedDates.startDate).isSame(
          currentDay,
          'day',
        )) ||
      (0, _dayjs.default)(props.selectedDates.endDate).isSame(currentDay, 'day')
    return isSelectedDay
  }

  function currentDayIsHovered(currentDay) {
    var isHoveredDay =
      props.selectedDates.state === _const.default.STATES.IN_SELECTION &&
      (0, _dayjs.default)(props.selectedDates.startDate).isSameOrBefore(
        currentDay,
        'day',
      ) &&
      !!props.selectedDates.endDate &&
      (0, _dayjs.default)(props.selectedDates.endDate).isSameOrAfter(
        currentDay,
        'day',
      )
    return isHoveredDay
  }

  function currentDayIsBlocked(currentDay) {
    var daysDiff = (0, _dayjs.default)(props.selectedDates.firstClickDate).diff(
      currentDay,
      'day',
    )
    var isBlocked =
      props.maxDateRange &&
      props.selectedDates.state === _const.default.STATES.IN_SELECTION &&
      (daysDiff >= props.maxDateRange - 1 || daysDiff <= -props.maxDateRange)
    return isBlocked
  }

  function currentDayIsHolyday(currentDay) {
    var holyday = props.holydays.find(function(date) {
      return (0, _dayjs.default)(date).isSame(currentDay, 'day')
    })
    return holyday
  }

  function _onDayClick(date) {
    if (props.selectedDates.state === _const.default.STATES.SELECTED) {
      props.setSelectedDates({
        startDate: date,
        endDate: date,
        firstClickDate: date,
        state: _const.default.STATES.IN_SELECTION,
      })
    } else if (
      props.selectedDates.state === _const.default.STATES.IN_SELECTION
    ) {
      if (
        (0, _dayjs.default)(props.selectedDates.firstClickDate).isAfter(
          (0, _dayjs.default)(date),
          'day',
        )
      ) {
        props.setSelectedDates(
          _objectSpread(
            _objectSpread({}, props.selectedDates),
            {},
            {
              startDate: date,
              endDate: props.selectedDates.firstClickDate,
              state: _const.default.STATES.SELECTED,
            },
          ),
        )
      } else {
        props.setSelectedDates(
          _objectSpread(
            _objectSpread({}, props.selectedDates),
            {},
            {
              startDate: props.selectedDates.firstClickDate,
              endDate: date,
              state: _const.default.STATES.SELECTED,
            },
          ),
        )
      }
    }
  }

  function _onDayHover(date) {
    if (props.selectedDates.state === _const.default.STATES.IN_SELECTION) {
      if (
        (0, _dayjs.default)(props.selectedDates.firstClickDate).isSameOrAfter(
          (0, _dayjs.default)(date),
          'day',
        )
      ) {
        props.setSelectedDates(
          _objectSpread(
            _objectSpread({}, props.selectedDates),
            {},
            {
              startDate: date,
              endDate: props.selectedDates.firstClickDate,
              state: _const.default.STATES.IN_SELECTION,
            },
          ),
        )
      } else if (
        (0, _dayjs.default)(props.selectedDates.firstClickDate).isSameOrBefore(
          (0, _dayjs.default)(date),
          'day',
        )
      ) {
        props.setSelectedDates(
          _objectSpread(
            _objectSpread({}, props.selectedDates),
            {},
            {
              startDate: props.selectedDates.firstClickDate,
              endDate: date,
              state: _const.default.STATES.IN_SELECTION,
            },
          ),
        )
      }
    }
  }

  function generateDayObject(day, iterableDay, isCurrentMonth) {
    var currentDay = iterableDay.set('date', day + 1)
    return {
      day: day + 1,
      fullDate: currentDay.format('MM/DD/YYYY'),
      currentMonth: isCurrentMonth,
      sale: findDayWithSale(currentDay),
      isHolyday: currentDayIsHolyday(currentDay),
      isSelected: currentDayIsSelected(currentDay),
      isHovered: currentDayIsHovered(currentDay),
      isBlockedSelection: currentDayIsBlocked(currentDay),
    }
  }

  ;(0, _react.useEffect)(
    function() {
      if (props.month != null && props.month >= 0 && props.month < 12) {
        var numberOfDaysOfPreviousMonth = Array.from(
          Array(
            (0, _dayjs.default)()
              .set('year', props.year)
              .set('month', props.month)
              .add(-1, 'month')
              .daysInMonth(),
          ).keys(),
        ).map(function(v) {
          return v
        })
        var currentMonth = (0, _dayjs.default)()
          .set('year', props.year)
          .set('month', props.month)
        var numberOfDaysOfThisMonth = currentMonth.daysInMonth()
        var firstDayOfThisMonth = currentMonth.startOf('month').weekday()
        var iterableDay = (0, _dayjs.default)()
          .set('year', props.year)
          .set('month', props.month - 1)
        var visibleDaysOfPreviousMonth = numberOfDaysOfPreviousMonth
          .splice(numberOfDaysOfPreviousMonth.length - firstDayOfThisMonth)
          .map(function(day) {
            return generateDayObject(day, iterableDay, false)
          })
        iterableDay = iterableDay
          .set('year', props.year)
          .set('month', props.month)
        var daysOnThisMonth = Array.from(
          Array(numberOfDaysOfThisMonth).keys(),
        ).map(function(day) {
          return generateDayObject(day, iterableDay, true)
        })
        var totalDays = visibleDaysOfPreviousMonth.concat(daysOnThisMonth)
        iterableDay = iterableDay
          .set('year', props.year)
          .set('month', props.month + 1)

        if (35 - totalDays.length >= 0) {
          var visibleDaysOfNextMonth = Array.from(
            Array(35 - totalDays.length).keys(),
          ).map(function(day) {
            return generateDayObject(day, iterableDay, false)
          })
          totalDays = totalDays.concat(visibleDaysOfNextMonth)
        } else {
          var _visibleDaysOfNextMonth = Array.from(
            Array(42 - totalDays.length).keys(),
          ).map(function(day) {
            return generateDayObject(day, iterableDay, false)
          })

          totalDays = totalDays.concat(_visibleDaysOfNextMonth)
        }

        setDates(totalDays)
      }
    },
    [props.month, props.dayWithSales, props.selectedDates],
  )
  return /* #__PURE__ */ _react.default.createElement(
    CalendarContainer,
    null,
    /* #__PURE__ */ _react.default.createElement(
      CalendarGridHeader,
      null,
      _const.default.DAYS_OF_WEEK.map(function(day) {
        return /* #__PURE__ */ _react.default.createElement(
          DayOfWeek,
          {
            key: day,
          },
          day,
        )
      }),
    ),
    /* #__PURE__ */ _react.default.createElement(
      CalendarGrid,
      null,
      dates &&
        dates.map(function(date, index) {
          return /* #__PURE__ */ _react.default.createElement(
            _CalendarCell.CalendarCell,
            {
              key: date.fullDate,
              date: date,
              daySale: date.sale,
              id: 'day'.concat(index),
              maxDateRange: props.maxDateRange,
              onDayClick: function onDayClick() {
                return _onDayClick(date.fullDate)
              },
              onDayHover: function onDayHover() {
                return _onDayHover(date.fullDate)
              },
            },
          )
        }),
    ),
  )
}

var _default = Calendar
exports.default = _default
Calendar.propTypes = {
  selectedDates: _propTypes.default.object,
  setSelectedDates: _propTypes.default.func,
  month: _propTypes.default.number,
  year: _propTypes.default.number,
  holydays: _propTypes.default.array,
  maxDateRange: _propTypes.default.number,
  dayWithSales: _propTypes.default.array,
}
