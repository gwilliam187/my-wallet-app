import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TransactionAmountInput extends Component {
	state = {
		inputVal: null
	};

	render() {
		return (
			<View style={ styles.myInputWrapper }>
				<View style={{ marginRight: 20 }}>
					<Icon.MaterialCommunityIcons 
							name='currency-eur' 
							color={ Colors.primary } 
							size={ 28 } />
				</View>
				<TextInput
						onChangeText={ (text) => this.setState({inputVal: text}) }
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
		marginBottom: 8,
		borderRadius: 8,
		backgroundColor: '#FFFFFF',
	},
	myInput: {
		flex: 1,
		fontSize: 24,
		color: Colors.neutral
	}
})