import React from 'react'
import { Field } from 'redux-form'
import { Flex, Box } from 'rebass'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'
import FormField from '../../../components/FormField'
import { SubmitButton, DeleteButton } from '../../../components/Buttons'

const EditPostForm = ({
	isEditing,
	isLoading,
	pristine, // provided by Redux Form
	submitting, // provided by Redux Form
	handleSubmit, // a built-in method that Redux Form gives us for free.
	onSubmit, // our custom submit function, that we will pass to Redux Form
	onDelete,
}) => (
	<Box is="form" onSubmit={handleSubmit(onSubmit)} width={1}>
		{/* TODO: Use react-select and load in the list of categories here */}
		<Field
			component={FormField}
			type="textarea"
			name="postBody"
			placeholder="Say something nice or wicked"
			rows={3}
			disabled={isLoading}
		/>
		<Field
			component={FormField}
			type="input"
			name="authorName"
			label={isEditing ? 'Posted by' : 'Your Name'}
			placeholder="John Appleseed"
			disabled={isEditing}
		/>
		<Flex>
			<Box my={3} mr={2}>
				<SubmitButton
					type="submit"
					disabled={pristine || submitting || isLoading}
				>
					{submitting
						? 'Submitting...'
						: isEditing ? 'Update Comment' : 'Add Comment'}
				</SubmitButton>
			</Box>
			<Box my={3}>
				{isEditing && (
					<Tooltip
						title="⚠️ Are you sure? This cannot be undone."
						position="top"
						trigger="mouseenter"
						arrow
						arrowSize="big"
						distance={50}
						duration={450}
						followCursor
						inertia
						animateFill
					>
						<DeleteButton
							onClick={e => {
								e.preventDefault()
								onDelete()
							}}
							disabled={isLoading}
						>
							Delete Comment
						</DeleteButton>
					</Tooltip>
				)}
			</Box>
		</Flex>
	</Box>
)

export default EditPostForm
