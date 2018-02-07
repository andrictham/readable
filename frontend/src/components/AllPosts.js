import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPostsRequest, getCategoriesRequest } from '../actions'
import Post from './Post'
import styled from 'styled-components'
import { Group, Button, Flex, Box } from 'rebass'
import { MAIN, BG_TOP, BG_BOTTOM } from '../utils/colors'

class AllPosts extends Component {
	state = {
		sortBy: 'latest',
	}

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

		const compare = (a, b) => {
			if (this.state.sortBy === 'latest') {
				return a.timestamp < b.timestamp
			} else if (this.state.sortBy === 'popular') {
				return a.voteScore < b.voteScore
			}
		}

		const sortedPosts = [].concat(filteredPosts.sort(compare))

		return (
			<PostView align="center" direction="column">
				<PostNavControls>
					<Box bg={BG_TOP} w={1} px={3}>
						<CategorySelector>
							<li key="all">
								<NavLink to="/" exact activeClassName="selected">
									all
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
						</CategorySelector>
					</Box>

					<Box bg={BG_TOP} w={1} px={3} pb={3}>
						<Group>
							<SortSwitch
								children="Latest"
								bg={this.state.sortBy === 'latest' ? MAIN : 'transparent'}
								color={this.state.sortBy === 'latest' ? BG_TOP : MAIN}
								onClick={() => this.setState({ sortBy: 'latest' })}
							/>
							<SortSwitch
								children="Popular"
								bg={this.state.sortBy === 'popular' ? MAIN : 'transparent'}
								color={this.state.sortBy === 'popular' ? BG_TOP : MAIN}
								onClick={() => this.setState({ sortBy: 'popular' })}
							/>
						</Group>
					</Box>
				</PostNavControls>

				<Box>
					<Posts>
						{sortedPosts.map(post => (
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
					</Posts>
				</Box>
			</PostView>
		)
	}
}

const PostView = styled(Flex)``

const PostNavControls = styled.div`
	text-align: center;
	width: 100%;
`

const CategorySelector = styled.ul`
	list-style: none;
	display: inline-block;
	& li {
		margin: 1rem;
		float: left;
	}
	& a {
		text-decoration: none;
		color: ${MAIN};
	}
	& .selected {
		background-color: ${MAIN};
		color: ${BG_TOP};
		padding: 0.5rem;
		border-radius: 3px;
	}
`

const SortSwitch = styled(Button)`
	border: 1px solid ${MAIN};
	cursor: pointer;
	&:focus {
		border-color: ${BG_BOTTOM};
	}
	transition: 125ms ease-in-out all;
`

const Posts = styled.div`
	margin: 1rem;
`

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
