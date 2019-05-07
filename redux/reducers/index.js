import { combineReducers } from 'redux';

import categoriesReducer from './categoriesReducer';
import transactionsReducer from './transactionsReducer';

export default combineReducers({
	categories: categoriesReducer
});