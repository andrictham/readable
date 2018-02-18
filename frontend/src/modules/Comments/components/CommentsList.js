import React from 'react'
import { Card } from 'rebass'
import CommentContents from './CommentContents'
import { TRANSITION_SMOOTH } from '../../../utils/transitions'
import { RESPONSIVE_SECTION } from '../../../utils/sizing'

const CommentsList = ({ comments }) =>
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
					onVote={this.onCommentVote}
				/>
			</CommentCardContainer>
		)
	})

const CommentCardContainer = Card.extend`
	box-shadow: none;
	transition: ${TRANSITION_SMOOTH};
`

export default CommentsList
