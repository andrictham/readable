import { getCategories } from '../utils/api'

import * as types from './types'

// ===	===	===	===	=== === === ===
//			C A T E G O R I E S
// ===	===	===	===	=== === === ===

// Get all categories

export const getCategoriesRequest = () => dispatch => {
	return getCategories()
		.then(res => {
			dispatch(getCategoriesSuccess(res.categories))
		})
		.catch(error => {
			throw error
		})
}

const getCategoriesSuccess = categories => ({
	type: types.GET_CATEGORIES,
	categories,
})
