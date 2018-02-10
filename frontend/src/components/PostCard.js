import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Flex, Box, Card, Badge, Subhead, Text } from 'rebass'
import styled from 'styled-components'
import Pluralize from 'react-pluralize'
import { MAIN, SHADOW } from '../utils/colors'
import { TRANSITION_SMOOTH } from '../utils/transitions'
import VoteCounter from '../components/VoteCounter'

const PostCard = props => (
	<PostCardContainer p={3} m={3} width={[1, 5 / 6, null, 3 / 4]}>
		<StyledLink to={`/post/${props.id}`}>
			<PostContents {...props} />
		</StyledLink>
	</PostCardContainer>
)

const PostCardContainer = styled(Card)`
	box-shadow: none;
	transition: ${TRANSITION_SMOOTH};
	&:hover {
		box-shadow: ${SHADOW};
	}
`

const StyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`

const PostContents = ({
	id,
	title,
	body,
	author,
	category,
	timestamp,
	voteScore,
	commentCount,
}) => {
	return (
		<div>
			<p>
				<strong>{author}</strong> &nbsp; {moment(timestamp).fromNow()}
			</p>
			<Subhead>
				{title}
				<Badge bg={MAIN} ml={2} px={2}>
					{category}
				</Badge>
			</Subhead>

			<PostContentsBody>{body}</PostContentsBody>

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
		</div>
	)
}

const PostContentsBody = styled.p`
	line-height: 150%;
`

export default PostCard
