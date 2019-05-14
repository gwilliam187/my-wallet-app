import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { connect } from 'react-redux';

import TransactionsList from '../components/transactionsList/TransactionsList';
import Colors from '../constants/Colors';

class TransactionsScreen extends Component {
	fabOnPressHandler = () => {
		this.props.navigation.navigate('AddTransaction')
	};

	componentDidMount() {
		this.props.navigation.addListener('willFocus', payload => {
			console.log('willFocus ' + payload);
		})
	}

	componentDidUpdate() {
		console.log('Transactions Store');
		console.log(this.props.transactions);
	}

	render() {
		return (
			<View style={ styles.root }>
				<View style={ styles.container }>
					<TransactionsList />
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

const mapDispatchToProps = {};

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