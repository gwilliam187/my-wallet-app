import { combineReducers } from 'redux';

import categoriesReducer from './categoriesReducer';
import transactionsReducer from './transactionsReducer';
import currTransactionReducer from './currTransactionReducer';

export default combineReducers({
	categories: categoriesReducer,
	currTransaction: currTransactionReducer
});