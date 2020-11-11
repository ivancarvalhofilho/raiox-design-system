'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})

var _dist = require('./dist')

Object.keys(_dist).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return
  if (key in exports && exports[key] === _dist[key]) return
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dist[key]
    },
  })
})
