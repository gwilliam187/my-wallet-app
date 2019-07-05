import { combineReducers } from 'redux';

import walletsReducer from './walletsReducer';
import currWalletReducer from './currWalletReducer';
import currTransactionReducer from './currTransactionReducer';
import categoriesReducer from './categoriesReducer';
import transactionsCurrMonthReducer from './transactionsCurrMonthReducer';
import budgetsReducer from './budgetsReducer';
import currBudgetReducer from './currBudgetReducer';
import categoriesCheckboxReducer from './categoriesCheckboxReducer';

export default combineReducers({
	wallets: walletsReducer,
	currWallet: currWalletReducer,
	transactionsCurrMonth: transactionsCurrMonthReducer,
	categories: categoriesReducer,
	currTransaction: currTransactionReducer,
	budgets: budgetsReducer,
	currBudget: currBudgetReducer,
	categoriesCheckbox: categoriesCheckboxReducer,
});