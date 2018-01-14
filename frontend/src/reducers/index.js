import { combineReducers } from 'redux'
import { ADD_POST } from '../actions'

const initialPostsState = {
	// TODO: Define shape of initial state here
}

const initialCategoriesState = {
	// TODO: Define shape of initial state here
}

const initialCommentsState = {
	// TODO: Define shape of initial state here
}

const posts = (state = initialPostsState, action) => {
	switch (action.type) {
		case ADD_POST:
			return state
		default:
			return state
	}
}

const categories = (state = initialCategoriesState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

const comments = (state = initialCommentsState, action) => {
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
