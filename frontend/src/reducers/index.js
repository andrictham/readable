import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {
	GET_POSTS,
	GET_POST,
	ADD_POST,
	EDIT_POST,
	DELETE_POST,
	GET_CATEGORIES,
} from '../actions'
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
				...state,
				[editedPost.id]: {
					...state[editedPost.id],
					title: editedPost.title,
					body: editedPost.body,
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

const currentPost = (state = initialPostState, action) => {
	switch (action.type) {
		case GET_POST:
			return action.post
		default:
			return state
	}
}

const categories = (state = {}, action) => {
	switch (action.type) {
		case GET_CATEGORIES:
			const { categories } = action
			let categoriesObj = {}
			categories.map(category => {
				return (categoriesObj[category.name] = category)
			})
			return categoriesObj
		default:
			return state
	}
}

const comments = (state = {}, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default combineReducers({
	posts,
	currentPost,
	categories,
	comments,
	form: formReducer,
})
