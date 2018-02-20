import {
	GET_POST_COMMENTS,
	ADD_COMMENT,
	GET_COMMENT,
	EDIT_COMMENT,
	VOTE_COMMENT,
	DELETE_COMMENT,
} from '../actions/types'

import omit from 'lodash/omit'

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

export const currentComment = (state = initialCommentState, action) => {
	switch (action.type) {
		case GET_COMMENT:
			return action.comment
		default:
			return state
	}
}

export default comments
