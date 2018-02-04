import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPostsRequest, getCategoriesRequest } from '../actions'
import Post from './Post'

class AllPosts extends Component {
	componentDidMount() {
		this.props.getPostsRequest()
		this.props.getCategoriesRequest()
	}
	render() {
		const { posts, categories, match } = this.props

		// Filter posts by categoy, by looking at the route params
		// If nothing is passed in, assume we’re looking at all posts
		const filteredPosts = match.params.category
			? posts.filter(post => match.params.category === post.category)
			: posts

		return (
			<div className="App">
				<ul>
					<li key="All Posts">
						<Link to="/">All Posts</Link>
					</li>
					{categories.map(category => (
						<li key={category.name}>
							<Link to={`/${category.path}`}>{category.name}</Link>
						</li>
					))}
				</ul>
				<hr />
				<br />
				<h2>{match.params.category || 'All Posts'}</h2>
				{filteredPosts.map(post => (
					<Post
						key={post.id}
						id={post.id}
						title={post.title}
						body={post.body}
						author={post.author}
						category={post.category}
						timestamp={post.timestamp}
						voteScore={post.voteScore}
					/>
				))}
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ getPostsRequest, getCategoriesRequest }, dispatch)
}

// const mapStateToProps = ({ posts }) => {
// 	const postsArray = Object.keys(posts).map(key => {
// 		return posts[key]
// 	})
// 	return { posts: postsArray }
// }

const mapStateToProps = ({ posts, categories }) => {
	const postsArray = Object.keys(posts).map(key => {
		return posts[key]
	})
	const categoriesArray = Object.keys(categories).map(key => {
		return categories[key]
	})
	return { posts: postsArray, categories: categoriesArray }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts)
