import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPostsRequest, addPostRequest } from './actions'

class App extends Component {
	componentDidMount() {
		this.props.getPostsRequest()
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Readable</h1>
					<button
						onClick={() => {
							this.props.addPostRequest({
								id: Math.random(), // TODO: UDID
								timestamp: Date.now(),
								title:
									'USD is Amazing!! Transferred 10 dollars ($10) for a pizza and it took 600 seconds.',
								body:
									'im sure this has been posted before, but i was too excited not to share with the community. I just transferred over 10 dollars ($10) for 1 pizza. 10 is what it costed, and it took like 600 seconds. transferred from hand wallet (cause space feel) to hand wallet. I trust hand wallet enough to use them.',
								author: 'Zelius',
								category: 'Cryptocurrency',
								voteScore: 0,
								deleted: false,
								commentCount: 0,
							})
						}}
					>
						Add Post
					</button>
				</header>
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
	return bindActionCreators({ getPostsRequest, addPostRequest }, dispatch)
}

const mapStateToProps = ({ posts }) => {
	const postsArray = Object.keys(posts).map(key => {
		return posts[key]
	})
	return { posts: postsArray }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
