import { getPosts, addPost } from '../api'

export const ADD_POST = 'ADD_POST'
export const GET_POSTS = 'GET_POSTS'

//														//
//		C A T E G O R I E S			//
//														//

//									//
//		P O S T S			//
//									//

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

//												//
//		C O M M E N T S			//
//												//
