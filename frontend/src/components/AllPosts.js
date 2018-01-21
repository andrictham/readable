import React, { Component } from 'react'
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
		const { posts, categories } = this.props
		return (
			<div className="App">
				<h2>Categories</h2>
				<ul>{categories.map(category => <li>{category.name}</li>)}</ul>
				<hr />
				<br />
				<h2>Posts</h2>
				{posts.map(post => (
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
