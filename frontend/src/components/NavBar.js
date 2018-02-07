import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPostRequest } from '../actions'
import styled from 'styled-components'
import { GRADIENT_1, GRADIENT_2, GRADIENT_3, BG_TOP } from '../utils/colors'

class NavBar extends Component {
	render() {
		return (
			<Header>
				<AppTitle>
					<Link
						to="/"
						style={{
							color: BG_TOP,
						}}
					>
						Readable
					</Link>
				</AppTitle>
				<AddPostButton
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
				</AddPostButton>
			</Header>
		)
	}
}

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-image: linear-gradient(
		227deg,
		${GRADIENT_1} 0%,
		${GRADIENT_2} 55%,
		${GRADIENT_3} 100%
	);
	padding: 1rem 1rem 1.1rem;
	color: white;
`

const AddPostButton = styled.button`
	font-size: 0.8rem;
	font-weight: 600;
	border-radius: 2rem;
	padding: 1rem 2rem;
	border: 0;
	box-shadow: none;
	cursor: pointer;
`

const AppTitle = styled.h1`
	font-size: 1.5em;
	& a {
		text-decoration: none;
	}
`

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
