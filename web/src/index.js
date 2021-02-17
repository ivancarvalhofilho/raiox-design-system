export { default as handleOutsideDivClick } from './utils/clickHandleUtil'
export { default as fontStyleMaker } from './utils/FontUtil'

import fonts from "./tokens/fonts.tsx";
import tokens from "./tokens/tokens.tsx";
import icons from "./tokens/icons/icons";
import colors from "./tokens/colors.tsx";
import iconsAdquirentes from "./tokens/icons/iconsAdquirente";
import illustrations from "./tokens/icons/illustrations";
import iconsBanco from "./tokens/icons/iconsBanco";
import './tokens/global.css'

const Tokens = {
	colors,
	fonts,
	icons,
	iconsAdquirentes,
	iconsBanco,
	illustrations,
	...tokens
}

export default Tokens

export { default as HeaderCalendar } from './components/HeaderCalendar'
export { default as Icon } from './components/Icon'
export { default as CollapseContainer } from './components/CollapseContainer'
export { default as List } from './components/List'
export { default as DatePickerMonth } from './components/DatePickerMonth/DatePickerMonth'
export { default as Calendar } from './components/Calendar/Calendar'
export { default as ListHeader } from './components/ListHeader'
export { default as Modal } from './components/Modal'
export { default as SideModal } from './components/SideModal'
export { default as SideValuePanel } from './components/SideValuePanel'
export { TextRow, Divider, Container } from './components/StyledComponents'
export { default as Tab } from './components/Tab'
export { default as Table } from './components/Table'
export { default as Tabs } from './components/Tabs'
export { default as Datepicker } from './components/Datepicker'
export { default as InputLabel } from './components/InputLabel'
