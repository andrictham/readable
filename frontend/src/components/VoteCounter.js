import React from 'react'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'
import { FADED } from '../utils/colors'
import { FaArrowUp, FaArrowDown } from 'react-icons/lib/fa'

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

export default VoteCounter
