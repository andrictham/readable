export const ADD_POST = 'ADD_POST'
export const GET_POSTS = 'GET_POSTS'

export const getPosts = posts => ({
	type: GET_POSTS,
	posts,
})
