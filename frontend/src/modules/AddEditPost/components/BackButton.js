import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/lib/md'
import styled from 'styled-components'
import { TRANSITION_SMOOTH } from '../../../utils/transitions'

const BackButton = ({ to }) => (
	<StyledButton to={to}>
		<MdArrowBack size={32} />
	</StyledButton>
)

const StyledButton = styled(Link)`
	color: inherit;
	& svg {
		transition: ${TRANSITION_SMOOTH};
		:hover {
			transform: translateX(-3px);
		}
	}
`
export default BackButton
