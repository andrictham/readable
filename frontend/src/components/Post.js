import React from 'react'
import moment from 'moment'
import { Flex, Box, Card, Badge, Subhead } from 'rebass'
import styled from 'styled-components'
import { MAIN, FADED } from '../utils/colors'
import { FaArrowUp, FaArrowDown } from 'react-icons/lib/fa'

const Post = ({ id, title, body, author, category, timestamp, voteScore }) => (
	<PostCard p={3} m={3}>
		<p>
			<strong>{author}</strong> &nbsp; {moment(timestamp).fromNow()}
		</p>
		<Subhead>
			{title}
			<Badge bg={MAIN} ml={2} px={2}>
				{category}
			</Badge>
		</Subhead>

		<PostBody>{body}</PostBody>

		<VoteCounter voteScore={voteScore} />
	</PostCard>
)

const PostCard = styled(Card)`
	box-shadow: none;
`

const PostBody = styled.p`
	line-height: 150%;
`

const VoteCounter = ({ voteScore }) => {
	return (
		<Flex align="center" my={3}>
			<Box pr={3}>
				<UpVoteButton />
			</Box>
			<Box pr={3}>
				<VoteScoreNumber>{voteScore}</VoteScoreNumber>
			</Box>
			<Box pr={3}>
				<DownVoteButton />
			</Box>
		</Flex>
	)
}

const VoteScoreNumber = styled.div`
	text-align: center;
	padding-top: 2px;
	font-size: 1.2rem;
	font-weight: 700;
`

const UpVoteButton = styled(FaArrowUp)`
	color: ${FADED};
`

const DownVoteButton = styled(FaArrowDown)`
	color: ${FADED};
`

export default Post
