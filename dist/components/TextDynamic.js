import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {Tokens} from '../tokens'
import uuidv4, {uuid} from "uuidv4";

const DefaultText = styled.span`
`

const BOLD_COUNTER = 1
const BoldText = styled.span`
  font-weight: ${Tokens.fonts.weight.bold};
`

const ITALIC_COUNTER = 2
const ItalicText = styled.span`
  font-style: italic;
`

const BoldItalicText = styled.span`
  font-style: italic;
  font-weight: ${Tokens.fonts.weight.bold};
`

const TEXT_STYLES_ENUM = {
    0: DefaultText,
    1: BoldText,
    2: ItalicText,
    3: BoldItalicText,
}

const TextDynamic = props => {
    const text = props.children
    const words = text.split(' ')

    return (
        <>
            {
                words.map((word, index) => {
                        let textStyleCounter = 0
                        if (props.boldIndex.includes(index)) {
                            textStyleCounter += BOLD_COUNTER
                        }

                        if (props.italicIndex.includes(index)) {
                            textStyleCounter += ITALIC_COUNTER
                        }

                        const TextStyle = TEXT_STYLES_ENUM[textStyleCounter]

                        return (
                            <DefaultText
                                as={TextStyle}
                                key={uuid()}>{`${word} `}
                            </DefaultText>
                        )
                    }
                )}
        </>
    )
}

export {TextDynamic}

TextDynamic.propTypes = {
    boldIndex: PropTypes.array,
    italicIndex: PropTypes.array,
}
