import React from 'react'
import { Button, ButtonOutline } from 'rebass'
import styled from 'styled-components'
import { TRANSITION_SNAPPY, TRANSITION_SMOOTH } from '../utils/transitions'
import { MAIN, DANGER } from '../utils/colors'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/lib/md'

const StyledArrowButton = styled(Link)`
	color: inherit;
	& svg {
		transition: ${TRANSITION_SMOOTH};
		:hover {
			transform: translateX(-3px);
		}
		:active {
			transform: translateX(-12px);
		}
	}
`

export const BackButton = ({ to }) => (
	<StyledArrowButton to={to}>
		<MdArrowBack size={32} />
	</StyledArrowButton>
)

export const SubmitButton = styled(Button)`
	background-color: ${MAIN};
	font-weight: 600;
	cursor: pointer;
	padding: 0.8rem 1.4rem;
	transition: ${TRANSITION_SNAPPY};
`

export const DeleteButton = styled(ButtonOutline)`
	color: ${DANGER};
	border-color: ${DANGER}
	box-shadow: inset 0 0 0 2px ${DANGER};
	font-weight: 600;
	cursor: pointer;
	padding: 0.8rem 1.4rem;
	transition: ${TRANSITION_SNAPPY};
	&:hover, &:active {
		background-color: ${DANGER};
		box-shadow: inset 0 0 0 8px ${DANGER};
	}
`
