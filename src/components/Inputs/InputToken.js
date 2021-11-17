import PropTypes from 'prop-types'
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Tokens } from '../../tokens'
import {Icon} from "../Icon";
import {fontStyleMaker} from "../../utils";

const TextInput = styled.input`
	width: 40px;
	height: 40px;
	border-radius: 6px;
	margin-right: ${Tokens.spacing.stack.nano};
	text-align: center;
	
	border: none;
	color: ${props => props.customColor.neutral.dark.base};
	box-shadow: 0 0 0 1px ${props => props.customColor.neutral.dark["02"]};
	${props => props.activeInput && `box-shadow: 0 0 0 2px ${props.customColor.brand.primary.darkest};`};
	
	&:focus{
		outline: none;
	}
	${fontStyleMaker({
		fontFamily:"body",
		fontSize:"sm",
		fontWeight:"regular"
	})};
`
const InputContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	opacity: ${props => props.disabled ? Tokens.opacity.level.medium : '1'};
`

const InputToken = props => {
	const numberOfInputsArray = new Array(props.numberOfInputs).fill(0)
	const [activeInputIndex, setActiveInputIndex] = useState(0)
	const [tokenTyped, setTokenTyped] = useState(numberOfInputsArray.fill(''))
	const [isSecureText, setIsSecureText] = useState(props.tokenType === 'password')

	const elRefs = React.useRef([])

	// useEffect(() => {
	// 	reference && reference({ ...ref, clearInputData })
	// }, [])

	useEffect(() => {
		props.onUpdateValue && props.onUpdateValue(tokenTyped.join('').replace(/\s/g, ''))
	}, [tokenTyped])

	const clearInputData = () => {
		elRefs.current.forEach((i) => {
			i.clear && i.clear()
		})
		setTokenTyped((prevValue) => numberOfInputsArray.fill(''))
		elRefs.current[0] && elRefs.current[0].focus && elRefs.current[0].focus()
	}

	const _tryToMoveBackward = (key, currentIndex) => {
		if (key && key === 'Backspace') {
			if (currentIndex >= 0) {
				const currentIndexClamped = currentIndex - 1 <= 0 ? 1 : currentIndex
				setActiveInputIndex(currentIndexClamped - 1)
				elRefs.current[currentIndexClamped - 1] && elRefs.current[currentIndexClamped - 1].focus()
				let newEntry = [...tokenTyped]
				newEntry[currentIndex] = ' '
				setTokenTyped(newEntry)
			}
		}
	}

	const _finishedTyping = (key) => {
		if (
			key &&
			key !== 'Backspace' &&
			tokenTyped.every((input) => input != null && input !== '' && input !== ' ')
		) {
			if (activeInputIndex === tokenTyped.length - 1) {
				setActiveInputIndex(-1)
				elRefs.current.forEach((input) => input === focusedElement && input.blur())
			}
		}
	}

	function getTextInput(currentIndex) {
		const focusedElement = document.activeElement
		let overrideInputValue = elRefs.current[currentIndex] !== focusedElement
			? tokenTyped[currentIndex].toString()
			: ''
		overrideInputValue = overrideInputValue || overrideInputValue === '' ? overrideInputValue : value
		return (
			<TextInput
				activeInput={activeInputIndex === currentIndex}
				customColor={props.customColor}
				ref={(ref) => {
					elRefs.current[currentIndex] = ref
					if (elRefs && elRefs.current.length === props.numberOfInputs) {
						props.exportInputRef && props.exportInputRef(elRefs.current)
					}
				}}
				placeholder={tokenTyped[currentIndex]}
				maxLength={1}
				type={isSecureText ? 'password' : 'text'}
				autoCapitalize={true}
				keyboardType={props.onlyNumbers ? 'numeric' : 'default'}
				blurOnSubmit={false}
				value={overrideInputValue}
				onChange={(event) => {
					const value = event.target.value
					if (value !== '' && (!props.onlyNumbers || (props.onlyNumbers && !isNaN(value) ))) {
						let newEntry = [...tokenTyped]
						newEntry[currentIndex] = value
						setTokenTyped(newEntry)
						if (activeInputIndex < tokenTyped.length - 1) {
							setActiveInputIndex(currentIndex + 1)
							elRefs.current[currentIndex + 1] && elRefs.current[currentIndex + 1].focus()
						}
						if (activeInputIndex === tokenTyped.length - 1) {
							setActiveInputIndex(-1)
							elRefs.current[currentIndex] && elRefs.current[currentIndex].blur()
						}
					}
				}}
				onKeyUp={(e) => {
					_tryToMoveBackward(e.key, currentIndex)
					_finishedTyping(e.key)
				}}
				onFocus={() => {
					setActiveInputIndex(currentIndex)
				}}
				onBlur={() => {
					setActiveInputIndex(-1)
				}}
				disabled={props.disabled}
			/>
		)
	}

	return (
		<InputContainer disabled={props.disabled}>
			{numberOfInputsArray.map((item, index)=> getTextInput(index))}
			{props.tokenType === 'password' && (
				<Icon
					path={isSecureText ? Tokens.icons["eye-closed"] : Tokens.icons["eye"]}
					disabled={props.disabled}
					size={20}
					onClick={() => setIsSecureText(!isSecureText)}
				/>
			)}
		</InputContainer>
	)
}

export {InputToken}

InputToken.propTypes = {
	identifier: PropTypes.string,
	active: PropTypes.bool,
	tokenType: PropTypes.bool,
	setActive: PropTypes.func,
	onUpdateValue: PropTypes.func,
	exportInputRef: PropTypes.func,
	disabled: PropTypes.bool,
	onlyNumbers: PropTypes.bool,
	size: PropTypes.any,
}