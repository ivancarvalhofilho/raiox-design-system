import dayjs from 'dayjs'
var weekday = require('dayjs/plugin/weekday')

dayjs.extend(weekday)

require('dayjs/locale/pt-br')

dayjs.locale('pt-br')
export default dayjs