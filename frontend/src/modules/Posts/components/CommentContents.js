import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Truncate from 'react-truncate'
import { Flex, Box, Text } from 'rebass'
import styled from 'styled-components'
import { MAIN, BG_TOP, BG_BOTTOM } from '../../../utils/colors'
import { TRANSITION_SNAPPY } from '../../../utils/transitions'
import VoteCounter from '../../../components/VoteCounter'

const PostContents = ({
	id,
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
						<EditCommentButton to={`/edit-comment/${id}`}>
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
`

const EditCommentButton = styled(Link)`
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 0.75rem;
	font-weight: 600;
	border-radius: 2rem;
	padding: 0.3rem 1rem 0.35rem;
	border: 0;
	text-decoration: none;
	color: ${BG_TOP};
	background-color: ${MAIN};
	transition: ${TRANSITION_SNAPPY};
	&:hover {
		opacity: 0.8;
		box-shadow: 1px 3px 1px ${BG_BOTTOM};
	}
`

export default PostContents
