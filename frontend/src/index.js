import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { Provider as RebassProvider } from 'rebass'
import ScrollToTop from './components/ScrollToTop'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// use the compose function from Redux DevTools Chrome Extension if it’s available, if not, use the one from redux.

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<ScrollToTop>
				<RebassProvider>
					<App />
				</RebassProvider>
			</ScrollToTop>
		</Router>
	</Provider>,
	document.getElementById('root'),
)
