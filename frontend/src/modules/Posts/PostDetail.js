import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPostRequest } from '../../actions'
import { Flex, Box } from 'rebass'
import { BG_TOP } from '../../utils/colors'
import PostContents from './components/PostContents'

class PostDetail extends Component {
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

	// TODO: Loading state

	render() {
		const { currentPost } = this.props
		return (
			<Flex>
				<Box w={1} p={3} bg={BG_TOP}>
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
					/>
				</Box>
			</Flex>
		)
	}
}

const mapStateToProps = ({ currentPost }) => {
	return {
		currentPost,
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ getPostRequest }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
