import {
	getPosts,
	getPost,
	addPost,
	editPost,
	votePost,
	deletePost,
} from '../utils/api'

import * as types from './types'

// ===	===	===	===
//		P O S T S
// ===	===	===	===

// Get all posts

export const getPostsRequest = () => dispatch => {
	return getPosts()
		.then(posts => {
			dispatch(getPostsSuccess(posts))
		})
		.catch(error => {
			throw error
		})
}

const getPostsSuccess = posts => ({
	type: types.GET_POSTS,
	posts,
})

// Get a single post

export const getPostRequest = id => dispatch => {
	dispatch({
		type: types.LOADING,
	})
	return getPost(id)
		.then(post => {
			dispatch(getPostSuccess(post))
			dispatch({
				type: types.LOADED,
			})
		})
		.catch(error => {
			throw error
		})
}

const getPostSuccess = post => ({
	type: types.GET_POST,
	post,
})

// Add new post

export const addPostRequest = post => dispatch => {
	return addPost(post)
		.then(post => {
			dispatch(addPostSuccess(post))
		})
		.catch(error => {
			throw error
		})
}

const addPostSuccess = post => ({
	type: types.ADD_POST,
	post,
})

// Edit a post

export const editPostRequest = editedPost => dispatch => {
	return editPost(editedPost)
		.then(editedPost => {
			dispatch(editPostSuccess(editedPost))
		})
		.catch(error => {
			throw error
		})
}

const editPostSuccess = editedPost => ({
	type: types.EDIT_POST,
	editedPost,
})

// Vote on a post

export const votePostRequest = ({ id, vote }) => dispatch => {
	return votePost(id, vote)
		.then(votedPost => {
			dispatch(votePostSuccess(votedPost))
		})
		.catch(error => {
			throw error
		})
}

const votePostSuccess = votedPost => ({
	type: types.VOTE_POST,
	votedPost,
})

// Delete a post

export const deletePostRequest = deletedPostID => dispatch => {
	return deletePost(deletedPostID)
		.then(deletedPost => {
			dispatch(deletePostSuccess(deletedPost))
		})
		.catch(error => {
			throw error
		})
}

const deletePostSuccess = deletedPost => ({
	type: types.DELETE_POST,
	deletedPost,
})
