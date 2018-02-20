import { LOADING, LOADED } from '../actions/types'

const loading = (state = { loading: false }, action) => {
	switch (action.type) {
		case LOADING:
			return {
				loading: true,
			}
		case LOADED:
			return {
				loading: false,
			}
		default:
			return state
	}
}

export default loading
