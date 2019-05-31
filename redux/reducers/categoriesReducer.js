import { GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE, 
		SET_CATEGORIES } from '../actions/actionTypes';

export default(state = { data: [] }, action) => {
	switch(action.type) {
		case GET_CATEGORIES_REQUEST:
			console.log(GET_CATEGORIES_SUCCESS);
			return { ...state, isFetching: true }
		case GET_CATEGORIES_SUCCESS:
			console.log(GET_CATEGORIES_SUCCESS);
			return { ...state, isFetching: false, data: action.payload }
		case GET_CATEGORIES_FAILURE:
			console.log(GET_CATEGORIES_FAILURE);
			return { ...state, isFetching: false, errorMessage: action.payload }
		default:
			return state;
	}	
}