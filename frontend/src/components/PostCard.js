import React from 'react'
import moment from 'moment'
import { Flex, Box, Card, Badge, Subhead, Text } from 'rebass'
import styled from 'styled-components'
import Pluralize from 'react-pluralize'
import { MAIN } from '../utils/colors'
import VoteCounter from '../components/VoteCounter'

const PostCard = ({
	id,
	title,
	body,
	author,
	category,
	timestamp,
	voteScore,
	commentCount,
}) => (
	<PostCardContainer p={3} m={3} width={[1, 5 / 6, null, 3 / 4]}>
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
		<Flex align="center">
			<Box w={1 / 2}>
				<VoteCounter voteScore={voteScore} />
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
	</PostCardContainer>
)

const PostCardContainer = styled(Card)`
	box-shadow: none;
`

const PostBody = styled.p`
	line-height: 150%;
`

export default PostCard
