import {
	getPostComments,
	addComment,
	getComment,
	editComment,
	voteComment,
	deleteComment,
} from '../utils/api'

import * as types from './types'

// ===	===	===	===	===	===
//		 C O M M E N T S
// ===	===	===	===	===	===

// Get all comments for a post

export const getPostCommentsRequest = postID => dispatch => {
	return getPostComments(postID)
		.then(comments => {
			dispatch(getPostCommentsSuccess(comments))
		})
		.catch(error => {
			throw error
		})
}

const getPostCommentsSuccess = comments => ({
	type: types.GET_POST_COMMENTS,
	comments,
})

// Add a new comment for a post

export const addCommentRequest = comment => dispatch => {
	return addComment(comment)
		.then(addedComment => {
			dispatch(addCommentSuccess(addedComment))
		})
		.catch(error => {
			throw error
		})
}

const addCommentSuccess = addedComment => ({
	type: types.ADD_COMMENT,
	addedComment,
})

// Get a single comment

export const getCommentRequest = id => dispatch => {
	return getComment(id)
		.then(comment => {
			dispatch(getCommentSuccess(comment))
		})
		.catch(error => {
			throw error
		})
}

const getCommentSuccess = comment => ({
	type: types.GET_COMMENT,
	comment,
})

// Edit a single comment

export const editCommentRequest = editedComment => dispatch => {
	return editComment(editedComment)
		.then(editedComment => {
			dispatch(editCommentSuccess(editedComment))
		})
		.catch(error => {
			throw error
		})
}

const editCommentSuccess = editedComment => ({
	type: types.EDIT_COMMENT,
	editedComment,
})

// Vote on a comment

export const voteCommentRequest = ({ id, vote }) => dispatch => {
	return voteComment(id, vote)
		.then(votedComment => {
			dispatch(voteCommentSuccess(votedComment))
		})
		.catch(error => {
			throw error
		})
}

const voteCommentSuccess = votedComment => ({
	type: types.VOTE_COMMENT,
	votedComment,
})

// Delete a single comment

export const deleteCommentRequest = deletedCommentID => dispatch => {
	return deleteComment(deletedCommentID)
		.then(deletedComment => {
			dispatch(deleteCommentSuccess(deletedComment))
		})
		.catch(error => {
			throw error
		})
}

const deleteCommentSuccess = deletedComment => ({
	type: types.DELETE_COMMENT,
	deletedComment,
})
