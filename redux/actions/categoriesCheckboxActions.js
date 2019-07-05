import { 
	ADD_CATEGORIES_CHECKBOX_CATEGORY,
	DELETE_CATEGORIES_CHECKBOX_CATEGORY,
	RESET_CATEGORIES_CHECKBOX_CATEGORIES,
	SET_CATEGORIES_CHECKBOX_CATEGORIES,
} from './actionTypes';

export const addCategory = category => {
	return {
		type: ADD_CATEGORIES_CHECKBOX_CATEGORY,
		payload: category,
	};
};

export const deleteCategory = category => {
	return {
		type: DELETE_CATEGORIES_CHECKBOX_CATEGORY,
		payload: category,
	};
};

export const setCategories = categories => {
	return {
		type: SET_CATEGORIES_CHECKBOX_CATEGORIES,
		payload: categories,
	};
};

export const resetCategories = () => {
	return {
		type: RESET_CATEGORIES_CHECKBOX_CATEGORIES,
	};
};