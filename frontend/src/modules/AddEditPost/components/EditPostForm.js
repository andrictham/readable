import React from 'react'
import { Field } from 'redux-form'
import { Box, Label, Input, Textarea, Button } from 'rebass'
import styled, { css } from 'styled-components'
import { MAIN } from '../../../utils/colors'
import { TRANSITION_SNAPPY } from '../../../utils/transitions'

const EditPostForm = ({
	isEditing,
	isLoading,
	pristine,
	submitting,
	handleSubmit, // a built-in method that Redux Form gives us for free.
	onSubmit, // our custom submit function, that we will pass to Redux Form
}) => (
	<Box
		is="form"
		onSubmit={handleSubmit(onSubmit)}
		width={[1, 3 / 4, null, 5 / 6]}
	>
		{/* <Label mt={2}>Category</Label>
		 TODO: Use react-select and load in the list of categories here */}
		<Field
			component={TextField}
			type="input"
			name="postTitle"
			label="Title"
			placeholder="This is the title of your post"
			disabled={isLoading}
		/>
		<Field
			component={TextField}
			type="input"
			name="authorName"
			label="Your Name"
			placeholder="John Appleseed"
			disabled={isLoading}
		/>
		<Field
			component={TextField}
			type="textarea"
			name="postBody"
			label="Body"
			placeholder="Say something nice or wicked"
			disabled={isLoading}
		/>
		<SubmitButton
			type="submit"
			disabled={pristine || submitting || isLoading}
			my={3}
		>
			{isEditing ? 'Update Post' : 'Add Post'}
		</SubmitButton>
	</Box>
)

const TextField = ({ input, type, label, placeholder, disabled }) => {
	// This is a custom component which will be passed to Redux Form’s <Field /> component.
	// It wraps around our presentational components such as <Label />, <Input />. and <Textarea /> from Rebass.
	// We also handle a bunch of stuff here, such as hooking up the label and the input using htmlFor and id on the label and input respectively.
	return (
		<div>
			<Label mt={2} htmlFor={input.name}>
				{label}
			</Label>
			{type === 'input' && (
				<StyledInput
					{...input}
					id={input.name}
					// Form placeholders are a custom prop we pass in.
					placeholder={placeholder}
					disabled={disabled}
					mt={2}
					mb={4}
					p={3}
				/>
			)}
			{type === 'textarea' && (
				<StyledTextarea
					{...input}
					id={input.name}
					// Form placeholders are a custom prop we pass in.
					placeholder={placeholder}
					disabled={disabled}
					mt={2}
					mb={3}
					p={3}
					rows={6}
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

const SubmitButton = styled(Button)`
	background-color: ${MAIN};
	cursor: pointer;
	padding: 0.8rem 1.4rem;
	transition: ${TRANSITION_SNAPPY};
`

export default EditPostForm
