import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';

import CategoryIcon from './CategoryIcon';

export default class CategoryButton extends Component {
	render() {
		const backgroundColor = this.props.category.color + '80';
		const formattedText = this.props.category._id.charAt(0).toUpperCase() + 
				this.props.category._id.slice(1);
		return (
			<TouchableNativeFeedback 
					onPress={ () => this.props.onPressHandler(this.props.category._id) }
					useForeground={ true }>
				<View style={ [styles.button, { backgroundColor: backgroundColor }] }>
					<CategoryIcon 
							iconFamily={ this.props.category.icon_family }
							iconName={ this.props.category.icon_name } />
					<Text style={ styles.buttonText }>{ formattedText }</Text>
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
		paddingTop: 15,
		paddingRight: 20,
		paddingBottom: 15,
		paddingLeft: 20,
		marginBottom: 8,
		borderRadius: 8
	},
	buttonText: {
		marginLeft: 16,
		color: '#FFFFFF',
		fontSize: 24,
	}
})