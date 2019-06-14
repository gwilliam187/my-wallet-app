import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';

import CategoryIcon from '../icons/CategoryIcon';
import Colors from '../../constants/Colors';

export default class CategoryListItem extends Component {
	componentDidMount() {
		console.log('item');
		console.log(this.props.item);
	}

	render() {
		return (
			<TouchableNativeFeedback 
					onPress={ () => this.props.onPress(this.props.item) }
					useForeground={ true }>
				<View style={ styles.itemWrapper }>
					<CategoryIcon 
							category={ this.props.item }
							color={ this.props.item.color }
							size={ 24 } />
					<Text style={ styles.buttonText }>{ this.props.item._id }</Text>
				</View>
			</TouchableNativeFeedback>
		);
	}
}

const styles = StyleSheet.create({
	itemWrapper: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		alignItems: 'center',
		paddingTop: 16,
		paddingRight: 20,
		paddingBottom: 16,
		paddingLeft: 20,
		marginRight: 16,
		marginBottom: 8,
		marginLeft: 16,
		borderRadius: 8,
		backgroundColor: '#FFF',
		elevation: 2,
	},
	buttonText: {
		marginLeft: 16,
		color: Colors.neutral,
		fontSize: 20,
	},
})