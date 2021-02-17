import Tokens from "../tokens";
import {FontFamilyType, FontSizeType, FontWeightType} from "../tokens/fonts";

interface FontStyleMakerParams {
  Tokens: any
  fontFamily: FontFamilyType
  fontWeight: FontWeightType
  fontSize: FontSizeType
}

const fontStyleMaker = ({
  fontFamily,
  fontWeight,
  fontSize,
}: FontStyleMakerParams) => {
  return {
    fontFamily: Tokens.fonts.family[fontFamily],
    fontWeight: Tokens.fonts.weight[fontWeight],
    fontSize: Tokens.fonts.fontSize[fontSize],
  }
}
export default fontStyleMaker;