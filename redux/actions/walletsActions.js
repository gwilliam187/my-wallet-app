import { ADD_TRANSACTION, EDIT_TRANSACTION, DELETE_TRANSACTION, } from './actionTypes';

export const addTransaction = (transaction, currWallet) => {
	return {
		type: ADD_TRANSACTION,
		payload: {
			wallet: currWallet,
			transaction: transaction,
		},
	};
};

export const editTransaction = (transaction, currWallet) => {
	return {
		type: EDIT_TRANSACTION,
		payload: {
			wallet: currWallet,
			transaction: transaction,
		},
	};
};

export const deleteTransaction = (transaction, currWallet) => {
	return {
		type: DELETE_TRANSACTION,
		payload: {
			wallet: currWallet,
			transaction: transaction,
		},
	};
};