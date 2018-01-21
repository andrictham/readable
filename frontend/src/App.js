import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import AllPosts from './components/AllPosts'

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Route exact path="/" render={() => <AllPosts />} />
			</div>
		)
	}
}

export default App
