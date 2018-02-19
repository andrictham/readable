import { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ScrollToTop extends Component {
	// Scroll restoration: https://reacttraining.com/react-router/web/guides/scroll-restoration
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0)
		}
	}

	render() {
		return this.props.children
	}
}

export default withRouter(ScrollToTop)
