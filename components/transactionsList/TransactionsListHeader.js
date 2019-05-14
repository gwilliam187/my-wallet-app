import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

export default class TransactionsListHeader extends Component {
	render() {
		return (
			<View style={ styles.headerWrapper }>
				<Text style={ styles.dateText }>{ this.props.section.date }</Text>
				<Text style={ styles.totalText }>200</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	headerWrapper: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		paddingRight: 16,
		marginTop: 12,
		marginBottom: 4,
	},
	dateText: {
		color: Colors.neutral,
		fontSize: 16,
	},
	totalText: {
		marginLeft: 'auto',
		color: Colors.neutral,
		fontSize: 20,
		fontWeight: 'bold',
	},
});