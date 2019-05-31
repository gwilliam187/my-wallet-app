import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { Icon } from 'expo';

// import CategoryIcon from '../categories/CategoryIcon';
import CategoryIcon from '../icons/CategoryIcon';
import Colors from '../../constants/Colors';

export default class TransactionCategoryButton extends Component {
	renderDefaultButton() {
		return (
			<TouchableNativeFeedback 
					onPress={ this.props.onPressHandler }
					useForeground={ true }>
				<View style={ styles.unselectedButton }>
					<CategoryIcon 
							category={ null } 
							color={ Colors.neutral }
							size={ 32 } />
					<Text style={ styles.defaultButtonText }>Select Category</Text>
				</View>
			</TouchableNativeFeedback>
		);
	}

	renderSelectedButton() {
		const backgroundColor = this.props.value.color + '80';
		
		return (
			<TouchableNativeFeedback 
					onPress={ this.props.onPressHandler }
					useForeground={ true }>
				<View style={ [styles.selectedButton, { backgroundColor: backgroundColor }] }>
					<CategoryIcon category={ this.props.value } />
					<Text style={ styles.selectedButtonText }>{ this.props.value._id }</Text>
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
	unselectedButton: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		alignItems: 'center',
		paddingTop: 15,
		paddingRight: 20,
		paddingBottom: 15,
		paddingLeft: 20,
		marginBottom: 8,
		borderRadius: 8,
		backgroundColor: '#FFFFFF'
	},
	selectedButton: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		alignItems: 'center',
		paddingTop: 15,
		paddingRight: 20,
		paddingBottom: 15,
		paddingLeft: 20,
		marginBottom: 8,
		borderRadius: 8,
	},
	defaultButtonText: {
		marginLeft: 16,
		color: Colors.neutralFaded,
		fontSize: 24,
	},
	selectedButtonText: {
		marginLeft: 16,
		fontSize: 24,
		color: '#FFFFFF',
	},
});