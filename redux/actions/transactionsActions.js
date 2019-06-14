import { ADD_TRANSACTION, DELETE_TRANSACTION, } from './actionTypes';

export const addTransaction = (transaction) =>  {
	return {
		type: ADD_TRANSACTION,
		payload: transaction,
	};
};

export const deleteTransaction = (transaction) => {
	return {
		type: DELETE_TRANSACTION,
		payload: transaction,
	};
};
