import {
	getCategories,
	getPosts,
	getPost,
	addPost,
	editPost,
	votePost,
	deletePost,
	getPostComments,
	addComment,
	getComment,
	editComment,
	deleteComment,
} from '../utils/api'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const VOTE_POST = 'VOTE_POST'
export const DELETE_POST = 'DELETE_POST'
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const GET_COMMENT = 'GET_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

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
	type: GET_POST_COMMENTS,
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
	type: ADD_COMMENT,
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
	type: GET_COMMENT,
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
	type: EDIT_COMMENT,
	editedComment,
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
	type: DELETE_COMMENT,
	deletedComment,
})
