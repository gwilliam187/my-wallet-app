import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableWithoutFeedback, ToastAndroid, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import TransactionCategoryButton from '../components/transactionForm/TransactionCategoryButton';
import TransactionAmountInput from '../components/transactionForm/TransactionAmountInput';
import TransactionDateInput from '../components/transactionForm/TransactionDateInput';
import TransactionNoteInput from '../components/transactionForm/TransactionNoteInput';
import TransactionSaveButton from '../components/transactionForm/TransactionSaveButton';
import { setAmount, setCategory, setDate, setNote } from '../redux/actions/currTransactionActions';
import { addTransaction } from '../redux/actions/transactionsActions';
import { createTransaction } from '../sqlite';
import Colors from '../constants/Colors';

class AddTransactionScreen extends Component {
	handleAmountInput = val => this.props.setAmount(val);
	handleDateInput = val => {
		const parsed = moment(val, 'D MMM YYYY');
		this.props.setDate(parsed);
	}
	handleNoteInput = val => this.props.setNote(val);

	handleCategorySelect = () => {
		this.props.navigation.navigate('SelectCategory');
	};

	handleSaveClick = async () => {
		if(this.checkIfComplete()) {
			if(this.checkIfValid()) {
				const formattedTransaction = {
					amount: parseFloat(this.props.currTransaction.amount),
					date: moment(this.props.currTransaction.date).format('YYYY-MM-DD'),
					note: this.props.currTransaction.note || "",
					categoryId: this.props.currTransaction.category.id 
				};

				const promise = await createTransaction(formattedTransaction);
				if(promise) {
					console.log(promise);
				} else {
					console.log(promise);
				}
			} else {
				ToastAndroid.show('Invalid input', ToastAndroid.SHORT)
			}
		} else {
			ToastAndroid.show('Please input empty data', ToastAndroid.SHORT)
		}
	};

	checkIfComplete = () => {
		if(this.props.currTransaction.amount && 
				this.props.currTransaction.date &&
				this.props.currTransaction.category) {
			return true;
		} else {
			return false
		}
	};

	checkIfValid = () => {
		if(!isFinite(this.props.currTransaction.amount)) 
			return false;
		if(parseFloat(this.props.currTransaction.amount) <= 0)
			return false;
		return true;
	}

	componentDidMount() {
		const date = moment();
		this.props.setDate(date);
	};

	render() {
		return (
			<View style={ styles.root }>
				<View style={ styles.container }>
					<TransactionCategoryButton 
							onPressHandler={ this.handleCategorySelect }
							value={ this.props.currTransaction.category } />
					<TransactionAmountInput 
							onChangeHandler={ this.handleAmountInput } 
							value={ this.props.currTransaction.amount } />
					<TransactionDateInput 
							onChangeHandler={ this.handleDateInput }
							value={ this.props.currTransaction.date } />
					<TransactionNoteInput 
							onChangeHandler={ this.handleNoteInput }
							value={ this.props.currTransaction.note } />
					<TransactionSaveButton onPressHandler={ this.handleSaveClick } />
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		currTransaction: state.currTransaction
	};
};

const mapDispatchToProps = {
	setAmount, setDate, setNote, addTransaction
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#F5F5F5'
	},
	container: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 64,
		paddingRight: 16,
		paddingBottom: 16,
		paddingLeft: 16
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTransactionScreen); 