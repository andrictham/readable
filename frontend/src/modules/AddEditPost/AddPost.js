import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPostRequest } from '../../actions'
import { reduxForm } from 'redux-form'
import { Flex, Box, Heading } from 'rebass'
import { BG_TOP } from '../../utils/colors'
import EditPostForm from './components/EditPostForm'

class AddPost extends Component {
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
		return (
			<Flex>
				<Box w={1} p={3} bg={BG_TOP}>
					<Heading my={3} pb={3}>
						Add a post
					</Heading>
					<EditPostForm
						onSubmit={this.submitForm}
						isLoading={false}
						isEditing={false}
						{...this.props}
					/>
				</Box>
			</Flex>
		)
	}
}

const AddPostContainer = reduxForm({
	form: 'addPost',
})(AddPost)

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ addPostRequest }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddPostContainer)
