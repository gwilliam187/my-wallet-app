import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import CurrencyIcon from '../../components/icons/CurrencyIcon';
import CurrencyText from '../CurrencyText';
import Colors from '../../constants/Colors';

class TransactionsListHeader extends Component {
	render() {
		return (
			<View style={ styles.headerWrapper }>
				<Text style={ styles.dateText }>{ moment(this.props.section.date).format('D MMM YYYY') }</Text>
				<View style={ styles.sumWrapper }>
					<CurrencyText
							amount={ this.props.section.sum }
							currency={ this.props.currWallet.currency }
							color={ Colors.neutral }
							size={ 20 } />
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	currWallet: state.currWallet,
});

const mapDispatchToProps = {

};

const styles = StyleSheet.create({
	headerWrapper: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		// paddingRight: 16,
		marginTop: 12,
		marginRight: 20,
		marginBottom: 8,
		marginLeft: 20,
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

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsListHeader);