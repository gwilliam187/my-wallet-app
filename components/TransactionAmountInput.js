import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

export default class TransactionAmountInput extends Component {
	state = {
		val: null
	};

	render() {
		return (
			<View style={ styles.myInputWrapper }>
				<Text style={ styles.currencySymbol }>$</Text>
				<TextInput
						onChangeText={ (text) => this.setState({val: text}) }
						keyboardType='decimal-pad'
						value={ this.state.val }
						placeholder='Input amount'
						style={ styles.myInput } />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	myInputWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 15,
		paddingRight: 20,
		paddingBottom: 15,
		paddingLeft: 20,
		marginBottom: 15,
		borderRadius: 8,
		backgroundColor: '#FFFFFF',
	},
	myInput: {
		flex: 1,
		fontSize: 24,
		color: Colors.neutral
		// backgroundColor: '#FF0000'
	},
	currencySymbol: {
		marginRight: 20,
		fontSize: 28,
		color: Colors.primary
	}
})