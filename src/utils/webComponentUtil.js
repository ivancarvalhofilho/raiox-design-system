import * as React from 'react';
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import {Tokens} from "../tokens";

// Converte os nomes de props do react para nomes válidos para o html
export const convertPropsToHtmlProps = (attributes) => {
    const aux = {}

    Object.keys(attributes).map(k => ({
        [k.replace(/(\B[A-Z])/gm, "-$1").toLowerCase()]: attributes[k]
    })).forEach(attribute => {
        aux[Object.keys(attribute)] = attribute[Object.keys(attribute)]
    })
    aux.child = PropTypes.element
    return aux
}

// Converte os nomes de props do react para nomes válidos para o html
export const mapHtmlPropsToReactProps = (originalProps, propValues) => {
    return Object.keys(originalProps).reduce((result,original) => {
        let htmlProp = original.replace(/(\B[A-Z])/gm, "-$1").toLowerCase()
        if(original === 'children')
           htmlProp = 'child'
        return {
            ...result,
            [original]: parseHtmlValue(propValues[htmlProp]),
        }
    },{})
}

// Converte strings em tipos do JS (int, bool, function, json, array)
const parseHtmlValue = (attrValue) => {
    if(attrValue == null) return attrValue
    if(typeof attrValue !== 'string') return attrValue

    let value = attrValue
    try {
        if (typeof eval(attrValue) === 'function') {
            value = () => eval(attrValue).call()
        }
        else throw 1
    } catch {
        if (!!attrValue.startsWith && attrValue.startsWith("icon:")) {
            attrValue = attrValue.replace("icon:","")
            value = Tokens.icons[attrValue]
        } else if (attrValue === 'true' || attrValue === 'false') {
            value = attrValue === 'true';
        } else if (!isNaN(attrValue) && attrValue !== '') {
            value = +attrValue;
        }
        else if (/^{.*}/.exec(attrValue) || /^\[[.\s\S]*]/.exec(attrValue)) {
            const badJson = attrValue
            const quotesOnKeys = badJson.replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2": ')
            const onlyDoubleQuotes = quotesOnKeys.replace(/'/gm, '\"')
            const removeTraillingComma = onlyDoubleQuotes.replace(/,[\s\\n]*\]/, "]")
            const goodJsonString = removeTraillingComma
            value = JSON.parse(goodJsonString);
        } else if(attrValue?.trim().startsWith("<") && !attrValue?.trim().startsWith("<svg")){
            value = ReactHtmlParser(attrValue)
        }
    }
    return value
}
