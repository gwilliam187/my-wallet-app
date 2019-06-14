import { SELECT_WALLET } from '../actions/actionTypes';

export default(state = {}, action) => {
	switch(action.type) {
		case SELECT_WALLET:
			return action.payload;
		default:
			return state;
	}
};