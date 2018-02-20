import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
	getPostRequest,
	votePostRequest,
	getPostCommentsRequest,
	voteCommentRequest,
	deletePostRequest,
} from '../../actions'
import { Flex, Box } from 'rebass'
import { BG_TOP } from '../../utils/colors'
import PostContents from './components/PostContents'
import CommentsList from '../Comments/components/CommentsList'
import AddCommentBox from '../Comments/components/AddCommentBox'
import FourOhFour from '../../components/404'

class PostDetail extends Component {
	state = {
		isLoading: true,
		isDeleted: false,
	}

	componentDidMount() {
		const { getPostRequest, getPostCommentsRequest, match } = this.props
		getPostRequest(match.params.postID)
		getPostCommentsRequest(match.params.postID)
	}

	componentWillReceiveProps(nextProps) {
		// If component is rerendering because it’s receiving new props from Redux, we want to set loading to false
		if (!nextProps.loading.loading) {
			this.setState(() => ({
				isLoading: false,
			}))
			if (!nextProps.currentPost.id) {
				console.log('Post is deleted')
				this.setState(() => ({
					isLoading: false,
					isDeleted: true,
				}))
			}
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

	onDelete = id => {
		console.log('Deleted post!')
		this.props
			.deletePostRequest(id)
			.then(this.props.history.push('/'))
			.then(this.props.notify(`☠️  Post deleted!`))
	}

	sortByLatest = (a, b) => b.timestamp - a.timestamp

	// TODO: Loading state

	render() {
		const { currentPost, comments, notify } = this.props
		const { isDeleted } = this.state
		const sortedComments = [].concat(comments.sort(this.sortByLatest))
		return !isDeleted ? (
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
						onDelete={this.onDelete}
					/>
				</Box>
				<AddCommentBox parentId={currentPost.id} notify={notify} />
				<CommentsList comments={sortedComments} onVote={this.onCommentVote} />
			</Flex>
		) : (
			<FourOhFour />
		)
	}
}

const mapStateToProps = ({ currentPost, comments, loading }) => {
	const commentsArray = Object.keys(comments).map(key => {
		return comments[key]
	})
	return {
		currentPost,
		comments: commentsArray,
		loading,
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			getPostRequest,
			votePostRequest,
			getPostCommentsRequest,
			voteCommentRequest,
			deletePostRequest,
		},
		dispatch,
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
