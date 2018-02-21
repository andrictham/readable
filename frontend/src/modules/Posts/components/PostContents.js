import React from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import Truncate from 'react-truncate'
import { Tooltip } from 'react-tippy'
import Skeleton from 'react-loading-skeleton'
import { Flex, Box, Badge, Subhead, Text } from 'rebass'
import styled from 'styled-components'
import Pluralize from 'react-pluralize'
import { MAIN } from '../../../utils/colors'
import { RESPONSIVE_SECTION } from '../../../utils/sizing'
import { EditPostButton, DeletePostButton } from '../../../components/Buttons'
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
	onDelete,
	truncate,
	history,
	isLoading,
}) => {
	return (
		<Box m="auto" width={currentPost && RESPONSIVE_SECTION}>
			<Flex align="center" pb={2}>
				<Box w={1 / 2}>
					<p>
						<strong>{isLoading ? <Skeleton /> : author}</strong> &nbsp;
						<span>
							{!isLoading && timestamp && moment(timestamp).fromNow()}
						</span>
					</p>
				</Box>
				<Box w={1 / 2}>
					<Text is="div" right mb={1} mt={1}>
						<EditPostButton
							onClick={e => {
								e.preventDefault()
								history.push(`/edit/${id}`)
							}}
						>
							Edit
						</EditPostButton>
						<Tooltip
							title="⚠️ Are you sure? This cannot be undone."
							position="left"
							trigger="mouseenter"
							arrow
							arrowSize="medium"
							distance={50}
							duration={450}
							followCursor
							inertia
							animateFill
						>
							<DeletePostButton
								onClick={e => {
									e.preventDefault()
									onDelete(id)
								}}
							>
								Delete
							</DeletePostButton>
						</Tooltip>
					</Text>
				</Box>
			</Flex>
			<Subhead>
				{isLoading ? <Skeleton /> : title}
				{!isLoading && (
					<Badge bg={MAIN} ml={2} px={2}>
						{category}
					</Badge>
				)}
			</Subhead>

			<PostContentsBody>
				{truncate ? (
					<Truncate lines={2} ellipsis="...">
						{body}
					</Truncate>
				) : isLoading ? (
					<Skeleton count={2} />
				) : (
					body
				)}
			</PostContentsBody>

			<Flex align="center">
				<Box w={1 / 2}>
					<VoteCounter
						voteScore={isLoading ? 0 : voteScore}
						handleVote={onVote}
						id={id}
					/>
				</Box>
				<Box w={1 / 2}>
					<Text right>
						<Pluralize
							singular="comment"
							plural="comments"
							count={isLoading ? 0 : commentCount}
						/>
					</Text>
				</Box>
			</Flex>
		</Box>
	)
}

const PostContentsBody = styled.p`
	line-height: 150%;
	white-space: pre-line;
`

export default withRouter(PostContents)
