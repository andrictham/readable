import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
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
				<ul id="category-selector">
					<li key="All Posts">
						<NavLink to="/" exact activeClassName="selected">
							All Posts
						</NavLink>
					</li>
					{categories.map(category => (
						<li key={category.name}>
							<NavLink
								to={`/${category.path}`}
								exact
								activeClassName="selected"
							>
								{category.name}
							</NavLink>
						</li>
					))}
				</ul>
				<hr />
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
