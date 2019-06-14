import React, { Component } from 'react';
import { Button, StyleSheet, Text, TouchableNativeFeedback, View, } from 'react-native';

import BaseIcon from '../icons/BaseIcon';
import Colors from '../../constants/Colors';

export default class TransactionSaveButton extends Component {
	render() {
		return (
			<TouchableNativeFeedback
					onPress={ this.props.onPressHandler }
					useForeground={ true } >
				<View style={ styles.button }>
					<Text style={ styles.buttonText }>Save Transaction</Text>
				</View>
			</TouchableNativeFeedback>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 8,
		marginBottom: 8,
		padding: 16,
		borderRadius: 8,
		backgroundColor: Colors.primary,
	},
	buttonText: {
		fontSize: 16,
		color: '#FFFFFF',
	},
});