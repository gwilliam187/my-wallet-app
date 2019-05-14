import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { format } from 'date-fns';

import TransactionCategoryButton from '../components/transactionForm/TransactionCategoryButton';
import TransactionAmountInput from '../components/TransactionAmountInput';
import TransactionDateInput from '../components/TransactionDateInput';
import TransactionNoteInput from '../components/TransactionNoteInput';
import SaveTransactionButton from '../components/SaveTransactionButton';
import { setAmount, setCategory, setDate, setNote } from '../redux/actions/currTransactionActions';
import { addTransaction } from '../redux/actions/transactionsActions';
import { getOneCategory } from '../constants/Categories';
import Colors from '../constants/Colors';

class AddTransactionScreen extends Component {
	handleAmountInput = val => this.props.setAmount(val);
	handleDateInput = val => this.props.setDate(val);
	handleNoteInput = val => this.props.setNote(val);

	handleCategorySelect = () => {
		this.props.navigation.navigate('SelectCategory');
	};

	handleSaveClick = () => {
		this.props.addTransaction(this.props.currTransaction);
	};

	componentDidMount() {
		const date = format(new Date(), 'D MMM YYYY');
		this.handleDateInput(date);
	};

	render() {
		return (
			<View style={ styles.root }>
				<View style={ styles.container }>
					<TransactionCategoryButton 
							onPressHandler={ this.handleCategorySelect }
							value={ getOneCategory(this.props.currTransaction.category) } />
					<TransactionAmountInput 
							onChangeHandler={ this.handleAmountInput } 
							value={ this.props.currTransaction.amount } />
					<TransactionDateInput 
							onChangeHandler={ this.handleDateInput }
							value={ this.props.currTransaction.date } />
					<TransactionNoteInput 
							onChangeHandler={ this.handleNoteInput }
							value={ this.props.currTransaction.note } />
					<SaveTransactionButton onPressHandler={ this.handleSaveClick } />
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
		justifyContent: 'center',
		padding: 15,
	},
	toolbar: {
		height: 50,
		backgroundColor: '#FFFFFF'
	},
	title: {
		marginBottom: 15,
		fontSize: 24,
		color: Colors.neutral
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTransactionScreen); 