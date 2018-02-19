import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
	getCommentRequest,
	editCommentRequest,
	deleteCommentRequest,
} from '../../actions'
import { reduxForm } from 'redux-form'
import { Flex, Box, Heading } from 'rebass'
import { BG_TOP } from '../../utils/colors'
import EditCommentForm from './components/EditCommentForm'
import { BackButton } from '../../components/Buttons'

class EditComment extends Component {
	state = {
		isLoading: true,
	}

	componentDidMount() {
		const { getCommentRequest, match } = this.props
		getCommentRequest(match.params.commentID)
	}

	componentWillReceiveProps(nextProps) {
		// If component is rerendering because it’s receiving new props from Redux, we want to set loading to false
		if (nextProps.currentComment.id) {
			this.setState(() => ({
				isLoading: false,
			}))
		}
	}

	submitForm = formValues => {
		console.log('Submitting form: ', formValues)
		this.props
			.editCommentRequest({
				id: this.props.currentComment.id,
				body: formValues.commentBody,
			})
			.then(this.props.history.push(`/post/${this.props.match.params.id}`))
			.then(this.props.notify(`📝  Comment updated!`))
		// Redirect to post detail view after successful submission, then show success toast
	}

	deleteComment = () => {
		console.log('Deleted comment!')
		this.props
			.deleteCommentRequest(this.props.currentComment.id)
			.then(this.props.history.push(`/post/${this.props.match.params.id}`))
			.then(this.props.notify(`☠️  Comment deleted!`))
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
							<Box>Edit Comment</Box>
						</Flex>
					</Heading>
					<EditCommentForm
						isEditing={true}
						isLoading={this.state.isLoading}
						onSubmit={this.submitForm}
						onDelete={this.deleteComment}
						{...this.props}
					/>
				</Box>
			</Flex>
		)
	}
}

const EditCommentContainer = reduxForm({
	form: 'editComment',
	enableReinitialize: true,
})(EditComment)

const mapStateToProps = ({ currentComment }) => {
	return {
		// Prepopulate form with post data
		initialValues: {
			authorName: currentComment.author,
			commentBody: currentComment.body,
		},
		currentComment,
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			getCommentRequest,
			editCommentRequest,
			deleteCommentRequest,
		},
		dispatch,
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(
	EditCommentContainer,
)
