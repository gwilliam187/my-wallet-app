import { SET_TRANSACTIONS_CURR_MONTH } from '../actions/actionTypes';
import moment from 'moment';

export default(state = moment(), action) => {
	switch(action.type) {
		case SET_TRANSACTIONS_CURR_MONTH:
			return action.payload;
		default:
			return state;
	}
};