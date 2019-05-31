import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';

// import CategoryIcon from './CategoryIcon';
import CategoryIcon from '../icons/CategoryIcon';

export default class CategoryButton extends Component {
	render() {
		const backgroundColor = this.props.category.color + '80';
		
		return (
			<TouchableNativeFeedback 
					onPress={ () => this.props.onPressHandler(this.props.category) }
					useForeground={ true }>
				<View style={ [styles.button, { backgroundColor: backgroundColor }] }>
					<CategoryIcon 
							category={ this.props.category }
							color='#FFF'
							size={ 32 } />
					<Text style={ styles.buttonText }>{ this.props.category._id }</Text>
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