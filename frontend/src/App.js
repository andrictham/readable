import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPostsRequest } from './actions'

class App extends Component {
	componentDidMount() {
		this.props.getPostsRequest()
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Readable</h1>
				</header>
				{this.props.posts.map(post => (
					<div key={post.id}>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
