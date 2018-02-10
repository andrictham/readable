import React from 'react'
import moment from 'moment'
import { Flex, Box, Badge, Subhead, Text } from 'rebass'
import styled from 'styled-components'
import Pluralize from 'react-pluralize'
import { MAIN } from '../../../utils/colors'
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

export default PostContents
