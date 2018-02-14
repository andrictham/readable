import React from 'react'
import styled from 'styled-components'
import { Group, Button, Box } from 'rebass'
import { MAIN, BG_TOP, BG_BOTTOM } from '../../../utils/colors'
import { TRANSITION_SNAPPY } from '../../../utils/transitions'

const PostSortToggle = ({ sortedBy, onToggle }) => (
	<Box bg={BG_TOP} w={1} px={3} pb={3}>
		<Group>
			<SortSwitch
				children="Latest"
				bg={sortedBy === 'latest' ? MAIN : 'transparent'}
				color={sortedBy === 'latest' ? BG_TOP : MAIN}
				onClick={() => onToggle('latest')}
			/>
			<SortSwitch
				children="Popular"
				bg={sortedBy === 'popular' ? MAIN : 'transparent'}
				color={sortedBy === 'popular' ? BG_TOP : MAIN}
				onClick={() => onToggle('popular')}
			/>
		</Group>
	</Box>
)

const SortSwitch = styled(Button)`
	border: 1px solid ${MAIN};
	cursor: pointer;
	&:focus {
		box-shadow: none;
	}
	&:hover {
		box-shadow: inset 0px 0px 0px 2px ${MAIN};
	}
	transition: ${TRANSITION_SNAPPY};
`

export default PostSortToggle
