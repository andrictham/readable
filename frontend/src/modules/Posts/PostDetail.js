import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPostRequest } from '../../actions'
import { Flex, Box } from 'rebass'
import { BG_TOP } from '../../utils/colors'
import PostContents from './components/PostContents'

class PostDetail extends Component {
	render() {
		return (
			<Flex>
				<Box w={1} p={3} bg={BG_TOP}>
					<PostContents />
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
