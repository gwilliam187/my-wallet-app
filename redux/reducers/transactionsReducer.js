import { SET_TRANSACTIONS, ADD_TRANSACTION } from '../actions/actionTypes';

export default(state = [], action) => {
	switch(action.type) {
		case SET_TRANSACTIONS:
			return action.payload;
		case ADD_TRANSACTION:
			return [...state, action.payload];
		default:
			return state;
	}
}