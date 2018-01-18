import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3001',
	timeout: 1000,
	headers: { Authorization: 'Basic amFzb25oaWNrOg==' },
})

export const getPosts = () => {
	return api.get('/posts').then(res => res.data)
}
