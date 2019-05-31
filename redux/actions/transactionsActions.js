import { GET_TRANSACTIONS_REQUEST, GET_TRANSACTIONS_SUCCESS, GET_TRANSACTIONS_FAILURE } from './actionTypes';
import { readTransactions } from '../../sqlite';

export const getTransactions = () => async dispatch => {
	dispatch({ type: GET_TRANSACTIONS_REQUEST });
	try {
		const transactions = await readTransactions();
		const mappedTransactions = transactions.map(transaction => ({
			_id: transaction.id,
			amount: transaction.amount,
			date: transaction.date,
			note: transaction.note,
			category: {
				_id: transaction.category_id,
				type: transaction.type,
				color: transaction.color,
				iconFamily: transaction.icon_family,
				iconName: transaction.icon_name
			}
		}));
		dispatch({ type: GET_TRANSACTIONS_SUCCESS, payload: mappedTransactions });
	} catch(err) {
		dispatch({ type: GET_TRANSACTIONS_FAILURE, payload: err });
	}
}

// export const setTransactions = transactions => {
// 	return {
// 		type: SET_TRANSACTIONS,
// 		payload: transactions
// 	};
// };

// export const addTransaction = transaction => {
// 	return {
// 		type: ADD_TRANSACTION,
// 		payload: transaction
// 	};
// };