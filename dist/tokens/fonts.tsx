import './fontsImport.css'

const fonts = {
    family: {
        head: 'Mark Pro',
        body: 'Roboto',
        condensed: 'Roboto Condensed',
        monospace: 'Roboto Mono',
        sharon: 'Sharon Sans'
    },
    weight: {
        bold: '700',
        medium: '500',
        regular: '400',
        light: '300',
    },
    fontSize: {
        xxxs: '10px',
        xxs: '12px',
        xs: '14px',
        sm: '16px',
        md: '18px',
        mdb: '20px',
        lg: '24px',
        llg: '28px',
        xl: '32px',
    },}
export type FontFamilyType = keyof typeof fonts.family
export type FontWeightType = keyof typeof fonts.weight
export type FontSizeType = keyof typeof fonts.fontSize
export default fonts