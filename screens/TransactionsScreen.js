import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, } from 'react-native';
import { FAB } from 'react-native-paper';
import { connect } from 'react-redux';

import TransactionsList from '../components/transactionsList/TransactionsList';
import { getTransactions } from '../redux/actions/transactionsActions';
import { getCategories } from '../redux/actions/categoriesActions';
import { resetCurrTransaction } from '../redux/actions/currTransactionActions';
import Colors from '../constants/Colors';

class TransactionsScreen extends Component {
	fabOnPressHandler = () => {
		this.props.resetCurrTransaction();
		this.props.navigation.navigate('AddTransaction')
	};

	itemOnPressHandler = () => {
		this.props.navigation.navigate('EditTransaction');
	};

	componentDidMount() {
		this.props.navigation.addListener('willFocus', async () => {
			this.props.getTransactions();
		})
	}

	renderLoading() {
		return <ActivityIndicator size={ 64 } color={ Colors.primary } />;
	}

	renderTransactionList() {
		return <TransactionsList 
				transactions={ this.props.transactions.data } 
				itemOnPressHandler={ this.itemOnPressHandler } />;
	}

	render() {
		return (
			<View style={ styles.root }>
				<View style={ styles.container }>
					{ this.props.transactions.isFetching ? this.renderLoading() : this.renderTransactionList() }
					<FAB 
							onPress={ this.fabOnPressHandler }
							icon='add'
							style={ styles.fab } />
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		transactions: state.transactions
	};
};

const mapDispatchToProps = { getCategories, getTransactions, resetCurrTransaction };

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
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsScreen);