import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPostRequest, getCategoriesRequest } from '../../actions'
import { reduxForm } from 'redux-form'
import uniqid from 'uniqid'
import { Flex, Box, Heading } from 'rebass'
import { BG_TOP } from '../../utils/colors'
import EditPostForm from './components/EditPostForm'
import BackButton from './components/BackButton'

class AddPost extends Component {
	submitForm = formValues => {
		console.log('Submitting form: ', formValues)
		this.props
			.addPostRequest({
				id: uniqid.process(),
				timestamp: Date.now(),
				title: formValues.postTitle,
				body: formValues.postBody,
				author: formValues.authorName,
				category: formValues.postCategory && formValues.postCategory.value,
			})
			.then(this.props.history.push('/'))
			.then(this.props.notify(`🎉  Post added – “${formValues.postTitle}”`))
		// Redirect to list of all posts after successful submission, then show success toast
	}

	componentDidMount() {
		const { getCategoriesRequest } = this.props
		getCategoriesRequest()
	}

	render() {
		return (
			<Flex>
				<Box w={1} p={3} bg={BG_TOP}>
					<Heading my={3} pb={3}>
						<Flex align="center">
							<Box mb={1} mr={2}>
								<BackButton to="/" />
							</Box>
							<Box>Add a Post</Box>
						</Flex>
					</Heading>
					<EditPostForm
						onSubmit={this.submitForm}
						isLoading={false}
						isEditing={false}
						categories={this.props.categories}
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

const mapStateToProps = ({ categories }) => {
	const categoriesArray = Object.keys(categories).map(key => {
		return {
			value: categories[key].name,
			label: categories[key].name,
		}
	})
	return {
		categories: categoriesArray,
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ addPostRequest, getCategoriesRequest }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostContainer)
