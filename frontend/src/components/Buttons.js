import React from 'react'
import { Button, ButtonOutline } from 'rebass'
import styled from 'styled-components'
import { TRANSITION_SNAPPY, TRANSITION_SMOOTH } from '../utils/transitions'
import { MAIN, DANGER, BG_TOP, BG_BOTTOM, FADED } from '../utils/colors'
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

const SmallEditDeleteButton = styled.button`
	cursor: pointer;
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 0.7rem;
	font-weight: 400;
	padding: 0.3rem 0.75rem 0.35rem 0.75rem;
	margin-left: 1px;
	border: 0;
	text-decoration: none;
	background-color: ${FADED};
	opacity: 0.8;
	transition: ${TRANSITION_SNAPPY};
	&:hover {
		opacity: 1;
		box-shadow: 1px 3px 1px ${BG_BOTTOM};
	}
`

export const EditPostButton = SmallEditDeleteButton.extend`
	color: ${BG_TOP};
	border-top-left-radius: 2rem;
	border-bottom-left-radius: 2rem;
	padding-right: 0.6rem;
	&:hover {
		background-color: ${MAIN};
	}
`

export const DeletePostButton = SmallEditDeleteButton.extend`
	color: ${BG_TOP};
	border-top-right-radius: 2rem;
	border-bottom-right-radius: 2rem;
	padding-left: 0.7rem;
	&:hover {
		background-color: ${DANGER};
	}
`

export const EditCommentButton = SmallEditDeleteButton.withComponent(Link)
	.extend`
	border-radius: 2rem;
	color: ${BG_TOP};
	&:hover {
		background-color: ${MAIN};
	}
`

export const SubmitButton = styled(Button)`
	background-color: ${MAIN};
	font-weight: 600;
	cursor: pointer;
	padding: 0.8rem 1.4rem;
	transition: ${TRANSITION_SNAPPY};
	&:active {
		background-color: ${MAIN};
	}
	&:focus {
		box-shadow: 0 0 0 2px ${BG_BOTTOM};
	}
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
