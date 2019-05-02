import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'expo';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import TransactionsScreen from '../screens/TransactionsScreen';
import AddTransactionScreen from '../screens/AddTransactionScreen';
import Colors from '../constants/Colors';

const RouteConfigs = {
	Transactions: { 
		screen: TransactionsScreen, 
		navigationOptions: {
			tabBarLabel: 'Transactions',
			tabBarIcon: ({ focused, horizontal, tintColor }) => (
				<Icon.MaterialCommunityIcons name='wallet' color={ tintColor } size={ 24 } />
			)
		}
	},
	Budget: { 
		screen: AddTransactionScreen,
		navigationOptions: {
			tabBarLabel: 'Budget',
			tabBarIcon: ({ focused, horizontal, tintColor }) => (
				<Icon.Ionicons name='md-list-box' color={ tintColor } size={ 24 } />
			)
		}
	},
	Report: { 
		screen: LinksScreen,
		navigationOptions: {
			tabBarLabel: 'Report',
			tabBarIcon: ({ focused, horizontal, tintColor }) => (
				<Icon.Entypo name='bar-graph' color={ tintColor } size={ 24 } />
			)
		} 
	}
};

const MaterialBottomTabNavigatorConfig = {
	shifting: false,
	initialRouteName: 'Budget',
	activeColor: Colors.primary,
	inactiveColor: Colors.neutral,
	barStyle: { backgroundColor: '#ffffff' },
};

export default createMaterialBottomTabNavigator(RouteConfigs, MaterialBottomTabNavigatorConfig);