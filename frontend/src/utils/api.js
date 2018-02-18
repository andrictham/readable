import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3001',
	headers: { Authorization: 'Basic amFzb25oaWNrOg==' },
})

// ===	===	===	===	=== === === ===
//			C A T E G O R I E S
// ===	===	===	===	=== === === ===

// GET /categories
// Get all of the categories available for the app.
export const getCategories = () => {
	return api.get('/categories').then(res => res.data)
}

// GET /:category/posts
// Get all of the posts for a particular category.
export const getCategoryPosts = category => {
	return api.get(`/${category}/posts`).then(res => res.data)
}

// ===	===	===	===
//		P O S T S
// ===	===	===	===

// GET /posts
// Get all of the posts. Useful for the main page when no category is selected.
export const getPosts = () => {
	return api.get('/posts').then(res => res.data)
}

// POST /posts
// Add a new post.
export const addPost = ({ id, timestamp, title, body, author, category }) => {
	return api
		.post('/posts', {
			id,
			timestamp,
			title,
			body,
			author,
			category,
			voteScore: 0,
			deleted: false,
			commentCount: 0,
		})
		.then(res => res.data)
}

// GET /posts/:id
// Get the details of a single post.
export const getPost = id => {
	return api.get(`/posts/${id}`).then(res => res.data)
}

// POST /posts/:id
// Used for voting on a post.
export const votePost = (id, vote) => {
	return api
		.post(`/posts/${id}`, {
			id,
			option: vote, // upVote or downVote
		})
		.then(res => res.data)
}

// PUT /posts/:id
// Edit the details of an existing post.
export const editPost = ({ id, title, body }) => {
	return api
		.put(`/posts/${id}`, {
			id,
			title,
			body,
		})
		.then(res => res.data)
}

// DELETE /posts/:id
// Sets the deleted flag for a post to 'true'.
// Sets the parentDeleted flag for all child comments to 'true'.
export const deletePost = id => {
	return api.delete(`posts/${id}`).then(res => res.data)
}

// GET /posts/:id/comments
// Get all the comments for a single post.
export const getPostComments = id => {
	return api.get(`/posts/${id}/comments`).then(res => res.data)
}

// ===	===	===	===	===	===
//		 C O M M E N T S
// ===	===	===	===	===	===

// POST /comments
// Add a comment to a post.
export const addComment = ({ id, timestamp, body, author, parentId }) => {
	return api
		.post(`/comments`, {
			id,
			timestamp,
			body,
			author,
			parentId,
		})
		.then(res => res.data)
}

// GET /comments/:id
// Get the details for a single comment.
export const getComment = id => {
	return api.get(`/comments/${id}`).then(res => res.data)
}

// POST /comments/:id
// Used for voting on a comment.
export const voteComment = (id, vote) => {
	return api
		.post(`/comments/${id}`, {
			id,
			option: vote,
		})
		.then(res => res.data)
}

// PUT /comments/:id
// Edit the details of an existing comment.
export const editComment = (id, timestamp, body) => {
	return api
		.post(`/comments/${id}`, {
			timestamp,
			body,
		})
		.then(res => res.data)
}

// DELETE /comments/:id
// Sets a comment's deleted flag to true.
export const deleteComment = id => {
	return api.delete(`comments/${id}`).then(res => res.data)
}
