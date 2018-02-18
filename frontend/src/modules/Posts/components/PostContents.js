import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Truncate from 'react-truncate'
import { Flex, Box, Badge, Subhead, Text } from 'rebass'
import styled from 'styled-components'
import Pluralize from 'react-pluralize'
import { MAIN, BG_TOP, BG_BOTTOM } from '../../../utils/colors'
import { TRANSITION_SNAPPY } from '../../../utils/transitions'
import { RESPONSIVE_SECTION } from '../../../utils/sizing'
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
	currentPost,
	onVote,
	truncate,
}) => {
	return (
		<Box m="auto" width={currentPost && RESPONSIVE_SECTION}>
			<Flex align="center" pb={1}>
				<Box w={1 / 2}>
					<p>
						<strong>{author}</strong> &nbsp;
						<span>{moment(timestamp).fromNow()}</span>
					</p>
				</Box>
				<Box w={1 / 2}>
					<Text right mb={1} mt={-1}>
						{currentPost && (
							<EditPostButton to={`/edit/${currentPost.id}`}>
								Edit
							</EditPostButton>
						)}
					</Text>
				</Box>
			</Flex>
			<Subhead>
				{title}
				<Badge bg={MAIN} ml={2} px={2}>
					{category}
				</Badge>
			</Subhead>

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
				<Box w={1 / 2}>
					<Text right>
						<Pluralize
							singular="comment"
							plural="comments"
							count={commentCount}
						/>
					</Text>
				</Box>
			</Flex>
		</Box>
	)
}

const PostContentsBody = styled.p`
	line-height: 150%;
`

const EditPostButton = styled(Link)`
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
