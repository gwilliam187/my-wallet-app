import { SET_TRANSACTIONS_CURR_MONTH } from './actionTypes';

export const setTransactionsCurrMonth = month => {
	return {
		type: SET_TRANSACTIONS_CURR_MONTH,
		payload: month,
	};
};