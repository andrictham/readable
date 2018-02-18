import React from 'react'
import { Card } from 'rebass'
import CommentContents from './CommentContents'
import { RESPONSIVE_SECTION } from '../../../utils/sizing'

const CommentsList = ({ comments, onVote }) =>
	comments.map(comment => {
		return (
			<CommentCardContainer
				key={comment.id}
				py={2}
				px={3}
				my={[1, 2]}
				width={RESPONSIVE_SECTION}
			>
				<CommentContents
					id={comment.id}
					body={comment.body}
					author={comment.author}
					timestamp={comment.timestamp}
					voteScore={comment.voteScore}
					onVote={onVote}
				/>
			</CommentCardContainer>
		)
	})

const CommentCardContainer = Card.extend`
	box-shadow: none;
`

export default CommentsList
