import { SET_TRANSACTIONS, ADD_TRANSACTION } from './actionTypes';

export const setTransactions = transactions => {
	return {
		type: SET_TRANSACTIONS,
		payload: transactions
	};
};

export const addTransaction = transaction => {
	return {
		type: ADD_TRANSACTION,
		payload: transaction
	};
};