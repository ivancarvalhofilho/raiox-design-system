import { Tokens } from "../tokens/index";
import { FontFamilyType, FontSizeType, FontWeightType } from "../tokens/fonts";

interface FontStyleMakerParams {
  fontFamily: FontFamilyType
  fontWeight: FontWeightType
  fontSize: FontSizeType
}

export const fontStyleMaker = ({
  fontFamily,
  fontWeight,
  fontSize,
}: FontStyleMakerParams) => {
  return {
    fontFamily: Tokens.fonts.family[fontFamily],
    fontWeight: Tokens.fonts.weight[fontWeight],
    fontSize: Tokens.fonts.fontSize[fontSize],
    lineHeight: Tokens.fonts.fontSize[fontSize],
  }
}