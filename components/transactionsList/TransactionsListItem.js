import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';

import CategoryIcon from '../icons/CategoryIcon';
import CurrencyIcon from '../icons/CurrencyIcon';
import { getOneCategory } from '../../constants/Categories';
import Colors from '../../constants/Colors';

export default class TransactionsListItem extends Component { 
	renderNote() {
		if(this.props.value.note) 
			return (
				<View style={ styles.noteWrapper }>
					<Text style={ styles.noteText }>{ this.props.value.note }</Text>
				</View>
			);
	}

	render() {
		const category = getOneCategory(this.props.value.category);
		const color = category.color + '80';
		return (
			<TouchableNativeFeedback
					useForeground={ true } >
				<View style={ [styles.itemWrapper, { backgroundColor: color }] }>
					<View style={ styles.detailsWrapper }>
						<View style={styles.iconWrapper}>
							<CategoryIcon 
									category={ this.props.value.category }
									color='#FFF'
									size={ 20 } />
							<Text style={ styles.iconText }>{ category._id }</Text>
						</View>
						<View style={ styles.amountWrapper }>
							<Text style={ styles.operatorText }>+ </Text>
							<CurrencyIcon currency='euro' color='#FFF' size={ 20 }/>
							<Text style={ styles.amountText }>{ this.props.value.amount }</Text>
						</View>
					</View>
					{ this.renderNote() }
				</View>
			</TouchableNativeFeedback>
		);
	}
}

const styles = StyleSheet.create({
	itemWrapper: {
		flexDirection: 'column',
		marginBottom: 8,
		borderRadius: 8,
	},
	detailsWrapper: {
		flexDirection: 'row',
		marginTop: 8,
		marginRight: 16,
		marginBottom: 8,
		marginLeft: 16,
	},
	iconWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconText: {
		paddingLeft: 8,
		color: '#FFF',
		fontSize: 20,
	},
	amountWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 'auto',
	},
	operatorText: {
		color: '#FFF',
		fontSize: 20,
	},
	amountText: {
		color: '#FFF',
		fontSize: 20,
	},
	noteWrapper: {
		paddingLeft: 16,
		paddingBottom: 4,
		paddingRight: 16,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
		backgroundColor: '#FFF',
	},
	noteText: {
		color: Colors.neutralFaded,
	},
});