import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

import CurrencyIcon from '../../components/icons/CurrencyIcon';
import Colors from '../../constants/Colors';

export default class TransactionsListHeader extends Component {
	renderSum() {
		return ( 
			<View style={ styles.sumWrapper }>
				<Text style={ styles.operatorText }>{ this.props.section.sum < 0 ? '- ' : '+ ' }</Text>
				<CurrencyIcon currency='euro' color={ Colors.neutral } size={ 20 }/>
				<Text style={ styles.sumText }>{ Math.abs(this.props.section.sum) }</Text>
			</View>
		);
	}

	render() {
		return (
			<View style={ styles.headerWrapper }>
				<Text style={ styles.dateText }>{ moment(this.props.section.date).format('D MMM YYYY') }</Text>
				{ this.renderSum() }
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
		marginBottom: 8,
	},
	dateText: {
		color: Colors.neutral,
		fontSize: 16,
	},
	sumWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 'auto',
	},
	operatorText: {
		color: Colors.neutral,
		fontSize: 20,
	},
	sumText: {
		marginLeft: 'auto',
		color: Colors.neutral,
		fontSize: 20,
		fontWeight: 'bold',
	},
});