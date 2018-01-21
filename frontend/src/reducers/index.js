import { combineReducers } from 'redux'
import { GET_POSTS, ADD_POST, GET_CATEGORIES } from '../actions'

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
	categories,
	comments,
})
