import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPostsRequest } from '../actions'
import NavBar from './NavBar'

class AllPosts extends Component {
	componentDidMount() {
		this.props.getPostsRequest()
	}
	render() {
		return (
			<div className="App">
				<NavBar />
				{this.props.posts.map(post => (
					<div key={post.id}>
						<h3>{post.title}</h3>
						<p className="App-intro">{post.body}</p>
						<h4>{post.author}</h4>
						<br />
					</div>
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
