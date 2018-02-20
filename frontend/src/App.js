import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import AllPosts from './modules/Posts/AllPosts'
import AddPost from './modules/AddEditPost/AddPost'
import EditPost from './modules/AddEditPost/EditPost'
import PostDetail from './modules/Posts/PostDetail'
import EditComment from './modules/Comments/EditComment'
import { ToastContainer, toast } from 'react-toastify'
import styled, { injectGlobal } from 'styled-components'
import { BG_BOTTOM, MAIN } from './utils/colors'

const App = props => {
	const notify = message =>
		toast.info(message, {
			position: toast.POSITION.BOTTOM_CENTER,
			className: 'toast',
		})
	return (
		<Main>
			<NavBar />
			<ToastContainer />
			<Switch>
				<Route
					exact
					path="/add"
					render={props => <AddPost notify={notify} {...props} />}
				/>
				<Route
					exact
					path="/edit/:id"
					render={props => <EditPost notify={notify} {...props} />}
				/>
				<Route
					exact
					path="/:category/:postID"
					render={props => <PostDetail notify={notify} {...props} />}
				/>
				<Route
					exact
					path="/post/:id/comment/:commentID"
					render={props => <EditComment notify={notify} {...props} />}
				/>
				<Route exact path="/:category?" component={AllPosts} />
			</Switch>
		</Main>
	)
}

const fontFamily =
	"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
// System font stack, courtesy of CSS-Tricks: https://css-tricks.com/snippets/css/system-font-stack/

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
		font-family: ${fontFamily};
		background: ${BG_BOTTOM};
	}
	button:disabled,
	button[disabled]{
  	cursor: not-allowed;
	}
	.toast {
		background: ${MAIN};
		padding: 1.2rem 1.2rem 1.3rem;
		border-radius: 4px;
		font-family: ${fontFamily};
		font-weight: 500;
		line-height: 1.5;
		font-size: 1rem;
	}
`

export default App
