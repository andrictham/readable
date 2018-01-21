import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPostsRequest } from '../actions'
import NavBar from './NavBar'
import Post from './Post'

class AllPosts extends Component {
	componentDidMount() {
		this.props.getPostsRequest()
	}
	render() {
		const { posts } = this.props
		return (
			<div className="App">
				<NavBar />
				{posts.map(post => (
					<Post
						id={post.id}
						title={post.title}
						body={post.body}
						author={post.author}
						timestamp={post.timestamp}
						voteScore={post.voteScore}
					/>
				))}
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ getPostsRequest }, dispatch)
}

const mapStateToProps = ({ posts }) => {
	const postsArray = Object.keys(posts).map(key => {
		return posts[key]
	})
	return { posts: postsArray }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts)
