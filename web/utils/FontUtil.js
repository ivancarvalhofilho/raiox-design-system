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
  color: theme.colors[fontColor[0]][fontColor[1]][fontColor[2]],
})
export default fontStyleMaker
