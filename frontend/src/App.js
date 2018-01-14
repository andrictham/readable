import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPosts } from './actions'

class App extends Component {
	componentDidMount() {
		this.props.getPosts([
			{
				id: '8xf0y6ziyjabvozdd253nd',
				timestamp: 1467166872634,
				title: 'Udacity is the best place to learn React',
				body: 'Everyone says so after all.',
				author: 'thingtwo',
				category: 'react',
				voteScore: 6,
				deleted: false,
				commentCount: 2,
			},
			{
				id: '6ni6ok3ym7mf1p33lnez',
				timestamp: 1468479767190,
				title: 'Learn Redux in 10 minutes!',
				body:
					'Just kidding. It takes more than 10 minutes to learn technology.',
				author: 'thingone',
				category: 'redux',
				voteScore: -5,
				deleted: false,
				commentCount: 0,
			},
			{
				id: '9b335807-5549-4a5c-b1e2-5be13f168f3a',
				timestamp: 1515930397,
				title: 'Oscar defends house from midnight intruder',
				body:
					'The next door neighbours cat was knocked back by resident pussy, Oscar at 5am this morning during an early morning cat food raid.',
				author: 'Jason Hick',
				category: 'Redux',
				voteScore: 1,
				deleted: false,
				commentCount: 0,
			},
			{
				id: 'b5cebce8-c70e-4b24-b93a-b9285961b610',
				timestamp: 1515930398,
				title: 'Oscar defends house from midnight intruder',
				body:
					'The next door neighbours cat was knocked back by resident pussy, Oscar at 5am this morning during an early morning cat food raid.',
				author: 'Jason Hick',
				category: 'Redux',
				voteScore: 1,
				deleted: false,
				commentCount: 0,
			},
			{
				id: '5704f9a8-b15f-430e-947b-d0da0198a62c',
				timestamp: 1515930415,
				title: 'Oscar defends house from midnight intruder',
				body:
					'The next door neighbours cat was knocked back by resident pussy, Oscar at 5am this morning during an early morning cat food raid.',
				author: 'Jason',
				category: 'Redux',
				voteScore: 1,
				deleted: false,
				commentCount: 0,
			},
		])
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
	return bindActionCreators({ getPosts }, dispatch)
}

const mapStateToProps = ({ posts }) => {
	const postsArray = Object.keys(posts).map(key => {
		return posts[key]
	})
	return { posts: postsArray }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
