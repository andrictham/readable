import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPostRequest, getPostRequest } from '../actions'
import { reduxForm, Field } from 'redux-form'
import { Flex, Box, Heading, Label, Input, Textarea, Button } from 'rebass'
import { BG_TOP } from '../utils/colors'

class EditPost extends Component {
	componentDidMount() {
		const { match, getPostRequest } = this.props
		getPostRequest(match.params.id)
	}

	submitForm = formValues => {
		console.log('Submitting form: ', formValues)
		this.props.addPostRequest({
			id: Math.random(), // TODO: UDID
			timestamp: Date.now(),
			title: formValues.postTitle,
			body: formValues.postBody,
			author: formValues.authorName,
			category: 'cryptocurrency',
		})
	}

	render() {
		const { handleSubmit } = this.props
		// handleSubmit is a built-in method that Redux Form gives us for free.
		return (
			<Flex>
				<Box w={1} p={3} bg={BG_TOP}>
					<Heading my={3} pb={3}>
						Add a post
					</Heading>
					<EditPostForm
						onSubmit={this.submitForm}
						handleSubmit={handleSubmit}
					/>
				</Box>
			</Flex>
		)
	}
}

const EditPostForm = ({ handleSubmit, onSubmit }) => (
	<Box is="form" onSubmit={handleSubmit(onSubmit)} width={[1, 3 / 4, 1 / 2]}>
		{/* <Label mt={2}>Category</Label>
		 TODO: Use react-select and load in the list of categories here */}
		<Field
			component={TextField}
			type="input"
			name="postTitle"
			label="Title"
			placeholder="This is the title of your post"
		/>
		<Field
			component={TextField}
			type="input"
			name="authorName"
			label="Your Name"
			placeholder="John Appleseed"
		/>
		<Field
			component={TextField}
			type="textarea"
			name="postBody"
			label="Body"
			placeholder="Say something nice or wicked"
		/>
		<Button type="submit" my={3}>
			Add Post
		</Button>
	</Box>
)

const TextField = ({ input, type, label, placeholder }) => {
	// This is a custom component which will be passed to Redux Form’s <Field /> component.
	// It wraps around our presentational components such as <Label />, <Input />. and <Textarea /> from Rebass.
	// We also handle a bunch of stuff here, such as hooking up the label and the input using htmlFor and id on the label and input respectively.
	return (
		<div>
			<Label mt={2} htmlFor={input.name}>
				{label}
			</Label>
			{type === 'input' && (
				<Input
					{...input}
					id={input.name}
					// Form placeholders are a custom prop we pass in.
					placeholder={placeholder}
					mt={2}
					mb={4}
					p={3}
				/>
			)}
			{type === 'textarea' && (
				<Textarea
					{...input}
					id={input.name}
					// Form placeholders are a custom prop we pass in.
					placeholder={placeholder}
					mt={2}
					mb={3}
					p={3}
					rows={4}
				/>
			)}
		</div>
	)
}

const EditPostContainer = reduxForm({
	form: 'editPost',
})(EditPost)

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ addPostRequest, getPostRequest }, dispatch)
}

const mapStateToProps = ({ currentPost }) => {
	return {
		currentPost,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostContainer)
