import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { Icon } from 'expo';

export default class CategoryButton extends Component {
	renderIcon() {
		if(this.props.category.icon_family === 'MaterialCommunityIcons') {
			return (
				<View style={ styles.iconWrapper }>
					<Icon.MaterialCommunityIcons
							name={ this.props.category.icon_name }
							color='#FFFFFF'
							size={ 32 } />
				</View>
			);
		}
	}

	render() {
		const backgroundColor = this.props.category.color + '80';
		const formattedText = this.props.category._id.charAt(0).toUpperCase() + 
				this.props.category._id.slice(1);
		return (
			<TouchableNativeFeedback 
					onPress={ () => this.props.onPressHandler(this.props.category) }
					useForeground={ true }>
				<View style={ [styles.button, { backgroundColor: backgroundColor }] }>
					{ this.renderIcon() }
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
		color: '#FFFFFF',
		fontSize: 24
	},
	iconWrapper: {
		marginRight: 20
	}
})