import { LOADING, LOADED } from '../actions/types'

const loading = (state = { loading: false }, action) => {
	switch (action.type) {
		case LOADING:
			return {
				hasLoaded: false,
			}
		case LOADED:
			return {
				hasLoaded: true,
			}
		default:
			return state
	}
}

export default loading
