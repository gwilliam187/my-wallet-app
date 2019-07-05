import { 
	ADD_CATEGORIES_CHECKBOX_CATEGORY, 
	DELETE_CATEGORIES_CHECKBOX_CATEGORY,
	SET_CATEGORIES_CHECKBOX_CATEGORIES,
	RESET_CATEGORIES_CHECKBOX_CATEGORIES,
} from '../actions/actionTypes';

export default(state = [], action) => {
	switch(action.type) {
		case ADD_CATEGORIES_CHECKBOX_CATEGORY:
			const stateWithoutCurrPayload = state.filter(category => category !== action.payload);
			return [ action.payload, ...stateWithoutCurrPayload ];
		case DELETE_CATEGORIES_CHECKBOX_CATEGORY:
			return state.filter(category => category !== action.payload);
		case SET_CATEGORIES_CHECKBOX_CATEGORIES:
			return [ ...action.payload ];
		case RESET_CATEGORIES_CHECKBOX_CATEGORIES:
			return [];
		default:
			return state;
	}	
}