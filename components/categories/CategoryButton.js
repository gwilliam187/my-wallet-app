import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class CategoryButton extends Component {
	render() {
		return (
			<TouchableOpacity style={ styles.button }>
				<Text style={ styles.buttonText }>{ this.props.category._id }</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		flexDirection: 'column',
		alignSelf: 'stretch',
		alignItems: 'center',
		paddingTop: 10,
		paddingRight: 20,
		paddingBottom: 10,
		paddingLeft: 20,
		marginBottom: 8,
		borderRadius: 8,
		backgroundColor: '#FF0000'
	},
	buttonText: {
		color: '#FFFFFF'
	}
})