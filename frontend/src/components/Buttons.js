import { Button, ButtonOutline } from 'rebass'
import styled from 'styled-components'
import { TRANSITION_SNAPPY } from '../utils/transitions'
import { MAIN, DANGER } from '../utils/colors'

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
