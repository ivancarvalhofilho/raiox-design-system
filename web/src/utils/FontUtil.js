const fontStyleMaker = (
  theme,
  fontFamily,
  fontWeight,
  fontSize,
  fontColor,
) => ({
  fontFamily: theme.fonts.family[fontFamily],
  fontWeight: theme.fonts.weight[fontWeight],
  fontSize: theme.fonts.fontSize[fontSize],
  color: fontColor && theme.colors[fontColor.split('.')],
})
export default fontStyleMaker
