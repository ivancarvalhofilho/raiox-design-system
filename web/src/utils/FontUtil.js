const fontStyleMaker = (theme, fontFamily, fontWeight, fontSize, fontColor) => {
  const color = fontColor && fontColor.split('.')
  return {
    fontFamily: theme.fonts.family[fontFamily],
    fontWeight: theme.fonts.weight[fontWeight],
    fontSize: theme.fonts.fontSize[fontSize],
    color:
      color && color.length === 3 && theme.colors[color[0]][color[1]][color[2]],
  }
}
export default fontStyleMaker
