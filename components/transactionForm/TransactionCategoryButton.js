import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { Icon } from 'expo';

// import CategoryIcon from '../categories/CategoryIcon';
import BaseIcon from '../icons/BaseIcon';
import CategoryIcon from '../icons/CategoryIcon';
import Colors from '../../constants/Colors';

export default class TransactionCategoryButton extends Component {
	renderDefaultButton() {
		return (
			<TouchableNativeFeedback 
					onPress={ this.props.onPressHandler }
					useForeground={ true }>
				<View style={ styles.unselectedButton }>
					<Icon.AntDesign 
						name='question'
						color={ Colors.neutral }
						size={ 24 } />
					<Text style={ styles.defaultButtonText }>Select Category</Text>
				</View>
			</TouchableNativeFeedback>
		);
	}

	renderSelectedButton() {		
		return (
			<TouchableNativeFeedback 
					onPress={ this.props.onPressHandler }
					useForeground={ true }>
				<View style={ styles.selectedButton }>
					<CategoryIcon 
							category={ this.props.value } 
							color={ this.props.value.color }
							size={ 24 } />
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
		paddingTop: 16,
		paddingRight: 20,
		paddingBottom: 16,
		paddingLeft: 20,
		marginBottom: 8,
		borderRadius: 8,
		backgroundColor: '#FFF',
		elevation: 2,
	},
	selectedButton: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		alignItems: 'center',
		paddingTop: 16,
		paddingRight: 20,
		paddingBottom: 16,
		paddingLeft: 20,
		marginBottom: 8,
		borderRadius: 8,
		backgroundColor: '#FFF',
		elevation: 2,
	},
	defaultButtonText: {
		marginLeft: 20,
		color: Colors.neutralFaded,
		fontSize: 20,
	},
	selectedButtonText: {
		marginLeft: 20,
		fontSize: 20,
		color: Colors.neutral,
	},
});