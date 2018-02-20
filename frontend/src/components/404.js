import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Box, Heading } from 'rebass'
import styled from 'styled-components'
import { BG_TOP } from '../utils/colors'
import { SubmitButton as Button } from './Buttons'

const FourOhFour = () => (
	<Flex direction="column" align="center">
		<Box p={3} mb={[1, 3]} bg={BG_TOP} w={1}>
			<Emoji mt={3} mb={1}>
				<span role="img" alt="Sad face" aria-label="Sad face">
					😟
				</span>
			</Emoji>
			<Heading my={3}>This is not our fate</Heading>
			<Paragraph>
				Ah! It looks like what you’re looking for is no longer here.
			</Paragraph>
			<Paragraph>
				Maybe it’s moved to a new address? We can’t really be sure...
			</Paragraph>
			<Link to="/">
				<Button mt={2} mb={4}>
					Take me back home...
				</Button>
			</Link>
		</Box>
	</Flex>
)

const Emoji = Heading.extend`
	font-size: 3rem;
`

const Paragraph = styled.p`
	line-height: 1.5;
`

export default FourOhFour
