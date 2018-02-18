import React from 'react'
import { Flex, Box } from 'rebass'
import styled, { css } from 'styled-components'
import { FADED, MAIN } from '../utils/colors'
import { TRANSITION_SNAPPY } from '../utils/transitions'
import { FaArrowUp, FaArrowDown } from 'react-icons/lib/fa'

const VoteCounter = ({ id, voteScore, handleVote }) => {
	return (
		<Flex align="center" my={2}>
			<Box pr={3}>
				<VoteButton direction="up" onVote={handleVote} id={id} />
			</Box>
			<Box pr={3}>
				<VoteScoreNumber>{voteScore}</VoteScoreNumber>
			</Box>
			<Box pr={3}>
				<VoteButton direction="down" onVote={handleVote} id={id} />
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

const VoteButton = ({ id, direction, onVote }) => {
	return (
		<ArrowButton
			direction={direction}
			onClick={e => {
				e.preventDefault()
				onVote(id, direction)
			}}
		>
			{direction === 'up' && <FaArrowUp />}
			{direction === 'down' && <FaArrowDown />}
		</ArrowButton>
	)
}

const ArrowButton = styled.button`
	border: none;
	background-color: transparent;
	font-size: inherit;
	cursor: pointer;
	padding: 10px 0;
	&:focus {
		outline: 0;
	}
	& svg {
		color: ${FADED};
		transition: ${TRANSITION_SNAPPY};
		&:hover {
			color: ${MAIN};
			${props =>
				props.direction === 'up' &&
				css`
					transform: translateY(-1px);
				`};
			${props =>
				props.direction === 'down' &&
				css`
					transform: translateY(1px);
				`};
		}
		&:active {
			${props =>
				props.direction === 'up' &&
				css`
					transform: translateY(-5px);
				`};
			${props =>
				props.direction === 'down' &&
				css`
					transform: translateY(5px);
				`};
		}
	}
`

export default VoteCounter
