import coreColors from "./tokens/coreColors";

export { HeaderCalendar } from './components/HeaderCalendar'
export { Icon } from './components/Icon'
export { CollapseContainer } from './components/CollapseContainer'
export { List } from './components/List'
export { DatePickerMonth } from './components/DatePickerMonth/DatePickerMonth'
export { Calendar } from './components/Calendar/Calendar'
export { default as CalendarConst } from './components/Calendar/const'
export { ListHeader } from './components/ListHeader'
export { Modal } from './components/Modal'
export { SideModal } from './components/SideModal'
export { SideValuePanel } from './components/SideValuePanel'
export { TextRow, Divider, Container, FlexCenter, Title, Subtitle, TitlesContainer, TextAsButton } from './components/StyledComponents'
export { Tab } from './components/Tabs/Tab'
export { TabsCore } from './components/Tabs/TabsCore'
export { Table } from './components/Table'
export { Tabs } from './components/Tabs/Tabs'
export { TabsWithBadge } from './components/Tabs/TabsWithBadge/TabsWithBadge'
export { Datepicker } from './components/Datepicker'
export { InputLabel } from './components/Inputs/InputLabel'
export { Loading } from './components/Loading'
export { HeaderSelectOption } from './components/HeaderSelectOption'
export { ListModal } from './components/ListModal'
export { IconText } from './components/IconText'
export { Card } from './components/Card'
export { CardSelector } from './components/CardSelector'
export { Button } from './components/Button'
export { InfoLabel } from './components/InfoLabel'
export { InputFilter } from './components/Inputs/InputFilter'
export { CardSelectorSimple } from './components/CardSelectorSimple'
export { InputToken } from './components/Inputs/InputToken'
export { SimpleToast } from './components/SimpleToast'
export { TextDynamic } from './components/TextDynamic'

import fonts from "./tokens/fonts.tsx";
import tokens from "./tokens/tokens.tsx";
import icons from "./tokens/icons/icons";
import colors from "./tokens/colors.tsx";
import iconsAdquirentes from "./tokens/icons/iconsAdquirente";
import illustrations from "./tokens/icons/illustrations";
import iconsBanco from "./tokens/icons/iconsBanco";
import './tokens/global.css'

export const Tokens = {
	colors,
	coreColors,
	fonts,
	icons,
	iconsAdquirentes,
	iconsBanco,
	illustrations,
	...tokens
}

export * from './utils/clickHandleUtil'
export * from './utils/FontUtil'