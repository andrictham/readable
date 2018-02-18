import {
	getPosts,
	getPost,
	addPost,
	editPost,
	votePost,
	deletePost,
	getCategories,
} from '../utils/api'

export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const VOTE_POST = 'VOTE_POST'
export const DELETE_POST = 'DELETE_POST'
export const GET_CATEGORIES = 'GET_CATEGORIES'

// ===	===	===	===	=== === === ===
//			C A T E G O R I E S
// ===	===	===	===	=== === === ===

// Get all categories

export const getCategoriesRequest = () => dispatch => {
	return getCategories()
		.then(res => {
			dispatch(getCategoriesSuccess(res.categories))
		})
		.catch(error => {
			throw error
		})
}

const getCategoriesSuccess = categories => ({
	type: GET_CATEGORIES,
	categories,
})

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
	type: GET_POSTS,
	posts,
})

// Get a single post

export const getPostRequest = id => dispatch => {
	return getPost(id)
		.then(post => {
			dispatch(getPostSuccess(post))
		})
		.catch(error => {
			throw error
		})
}

const getPostSuccess = post => ({
	type: GET_POST,
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
	type: ADD_POST,
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
	type: EDIT_POST,
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
	type: VOTE_POST,
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
	type: DELETE_POST,
	deletedPost,
})

// ===	===	===	===	===	===
//		 C O M M E N T S
// ===	===	===	===	===	===
