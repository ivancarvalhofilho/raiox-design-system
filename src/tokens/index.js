import fonts from "./fonts.tsx";
import tokens from "./tokens.tsx";
import icons from "./icons/icons";
import colors from "./colors.tsx";
import coreColors from "./coreColors.tsx";
import iconsAdquirentes from "./icons/iconsAdquirente";
import illustrations from "./icons/illustrations";
import iconsBanco from "./icons/iconsBanco";
import './global.css'

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