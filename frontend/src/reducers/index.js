import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'

import categories from './categories'
import posts, { currentPost } from './posts'
import comments, { currentComment } from './comments'
import loading from './loading'

export default combineReducers({
	categories,
	posts,
	currentPost,
	comments,
	currentComment,
	loading,
	form: formReducer,
})
