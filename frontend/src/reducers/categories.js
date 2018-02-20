import { GET_CATEGORIES } from '../actions/types'

const categories = (state = {}, action) => {
	switch (action.type) {
		case GET_CATEGORIES:
			const { categories } = action
			let categoriesObj = {}
			categories.map(category => {
				return (categoriesObj[category.name] = category)
			})
			return categoriesObj
		default:
			return state
	}
}

export default categories
