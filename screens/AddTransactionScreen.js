import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

import TransactionAmountInput from '../components/TransactionAmountInput';
import SaveTransactionButton from '../components/SaveTransactionButton';
import Colors from '../constants/Colors';

export default class AddTransactionScreen extends Component {
	render() {
		return (
			<View style={ styles.root }>
				<View style={ styles.container }>
					<Text style={ styles.title }>Add Transaction</Text>
					<TransactionAmountInput />
					<SaveTransactionButton />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#F5F5F5'
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 15,
	},
	title: {
		marginBottom: 15,
		fontSize: 24,
		color: Colors.neutral
	}
});