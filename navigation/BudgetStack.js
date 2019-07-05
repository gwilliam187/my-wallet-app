import { createStackNavigator } from 'react-navigation';

import BudgetsScreen from '../screens/budgets/BudgetsScreen';
import AddBudgetScreen from '../screens/budgets/AddBudgetScreen';
import SelectCategoriesScreen from '../screens/budgets/SelectCategoriesScreen';
import SelectRangeScreen from '../screens/budgets/SelectRangeScreen';

const RouteConfigs = {
	Budgets: {
		screen: BudgetsScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Budgets',
		}),
	},
  AddBudget: {
    screen: AddBudgetScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Budget',
    }),
  },
  SelectCategories: {
    screen: SelectCategoriesScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Select Categories',
    }),
  },
  SelectRange: {
    screen: SelectRangeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Select Range',
    }),
  },
};

const StackNavigatorConfig = {
	initialRouteName: 'Budgets',
};

const BudgetStack = createStackNavigator(RouteConfigs, StackNavigatorConfig);
BudgetStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if(navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === 'Budgets') {
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

export default BudgetStack