import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, } from 'react-native';
import { FAB } from 'react-native-paper';
import { connect } from 'react-redux';
import moment from 'moment';

import TransactionsMonthPicker from '../components/TransactionsMonthPicker';
import TransactionsList from '../components/transactionsList/TransactionsList';
import TransactionsTitle from '../components/headers/TransactionsTitle';
import { IoniconsHeaderButtons, Item } from '../components/headers/IoniconsHeaderButtons';
import { addTransactions } from '../redux/actions/transactionsActions';
import { getCategories } from '../redux/actions/categoriesActions';
import { resetCurrTransaction } from '../redux/actions/currTransactionActions';
import Colors from '../constants/Colors';

class TransactionsScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		headerTitle: (<TransactionsTitle />),
	  headerRight: (
	    <IoniconsHeaderButtons>
	      <Item 
	      		onPress={ () => navigation.navigate('Wallets') }
	      		title="wallets" 
	      		iconName="md-wallet" />
	    </IoniconsHeaderButtons>
	  ),
	});

	fabOnPressHandler = () => {
		this.props.resetCurrTransaction();
		this.props.navigation.navigate('AddTransaction');
	};

	itemOnPressHandler = () => {
		this.props.navigation.navigate('EditTransaction');
	};

	getCurrMonthTransactions = () => {
		const currMonthTransactions = this.props.wallets
			.find(wallet => wallet._id === this.props.currWallet._id)
			.transactions
			.filter(transaction => moment(transaction.date).format('MMMM YYYY') ===
					this.props.transactionsCurrMonth.format('MMMM YYYY')) 
			|| []; 

		return currMonthTransactions;
	};

	renderTransactionList() {
		return <TransactionsList 
				transactions={ this.getCurrMonthTransactions() } 
				itemOnPressHandler={ this.itemOnPressHandler } />;
	}

	render() {
		if(Object.entries(this.props.currWallet).length > 0) {
			return (
				<View style={ styles.root }>
					<View style={ styles.container }>
						<TransactionsMonthPicker />
						{ this.renderTransactionList() }
						<FAB 
								onPress={ this.fabOnPressHandler }
								icon='add'
								style={ styles.fab } />
					</View>
				</View>
			);
		} else {
			return (
				<View style={ styles.noWalletWrapper }>
					<Text style={ styles.noWalletText }>Please Select a Wallet</Text>
				</View>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		wallets: state.wallets,
		currWallet: state.currWallet,
		transactionsCurrMonth: state.transactionsCurrMonth,
	};
};

const mapDispatchToProps = { resetCurrTransaction };

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#F5F5F5'
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	fab: {
		position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.primary
	},
	noWalletWrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'stretch',
	},
	noWalletText: {
		fontSize: 16,
		color: Colors.neutralFaded,
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsScreen);