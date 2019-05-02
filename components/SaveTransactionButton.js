import React, { Component } from 'react';
import { TouchableOpacity, Text, Button, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

export default class SaveTransactionButton extends Component {
	onPressHandler = () => {
		console.log('clicked')
	};

	render() {
		return (
			<TouchableOpacity
					style={ styles.myButton }
					onPress={ this.onPressHandler } >
				<Text
						style={ styles.myButtonText } >
					Save Transaction</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	myButton: {
		alignSelf: 'stretch',
		alignItems: 'center',
		padding: 15,
		borderRadius: 8,
		backgroundColor: Colors.primary
	},
	myButtonText: {
		fontSize: 16,
		color: '#FFFFFF'
	}
});