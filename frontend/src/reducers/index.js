import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { GET_POSTS, GET_POST, ADD_POST, GET_CATEGORIES } from '../actions'

const posts = (state = {}, action) => {
	switch (action.type) {
		case GET_POSTS:
			const { posts } = action
			let postsObj = {}
			posts.map(post => {
				return (postsObj[post.id] = post)
			})
			return postsObj
		case ADD_POST:
			const { post } = action
			return {
				...state,
				[post.id]: post,
			}
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

const post = (state = initialPostState, action) => {
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
	currentPost: post,
	categories,
	comments,
	form: formReducer,
})
