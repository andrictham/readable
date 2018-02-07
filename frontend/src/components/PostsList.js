import React from 'react'
import styled from 'styled-components'
import { Box } from 'rebass'
import Post from './Post'

const PostsList = ({ posts }) => (
	<Box>
		<Posts>
			{posts.map(post => (
				<Post
					key={post.id}
					id={post.id}
					title={post.title}
					body={post.body}
					author={post.author}
					category={post.category}
					timestamp={post.timestamp}
					voteScore={post.voteScore}
				/>
			))}
		</Posts>
	</Box>
)

const Posts = styled.div`
	margin: 1rem;
`

export default PostsList
