import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Box } from 'rebass'
import { BG_TOP, MAIN } from '../../../utils/colors'
import { TRANSITION_SNAPPY } from '../../../utils/transitions'

const PostCategoryFilter = ({ categories }) => (
	<Box bg={BG_TOP} w={1} px={3}>
		<CategorySelector>
			<li key="all">
				<NavLink to="/" exact activeClassName="selected">
					all
				</NavLink>
			</li>
			{categories.map(category => (
				<li key={category.name}>
					<NavLink to={`/${category.path}`} exact activeClassName="selected">
						{category.name}
					</NavLink>
				</li>
			))}
		</CategorySelector>
	</Box>
)

const CategorySelector = styled.ul`
	list-style: none;
	display: inline-block;
	& li {
		margin: 1rem;
		float: left;
	}
	& a {
		text-decoration: none;
		color: ${MAIN};
		padding: 0.5rem;
		border-radius: 3px;
		transition: ${TRANSITION_SNAPPY}
		&:hover {
			background-color: ${MAIN};
			color: ${BG_TOP};
		}
	}
	& .selected {
		background-color: ${MAIN};
		color: ${BG_TOP};
		padding: 0.5rem;
		border-radius: 3px;
	}
`

export default PostCategoryFilter
