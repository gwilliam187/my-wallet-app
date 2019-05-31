import { GET_TRANSACTIONS_REQUEST, GET_TRANSACTIONS_SUCCESS, GET_TRANSACTIONS_FAILURE, 
		SET_TRANSACTIONS, ADD_TRANSACTION } from '../actions/actionTypes';

export default(state = { data: [] }, action) => {
	switch(action.type) {
		case GET_TRANSACTIONS_REQUEST:
			console.log(GET_TRANSACTIONS_REQUEST);
			return { ...state, isFetching: true };
		case GET_TRANSACTIONS_SUCCESS:
			console.log(GET_TRANSACTIONS_SUCCESS);
			// console.log(action.payload);
			return { ...state, isFetching: false, data: action.payload };
		case GET_TRANSACTIONS_FAILURE:
			console.log(GET_TRANSACTIONS_FAILURE);
			console.log(action.payload);
			return { ...state, isFetching: false, errorMessage: action.payload }
		default:
			return state;
	}
}