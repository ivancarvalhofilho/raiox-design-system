import fonts from "./fonts.tsx";
import tokens from "./tokens.tsx";
import icons from "./icons/icons";
import colors from "./colors.tsx";
import iconsAdquirentes from "./icons/iconsAdquirente";
import illustrations from "./icons/illustrations";
import iconsBanco from "./icons/iconsBanco";
import './global.css'

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