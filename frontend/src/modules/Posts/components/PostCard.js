import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'rebass'
import styled from 'styled-components'
import { SHADOW } from '../../../utils/colors'
import { TRANSITION_SMOOTH } from '../../../utils/transitions'
import { RESPONSIVE_SECTION } from '../../../utils/sizing'
import PostContents from './PostContents'

const PostCard = props => (
	<PostCardContainer py={2} px={3} m={3} width={RESPONSIVE_SECTION}>
		<StyledLink to={`/${props.category}/${props.id}`}>
			<PostContents {...props} />
		</StyledLink>
	</PostCardContainer>
)

const PostCardContainer = Card.extend`
	box-shadow: none;
	min-width: 300px;
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
