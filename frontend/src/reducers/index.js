import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'

import categories from './categories'
import posts, { currentPost } from './posts'
import comments, { currentComment } from './comments'

export default combineReducers({
	categories,
	posts,
	currentPost,
	comments,
	currentComment,
	form: formReducer,
})
