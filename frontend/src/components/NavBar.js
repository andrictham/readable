import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
	GRADIENT_1,
	GRADIENT_2,
	GRADIENT_3,
	BG_TOP,
	BG_BOTTOM,
	MAIN,
} from '../utils/colors'

const NavBar = props => (
	<Header>
		<AppTitle>
			<Link
				to="/"
				style={{
					color: BG_TOP,
				}}
			>
				Readable
			</Link>
		</AppTitle>
		<AddPostButton to="/add">Add Post</AddPostButton>
	</Header>
)

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-image: linear-gradient(
		227deg,
		${GRADIENT_1} 0%,
		${GRADIENT_2} 55%,
		${GRADIENT_3} 100%
	);
	padding: 1rem 1rem 1.1rem;
	color: white;
`

const AddPostButton = styled(Link)`
	font-size: 0.8rem;
	font-weight: 600;
	border-radius: 2rem;
	padding: 1rem 2rem;
	border: 0;
	text-decoration: none;
	color: ${MAIN};
	background-color: ${BG_BOTTOM};
`

const AppTitle = styled.h1`
	font-size: 1.5em;
	& a {
		text-decoration: none;
	}
`

export default NavBar
