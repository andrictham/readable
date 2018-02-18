import React from 'react'
import styled from 'styled-components'
import { Box } from 'rebass'
import PostCard from './PostCard'

const PostsList = ({ posts, onVote }) => (
	<Box>
		<Posts>
			{posts.map(post => (
				<PostCard
					key={post.id}
					id={post.id}
					title={post.title}
					body={post.body}
					author={post.author}
					category={post.category}
					timestamp={post.timestamp}
					voteScore={post.voteScore}
					commentCount={post.commentCount}
					onVote={onVote}
					truncate
				/>
			))}
		</Posts>
	</Box>
)

const Posts = styled.div`
	margin: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export default PostsList
