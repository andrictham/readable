import React, { Component } from 'react'
import uniqid from 'uniqid'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCommentRequest } from '../../../actions'
import { Card, Lead } from 'rebass'
import EditCommentForm from './EditCommentForm'
import { RESPONSIVE_SECTION } from '../../../utils/sizing'

class AddComment extends Component {
	addComment = formValues => {
		console.log('Submitting form: ', formValues)
		this.props
			.addCommentRequest({
				id: uniqid.process(),
				timestamp: Date.now(),
				body: formValues.postBody,
				author: formValues.authorName,
				parentId: this.props.parentId,
			})
			.then(this.props.reset())
			.then(this.props.notify(`🎉  Comment added`))
	}

	render() {
		return (
			<AddCommentCard py={2} px={3} my={[1, 2]} width={RESPONSIVE_SECTION}>
				<Lead mt={3} mb={4}>
					Add a Comment
				</Lead>
				<EditCommentForm
					onSubmit={this.addComment}
					isLoading={false}
					isEditing={false}
					{...this.props}
				/>
			</AddCommentCard>
		)
	}
}

const AddCommentCard = Card.extend`
	box-shadow: none;
`

const AddCommentBox = reduxForm({
	form: 'addComment',
})(AddComment)

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ addCommentRequest }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddCommentBox)
