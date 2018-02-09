import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import AllPosts from './components/AllPosts'
import EditPost from './components/EditPost'
import styled, { injectGlobal } from 'styled-components'
import { BG_BOTTOM } from './utils/colors'

const App = props => (
	<Main>
		<NavBar />
		<Switch>
			<Route exact path="/edit-post/:id?" component={EditPost} />
			<Route exact path="/:category?" component={AllPosts} />
		</Switch>
	</Main>
)

const Main = styled.div`
	padding-bottom: 2rem;
`

injectGlobal`
  * {
		box-sizing: border-box;
	}
  body {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
		background: ${BG_BOTTOM}
	}
`

export default App
