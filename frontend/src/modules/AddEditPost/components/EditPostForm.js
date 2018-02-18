import React from 'react'
import { Field } from 'redux-form'
import { Flex, Box, Button, ButtonOutline } from 'rebass'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'
import TextField from '../../../components/TextField'
import styled from 'styled-components'
import { MAIN, DANGER } from '../../../utils/colors'
import { TRANSITION_SNAPPY } from '../../../utils/transitions'

const EditPostForm = ({
	categories,
	isEditing,
	isLoading,
	pristine, // provided by Redux Form
	submitting, // provided by Redux Form
	handleSubmit, // a built-in method that Redux Form gives us for free.
	onSubmit, // our custom submit function, that we will pass to Redux Form
	onDelete,
}) => (
	<Box
		is="form"
		onSubmit={handleSubmit(onSubmit)}
		width={[1, 3 / 4, null, 5 / 6]}
	>
		{/* TODO: Use react-select and load in the list of categories here */}
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
			type="textarea"
			name="postBody"
			label="Body"
			placeholder="Say something nice or wicked"
			disabled={isLoading}
		/>
		<Field
			component={TextField}
			type="input"
			name="authorName"
			label={isEditing ? 'Posted by' : 'Your Name'}
			placeholder="John Appleseed"
			disabled={isEditing}
		/>
		<Field
			component={TextField}
			type="select"
			name="postCategory"
			label={isEditing ? 'Posted in' : 'Category'}
			options={categories}
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
						: isEditing ? 'Update Post' : 'Add Post'}
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
							Delete Post
						</DeleteButton>
					</Tooltip>
				)}
			</Box>
		</Flex>
	</Box>
)

const SubmitButton = styled(Button)`
	background-color: ${MAIN};
	font-weight: 600;
	cursor: pointer;
	padding: 0.8rem 1.4rem;
	transition: ${TRANSITION_SNAPPY};
`

const DeleteButton = styled(ButtonOutline)`
	color: ${DANGER};
	border-color: ${DANGER}
	box-shadow: inset 0 0 0 2px ${DANGER};
	font-weight: 600;
	cursor: pointer;
	padding: 0.8rem 1.4rem;
	transition: ${TRANSITION_SNAPPY};
	&:hover {
		background-color: ${DANGER};
		box-shadow: inset 0 0 0 8px ${DANGER};
	}
`

export default EditPostForm
