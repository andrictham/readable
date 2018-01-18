import { getPosts } from '../api'

export const ADD_POST = 'ADD_POST'
export const GET_POSTS = 'GET_POSTS'

export const getPostsRequest = () => dispatch => {
	return getPosts().then(posts => {
		dispatch(getPostsSuccess(posts))
	})
}

export const getPostsSuccess = posts => ({
	type: GET_POSTS,
	posts,
})
