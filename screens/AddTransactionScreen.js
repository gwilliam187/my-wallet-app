import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import TransactionCategoryButton from '../components/TransactionCategoryButton';
import TransactionAmountInput from '../components/TransactionAmountInput';
import TransactionDateInput from '../components/TransactionDateInput';
import TransactionNoteInput from '../components/TransactionNoteInput';
import SaveTransactionButton from '../components/SaveTransactionButton';
import Colors from '../constants/Colors';

export default class AddTransactionScreen extends Component {
	state = {
		categoryVal: null,
		amountVal: null,
		dateVal: null,
		noteVal: null 
	};

	handleCategorySelect = () => {
		console.log('call pls')
		this.props.navigation.navigate('SelectCategory');
	};

	render() {
		return (
			<View style={ styles.root }>
				<View style={ styles.container }>
					<TransactionCategoryButton onPressHandler={ this.handleCategorySelect } />
					<TransactionAmountInput />
					<TransactionDateInput />
					<TransactionNoteInput />
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
	toolbar: {
		height: 50,
		backgroundColor: '#FFFFFF'
	},
	title: {
		marginBottom: 15,
		fontSize: 24,
		color: Colors.neutral
	}
});