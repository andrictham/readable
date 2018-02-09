import { getPosts, getPost, addPost, getCategories } from '../utils/api'

export const ADD_POST = 'ADD_POST'
export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'
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

// ===	===	===	===	===	===
//		 C O M M E N T S
// ===	===	===	===	===	===
