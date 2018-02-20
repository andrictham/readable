import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
	getPostRequest,
	votePostRequest,
	getPostCommentsRequest,
	voteCommentRequest,
} from '../../actions'
import { Flex, Box } from 'rebass'
import { BG_TOP } from '../../utils/colors'
import PostContents from './components/PostContents'
import CommentsList from '../Comments/components/CommentsList'
import AddCommentBox from '../Comments/components/AddCommentBox'

class PostDetail extends Component {
	state = {
		isLoading: true,
	}

	componentDidMount() {
		const { getPostRequest, getPostCommentsRequest, match } = this.props
		getPostRequest(match.params.postID)
		getPostCommentsRequest(match.params.postID)
	}

	componentWillReceiveProps(nextProps) {
		// If component is rerendering because it’s receiving new props from Redux, we want to set loading to false
		if (nextProps.currentPost.id) {
			this.setState(() => ({
				isLoading: false,
			}))
		}
	}

	onPostVote = (id, direction) => {
		const { votePostRequest } = this.props
		console.log(`${direction}voted on ${id}`)
		votePostRequest({
			id,
			vote: `${direction}Vote`,
		})
	}

	onCommentVote = (id, direction) => {
		const { voteCommentRequest } = this.props
		console.log(`${direction}voted on ${id}`)
		voteCommentRequest({
			id,
			vote: `${direction}Vote`,
		})
	}

	sortByLatest = (a, b) => b.timestamp - a.timestamp

	// TODO: Loading state

	render() {
		const { currentPost, comments, notify } = this.props
		const sortedComments = [].concat(comments.sort(this.sortByLatest))
		return (
			<Flex direction="column" align="center">
				<Box p={3} mb={[1, 3]} bg={BG_TOP} w={1}>
					<PostContents
						id={currentPost.id}
						title={currentPost.title}
						body={currentPost.body}
						author={currentPost.author}
						category={currentPost.category}
						timestamp={currentPost.timestamp}
						voteScore={currentPost.voteScore}
						commentCount={currentPost.commentCount}
						currentPost={currentPost}
						onVote={this.onPostVote}
					/>
				</Box>
				<AddCommentBox parentId={currentPost.id} notify={notify} />
				<CommentsList comments={sortedComments} onVote={this.onCommentVote} />
			</Flex>
		)
	}
}

const mapStateToProps = ({ currentPost, comments }) => {
	const commentsArray = Object.keys(comments).map(key => {
		return comments[key]
	})
	return {
		currentPost,
		comments: commentsArray,
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			getPostRequest,
			votePostRequest,
			getPostCommentsRequest,
			voteCommentRequest,
		},
		dispatch,
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
