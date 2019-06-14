import React, { Component } from 'react';
import { Button, StyleSheet, Text, TouchableNativeFeedback, View, } from 'react-native';

import Colors from '../../constants/Colors';

export default class SaveButton extends Component {
	render() {
		return (
			<TouchableNativeFeedback
					onPress={ this.props.onPress }
					useForeground={ true } >
				<View style={ styles.button }>
					<Text style={ styles.buttonText }>{ this.props.title }</Text>
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