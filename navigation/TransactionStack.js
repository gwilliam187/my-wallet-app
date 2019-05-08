import { createStackNavigator } from 'react-navigation';

import TransactionsScreen from '../screens/TransactionsScreen';
import AddTransactionScreen from '../screens/AddTransactionScreen';
import SelectCategoryScreen from '../screens/SelectCategoryScreen';

const RouteConfigs = {
	Transactions: {
		screen: TransactionsScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Transactions',
		}),
	},
	AddTransaction: {
		screen: AddTransactionScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Add Transaction',
		}),
	},
	SelectCategory: {
		screen: SelectCategoryScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Select Category',
		}),
	},
};

const StackNavigatorConfig = {
	initialRouteName: 'Transactions',
};

export default TransactionStack = createStackNavigator(RouteConfigs, StackNavigatorConfig);