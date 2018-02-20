import {
	GET_POSTS,
	GET_POST,
	ADD_POST,
	EDIT_POST,
	VOTE_POST,
	DELETE_POST,
	ADD_COMMENT,
} from '../actions/types'

import omit from 'lodash/omit'

const posts = (state = {}, action) => {
	switch (action.type) {
		case GET_POSTS:
			// Destructure payload from action
			const { posts } = action
			// Reformat array to object
			let postsObj = {}
			posts.map(post => {
				return (postsObj[post.id] = post)
			})
			return postsObj
		case ADD_POST:
			// Destructure payload from action
			const { post } = action
			return {
				// Return all existing posts
				...state,
				// Insert a new post
				[post.id]: post,
			}
		case EDIT_POST:
			const { editedPost } = action
			return {
				// First, clone all existing posts
				...state,
				// For the post that matches our editedPost,
				[editedPost.id]: {
					// Clone all existing properties of that post
					...state[editedPost.id],
					// Then, modify the title and body of that post
					title: editedPost.title,
					body: editedPost.body,
				},
			}
		case VOTE_POST:
			const { votedPost } = action
			return {
				// First, clone all existing posts
				...state,
				// For the post that matches our votedPost,
				[votedPost.id]: {
					// Clone all existing properties of that post
					...state[votedPost.id],
					// Then, modify the voteScore of that post
					voteScore: votedPost.voteScore,
				},
			}
		case DELETE_POST:
			const { deletedPost } = action
			// Use Lodash’s `omit` method to return a new state object, sans our deletedPost.
			return omit(state, deletedPost.id)
		default:
			return state
	}
}

const initialPostState = {
	id: '',
	timestamp: '',
	title: '',
	body: '',
	author: '',
	category: '',
	voteScore: 0,
	deleted: false,
	commentCount: 0,
}

export const currentPost = (state = initialPostState, action) => {
	switch (action.type) {
		case GET_POST:
			return action.post
		case VOTE_POST:
			const { votedPost } = action
			return {
				// First, clone all properties of the existing post
				...state,
				// Then, modify the voteScore of that post
				voteScore: votedPost.voteScore,
			}
		case ADD_COMMENT:
			return {
				...state,
				commentCount: state['commentCount'] + 1,
			}
		default:
			return state
	}
}

export default posts
