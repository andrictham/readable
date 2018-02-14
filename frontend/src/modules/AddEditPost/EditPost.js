import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
	getPostRequest,
	getCategoriesRequest,
	editPostRequest,
} from '../../actions'
import { reduxForm } from 'redux-form'
import { Flex, Box, Heading } from 'rebass'
import { BG_TOP } from '../../utils/colors'
import EditPostForm from './components/EditPostForm'
import BackButton from './components/BackButton'

class EditPost extends Component {
	state = {
		isLoading: true,
	}

	componentDidMount() {
		const { getPostRequest, getCategoriesRequest, match } = this.props
		getPostRequest(match.params.id)
		getCategoriesRequest()
	}

	componentWillReceiveProps(nextProps) {
		// If component is rerendering because it’s receiving new props from Redux, we want to set loading to false
		if (nextProps.currentPost.id && nextProps.categories.length > 1) {
			this.setState(() => ({
				isLoading: false,
			}))
			console.log(nextProps.categories)
		}
	}

	submitForm = formValues => {
		console.log('Submitting form: ', formValues)
		this.props.editPostRequest({
			id: this.props.currentPost.id,
			title: formValues.postTitle,
			body: formValues.postBody,
		})
	}

	render() {
		return (
			<Flex>
				<Box w={1} p={3} bg={BG_TOP}>
					<Heading my={3} pb={3}>
						<Flex align="center">
							<Box mb={1} mr={2}>
								<BackButton to={`/post/${this.props.match.params.id}`} />
							</Box>
							<Box>Edit Post</Box>
						</Flex>
					</Heading>
					<EditPostForm
						isEditing={true}
						isLoading={this.state.isLoading}
						onSubmit={this.submitForm}
						categories={this.props.categories}
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

const mapStateToProps = ({ currentPost, categories }) => {
	const categoriesArray = Object.keys(categories).map(key => {
		return {
			value: categories[key].name,
			label: categories[key].name,
		}
	})
	return {
		// Prepopulate form with post data
		initialValues: {
			postTitle: currentPost.title,
			authorName: currentPost.author,
			postBody: currentPost.body,
			postCategory: currentPost.category,
		},
		currentPost,
		categories: categoriesArray,
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{ getPostRequest, getCategoriesRequest, editPostRequest },
		dispatch,
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostContainer)
