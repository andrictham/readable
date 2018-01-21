import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import AllPosts from './components/AllPosts'

class App extends Component {
	render() {
		return <Route exact path="/" render={() => <AllPosts />} />
	}
}

export default App
