import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'rebass'
import styled from 'styled-components'
import { SHADOW } from '../../../utils/colors'
import { TRANSITION_SMOOTH } from '../../../utils/transitions'
import PostContents from './PostContents'

const PostCard = props => (
	<PostCardContainer py={2} px={3} m={3} width={[1, 11 / 12, 5 / 6, 3 / 4]}>
		<StyledLink to={`/post/${props.id}`}>
			<PostContents {...props} />
		</StyledLink>
	</PostCardContainer>
)

const PostCardContainer = Card.extend`
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

export default PostCard
