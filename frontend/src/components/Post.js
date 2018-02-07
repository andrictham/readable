import React from 'react'
import moment from 'moment'
import { Card, Badge, Subhead } from 'rebass'
import styled from 'styled-components'
import { MAIN } from '../utils/colors'

const Post = ({ id, title, body, author, category, timestamp, voteScore }) => (
	<PostCard p={3} m={3}>
		<p>
			<strong>{author}</strong> &nbsp; {moment(timestamp).fromNow()}
		</p>
		<Subhead>
			{title}
			<Badge bg={MAIN} ml={2}>
				{category}
			</Badge>
		</Subhead>

		<p>{body}</p>
		<p>Votes: {voteScore}</p>
	</PostCard>
)

const PostCard = styled(Card)``

export default Post
