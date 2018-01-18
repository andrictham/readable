import axios from 'axios'

let api = axios.create({
	baseURL: 'http://localhost:3001',
	timeout: 1000,
	headers: { Authorization: 'Basic amFzb25oaWNrOg==' },
})

export const getPosts = () => {
	api.get('/posts')
}
