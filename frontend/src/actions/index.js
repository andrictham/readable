// import { getPosts } from '../api'
import axios from 'axios'

export const ADD_POST = 'ADD_POST'
export const GET_POSTS = 'GET_POSTS'

let api = axios.create({
	baseURL: 'http://localhost:3001',
	timeout: 1000,
	headers: { Authorization: 'Basic amFzb25oaWNrOg==' },
})

export const getPostsRequest = () => dispatch => {
	return api.get('/posts').then(res => {
		dispatch(getPostsSuccess(res.data))
	})
}

export const getPostsSuccess = posts => ({
	type: GET_POSTS,
	posts,
})
