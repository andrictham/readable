import React from 'react'
import { Card } from 'rebass'
import CommentContents from './CommentContents'
import { RESPONSIVE_SECTION } from '../../../utils/sizing'

const CommentsList = ({ comments, onVote }) =>
	comments.map(comment => {
		return (
			<CommentCardContainer
				py={2}
				px={3}
				my={[1, 2]}
				width={RESPONSIVE_SECTION}
				key={comment.id}
			>
				<CommentContents
					id={comment.id}
					parentID={comment.parentId}
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
