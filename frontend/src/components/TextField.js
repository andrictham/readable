import React from 'react'
import { Label, Input, Textarea } from 'rebass'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import styled, { css } from 'styled-components'
import { FADED } from '../utils/colors'

const TextField = props => {
	// This is a custom component which will be passed to Redux Form’s <Field /> component.
	// It wraps around our presentational components such as <Label />, <Input />. and <Textarea /> from Rebass.
	// We also handle a bunch of stuff here, such as hooking up the label and the input using htmlFor and id on the label and input respectively.
	const { input, options, type, label, placeholder, disabled } = props

	return (
		<div>
			{console.log('options: ', options)}
			<Label mt={2} mb={3} htmlFor={input.name}>
				{label}
			</Label>
			{type === 'input' && (
				<StyledInput
					{...input} // Pass in all props that React Form gives us
					id={input.name}
					// Form placeholders are a custom prop we pass in.
					placeholder={placeholder}
					disabled={disabled}
					mb={3}
					p={2}
				/>
			)}
			{type === 'textarea' && (
				<StyledTextarea
					{...input} // Pass in all props that React Form gives us
					id={input.name}
					// Form placeholders are a custom prop we pass in.
					placeholder={placeholder}
					disabled={disabled}
					mb={3}
					p={2}
					rows={6}
				/>
			)}
			{type === 'select' && (
				<StyledSelect
					{...input} // Pass in all props that React Form gives us
					id={input.name}
					// Form placeholders are a custom prop we pass in.
					placeholder={placeholder}
					disabled={disabled}
					options={options}
					onBlur={() => input.onBlur(input.value)} // react-select clears our value onBlur, somehow. This tells it to keep the value passed in from Redux Form.
				/>
			)}
		</div>
	)
}

const StyledInput = styled(Input)`
	${props =>
		props.disabled &&
		css`
			cursor: not-allowed;
		`};
`

const StyledTextarea = styled(Textarea)`
	${props =>
		props.disabled &&
		css`
			cursor: not-allowed;
		`};
`

const StyledSelect = styled(Select)`
	margin-bottom: 24px;
	div {
		${props =>
			props.disabled &&
			css`
				cursor: not-allowed;
				border: none;
				span {
					color: ${FADED} !important;
				}
			`};
	}
`

export default TextField
