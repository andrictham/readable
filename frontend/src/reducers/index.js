import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {
	GET_CATEGORIES,
	GET_POSTS,
	GET_POST,
	ADD_POST,
	EDIT_POST,
	VOTE_POST,
	DELETE_POST,
	GET_POST_COMMENTS,
	ADD_COMMENT,
	GET_COMMENT,
	EDIT_COMMENT,
	VOTE_COMMENT,
	DELETE_COMMENT,
} from '../actions'
import omit from 'lodash/omit'

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

const currentPost = (state = initialPostState, action) => {
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

const comments = (state = {}, action) => {
	switch (action.type) {
		case GET_POST_COMMENTS:
			const { comments } = action
			let commentsObj = {}
			comments.map(comment => {
				return (commentsObj[comment.id] = comment)
			})
			return commentsObj
		case ADD_COMMENT:
			const { addedComment } = action
			return {
				...state,
				[addedComment.id]: addedComment,
			}
		case EDIT_COMMENT:
			const { editedComment } = action
			return {
				// First, clone all existing comment
				...state,
				// For the comment that matches our editedComment,
				[editedComment.id]: {
					// Clone all existing properties of that comment
					...state[editedComment.id],
					// Then, modify the body of that comment
					body: editedComment.body,
				},
			}
		case VOTE_COMMENT:
			const { votedComment } = action
			return {
				// First, clone all existing posts
				...state,
				// For the post that matches our votedComment,
				[votedComment.id]: {
					// Clone all existing properties of that post
					...state[votedComment.id],
					// Then, modify the voteScore of that post
					voteScore: votedComment.voteScore,
				},
			}
		case DELETE_COMMENT:
			const { deletedComment } = action
			// Use Lodash’s `omit` method to return a new state object, sans our deletedComment.
			return omit(state, deletedComment.id)
		default:
			return state
	}
}

const initialCommentState = {
	id: '',
	parentId: '',
	timestamp: '',
	body: '',
	author: '',
	voteScore: 0,
	deleted: false,
	parentDeleted: false,
	commentCount: 0,
}

const currentComment = (state = initialCommentState, action) => {
	switch (action.type) {
		case GET_COMMENT:
			return action.comment
		default:
			return state
	}
}

export default combineReducers({
	categories,
	posts,
	currentPost,
	comments,
	currentComment,
	form: formReducer,
})
