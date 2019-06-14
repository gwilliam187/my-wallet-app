import { GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE } from './actionTypes';
import { readCategories } from '../../sqlite';

export const getCategories = () => async dispatch => {
	dispatch({ type: GET_CATEGORIES_REQUEST });
	try {
		const categories = await readCategories();
		const mappedCategories = categories.map(category => ({
			_id: category.id,
			type: category.type,
			color: category.color,
			iconFamily: category.icon_family,
			iconName: category.icon_name
		}));
		dispatch({ type: GET_CATEGORIES_SUCCESS, payload: mappedCategories });
	} catch(err) {
		dispatch({ type: GET_CATEGORIES_FAILURE, payload: err });
	}
};

// export const setCategories = (categories) => {
// 	console.log('setCategories');
// 	return {
// 		type: SET_CATEGORIES,
// 		payload: categories
// 	};
// };