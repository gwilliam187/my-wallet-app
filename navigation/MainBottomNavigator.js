import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import TransactionsScreen from '../screens/TransactionsScreen';
// import TabBarIcon from '../components/TabBarIcon';
import { Icon } from 'expo';

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
		screen: LinksScreen,
		navigationOptions: {
			tabBarLabel: 'Budget',
			tabBarIcon: ({ focused, horizontal, tintColor }) => (
				<Icon.Ionicons name='md-list-box' color={ tintColor } size={ 24 } />
			)
		}
	},
	Report: { 
		screen: SettingsScreen,
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
	initialRouteName: 'Transactions',
	activeColor: '#ff0000',
	inactiveColor: '#000000',
	barStyle: { backgroundColor: '#ffffff' },
};

export default createMaterialBottomTabNavigator(RouteConfigs, MaterialBottomTabNavigatorConfig);