import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPostRequest } from '../../actions'
import { reduxForm } from 'redux-form'
import { Flex, Box, Heading } from 'rebass'
import { BG_TOP } from '../../utils/colors'
import EditPostForm from './components/EditPostForm'

class EditPost extends Component {
	state = {
		isLoading: true,
	}

	componentDidMount() {
		const { getPostRequest, match } = this.props
		getPostRequest(match.params.id)
	}

	componentWillReceiveProps(nextProps) {
		// If component is rerendering because it’s receiving new props from Redux, we want to set loading to false
		if (nextProps.currentPost.id) {
			this.setState(() => ({
				isLoading: false,
			}))
		}
	}

	submitForm = formValues => {
		console.log('Submitting form: ', formValues)
	}

	render() {
		return (
			<Flex>
				<Box w={1} p={3} bg={BG_TOP}>
					<Heading my={3} pb={3}>
						Edit Post
					</Heading>
					<EditPostForm
						isEditing={true}
						isLoading={this.state.isLoading}
						onSubmit={this.submitForm}
						{...this.props}
					/>
				</Box>
			</Flex>
		)
	}
}

const EditPostContainer = reduxForm({
	form: 'editPost',
	enableReinitialize: true,
})(EditPost)

const mapStateToProps = ({ currentPost }) => {
	return {
		initialValues: {
			postTitle: currentPost.title,
			authorName: currentPost.author,
			postBody: currentPost.body,
		},
		currentPost,
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ getPostRequest }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostContainer)
