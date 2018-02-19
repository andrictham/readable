import React from 'react'
import PropTypes from 'prop-types'
import { Label, Input, Textarea, Message } from 'rebass'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import styled, { css } from 'styled-components'
import { FADED, DANGER } from '../utils/colors'

const FormField = props => {
	// This is a custom component which will be passed to Redux Form’s <Field /> component.
	// It wraps around our presentational components such as <Label />, <Input />. and <Textarea /> from Rebass.
	// We also handle a bunch of stuff here, such as hooking up the label and the input using htmlFor and id on the label and input respectively.
	const {
		input,
		options,
		type,
		label,
		placeholder,
		rows,
		disabled,
		meta: { touched, error, warning },
	} = props

	return (
		<div>
			{label && (
				<Label mt={2} mb={3} htmlFor={input.name}>
					{label}
				</Label>
			)}
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
					rows={rows}
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

			{touched &&
				((error && (
					<ValidationMessage bg={DANGER} mb={4}>
						{error}
					</ValidationMessage>
				)) ||
					(warning && (
						<ValidationMessage bg={DANGER} mb={4}>
							{warning}
						</ValidationMessage>
					)))}
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

const ValidationMessage = styled(Message)`
	font-size: 0.8rem;
	font-weight: normal;
	border-radius: 2px;
`

FormField.defaultProps = {
	rows: 6,
}

FormField.propTypes = {
	input: PropTypes.object.isRequired,
	options: PropTypes.array,
	type: PropTypes.string.isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	rows: PropTypes.number,
	disabled: PropTypes.bool,
}

export default FormField
