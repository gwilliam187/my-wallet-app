import { GET_TRANSACTIONS_REQUEST } from './actionTypes';
import { readCategories, readTransactions } from '../../sqlite';
import { setCategories } from './categoriesActions';
import { setTransactions } from './transactionsActions';

export const getAndSetCategories = () => async dispatch => {
	console.log('getAndSetCategories');
	const categories = await readCategories();
	dispatch(setCategories(categories));
}

export const getAndSetTransactions = () => async dispatch => {
	console.log('getAndSetTransactions');
	dispatch({ type: GET_TRANSACTIONS_REQUEST });
	const transactions = await readTransactions();
	dispatch(setTransactions(transactions));
}
