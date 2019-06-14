import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'expo';

import CurrencyIcon from '../icons/CurrencyIcon';
import Colors from '../../constants/Colors';

export default class TransactionAmountInput extends Component {
	render() {
		return (
			<View style={ styles.myInputWrapper }>
				<View style={{ marginRight: 20 }}>
					<CurrencyIcon 
							currency={ this.props.currency }
							color={ Colors.primary }
							size={ 24 }/>
				</View>
				<TextInput
						onChangeText={ val => this.props.onChangeHandler(val) }
						value={ this.props.value }
						keyboardType='decimal-pad'
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
		paddingTop: 16,
		paddingRight: 20,
		paddingBottom: 16,
		paddingLeft: 20,
		marginBottom: 8,
		borderRadius: 8,
		backgroundColor: '#FFFFFF',
		elevation: 1,
	},
	myInput: {
		flex: 1,
		fontSize: 20,
		color: Colors.neutral
	}
})