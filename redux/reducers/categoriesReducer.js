import { SET_CATEGORIES } from '../actions/actionTypes';
import { getCategories } from '../../constants/Categories';

export default(state = defaultState, action) => {
	switch(action.type) {
		case SET_CATEGORIES:
			return action.payload;
		default:
			return state;
	}	
}

const defaultState = getCategories();