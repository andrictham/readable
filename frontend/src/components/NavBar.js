import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPostRequest } from '../actions'

class NavBar extends Component {
	render() {
		return (
			<header className="App-header">
				<h1 className="App-title">
					<Link
						to="/"
						style={{
							color: '#fff',
						}}
					>
						Readable
					</Link>
				</h1>
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
							category: 'cryptocurrency',
							voteScore: 0,
							deleted: false,
							commentCount: 0,
						})
					}}
				>
					Add Post
				</button>
			</header>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ addPostRequest }, dispatch)
}

const mapStateToProps = ({ posts }) => {
	const postsArray = Object.keys(posts).map(key => {
		return posts[key]
	})
	return { posts: postsArray }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
