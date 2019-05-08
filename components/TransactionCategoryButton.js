import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TransactionCategoryButton extends Component {
	state = {
		selected: false
	};

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

	renderSelectedButton() {
		return (
			<TouchableNativeFeedback 
					onPress={ this.props.onPressHandler }
					style={ [styles.selectedButton, { backgroundColor: '#FF000080' }] }>
				<View>
					<View style={ styles.iconWrapper }>
						<Icon.MaterialCommunityIcons
								name='silverware-fork-knife'
								color='#FFFFFF'
								size={ 32 } />
					</View>
					<Text style={ styles.selectedButtonText }>Food</Text>
				</View>
			</TouchableNativeFeedback>
		);
	}

	render() {
		if(!this.state.selected) return this.renderDefaultButton();
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
		borderRadius: 8,
		backgroundColor: '#FFFFFF'
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