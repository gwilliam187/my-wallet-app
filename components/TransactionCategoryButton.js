import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TransactionCategoryButton extends Component {
	renderDefaultButton() {
		return (
			<TouchableNativeFeedback 
					onPress={ this.props.onPressHandler }
					useForeground={ true }>
				<View style={ styles.defaultButton }>
					<View style={ styles.iconWrapper }>
						<Icon.AntDesign
								name='question'
								color={ Colors.neutral }
								size={ 32 } />
					</View>
					<Text style={ styles.defaultButtonText }>Select Category</Text>
				</View>
			</TouchableNativeFeedback>
		);
	}

	renderIcon() {
		if(this.props.value.icon_family === 'MaterialCommunityIcons') {
			return (
				<View style={ styles.iconWrapper }>
					<Icon.MaterialCommunityIcons
							name={ this.props.value.icon_name }
							color='#FFFFFF'
							size={ 32 } />
				</View>
			);
		}
	}

	renderSelectedButton() {
		const backgroundColor = this.props.value.color + '80';
		const formattedText = this.props.value._id.charAt(0).toUpperCase() + 
				this.props.value._id.slice(1);
		return (
			<TouchableNativeFeedback 
					onPress={ this.props.onPressHandler }
					useForeground={ true }>
				<View style={ [styles.selectedButton, { backgroundColor: backgroundColor }] }>
					{ this.renderIcon() }
					<Text style={ styles.selectedButtonText }>{ formattedText }</Text>
				</View>
			</TouchableNativeFeedback>
		);
	}

	render() {
		if(!this.props.value) return this.renderDefaultButton();
		else return this.renderSelectedButton();	
	}
}

const styles = StyleSheet.create({
	defaultButton: {
		flexDirection: 'column',
		alignSelf: 'stretch',
		alignItems: 'center',
		paddingTop: 10,
		paddingRight: 20,
		paddingBottom: 10,
		paddingLeft: 20,
		marginBottom: 8,
		borderRadius: 8,
		backgroundColor: '#FFFFFF'
	},
	selectedButton: {
		flexDirection: 'column',
		alignSelf: 'stretch',
		alignItems: 'center',
		paddingTop: 10,
		paddingRight: 20,
		paddingBottom: 10,
		paddingLeft: 20,
		marginBottom: 8,
		borderRadius: 8
	},
	defaultButtonText: {
		fontSize: 16,
		color: Colors.primary
	},
	selectedButtonText: {
		fontSize: 16,
		color: '#FFFFFF'
	},
	iconWrapper: {
		marginBottom: 8
	}
});