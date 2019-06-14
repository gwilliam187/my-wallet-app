import { createStackNavigator } from 'react-navigation';

import TransactionsScreen from '../screens/TransactionsScreen';
import AddTransactionScreen from '../screens/AddTransactionScreen';
import SelectCategoryScreen from '../screens/SelectCategoryScreen';
import EditTransactionScreen from '../screens/EditTransactionScreen';
import WalletsScreen from '../screens/WalletsScreen';

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
	EditTransaction: {
		screen: EditTransactionScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Edit Transaction',
		}),
	},
	Wallets: {
		screen: WalletsScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Wallets',
		}),
	},
};

const StackNavigatorConfig = {
	initialRouteName: 'Transactions',
};

const TransactionStack = createStackNavigator(RouteConfigs, StackNavigatorConfig);
TransactionStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if(navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === 'Transactions') {
        tabBarVisible = true;
      } else {
        tabBarVisible = false;
      }
    });
  }

  return {
    tabBarVisible
  };
};

export default TransactionStack;