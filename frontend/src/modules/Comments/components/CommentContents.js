import React from 'react'
import moment from 'moment'
import Truncate from 'react-truncate'
import { Flex, Box, Text } from 'rebass'
import styled from 'styled-components'
import VoteCounter from '../../../components/VoteCounter'
import { EditCommentButton } from '../../../components/Buttons'

const PostContents = ({
	id,
	parentID,
	title,
	body,
	author,
	category,
	timestamp,
	voteScore,
	commentCount,
	onVote,
	truncate,
}) => {
	return (
		<div>
			<Flex align="center" pb={1}>
				<Box w={1 / 2}>
					<p>
						<strong>{author}</strong> &nbsp;
						<span>{moment(timestamp).fromNow()}</span>
					</p>
				</Box>
				<Box w={1 / 2}>
					<Text right mb={1} mt={-1}>
						<EditCommentButton to={`/post/${parentID}/comment/${id}`}>
							Edit
						</EditCommentButton>
					</Text>
				</Box>
			</Flex>

			<PostContentsBody>
				{truncate ? (
					<Truncate lines={2} ellipsis="...">
						{body}
					</Truncate>
				) : (
					body
				)}
			</PostContentsBody>

			<Flex align="center">
				<Box w={1 / 2}>
					<VoteCounter voteScore={voteScore} handleVote={onVote} id={id} />
				</Box>
			</Flex>
		</div>
	)
}

const PostContentsBody = styled.p`
	line-height: 150%;
	white-space: pre-line;
`

export default PostContents
