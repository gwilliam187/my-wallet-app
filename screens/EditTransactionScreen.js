import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { connect } from 'react-redux';

import { setAmount, setCategory, setDate, setNote } from '../redux/actions/currTransactionActions';
import TransactionCategoryButton from '../components/transactionForm/TransactionCategoryButton';
import TransactionAmountInput from '../components/transactionForm/TransactionAmountInput';
import TransactionDateInput from '../components/transactionForm/TransactionDateInput';
import TransactionNoteInput from '../components/transactionForm/TransactionNoteInput';
import TransactionSaveButton from '../components/transactionForm/TransactionSaveButton';
import TransactionDeleteButton from '../components/transactionForm/TransactionDeleteButton';
import Colors from '../constants/Colors';

class EditTransactionScreen extends Component {
	render() {
		return (
			<View style={ styles.root }>
				<View style={ styles.container }>
					<TransactionCategoryButton 
							onPressHandler={ this.handleCategorySelect }
							value={ this.props.currTransaction.category } />
					<TransactionAmountInput 
							onChangeHandler={ this.handleAmountInput } 
							value={ this.props.currTransaction.amount.toString() } />
					<TransactionDateInput 
							onChangeHandler={ this.handleDateInput }
							value={ this.props.currTransaction.date } />
					<TransactionNoteInput 
							onChangeHandler={ this.handleNoteInput }
							value={ this.props.currTransaction.note } />
				</View>
				<View style={ styles.footer }>
					<View style={ styles.saveButtonWrapper } >
						<TransactionSaveButton onPressHandler={ this.handleSaveClick } />
					</View>
					<View style={ styles.deleteButtonWrapper } >
						<TransactionDeleteButton onPressHandler={ this.handleDeleteClick } />
					</View>
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
	setAmount, setCategory, setDate, setNote
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
		paddingTop: 16,
		paddingRight: 16,
		paddingBottom: 16,
		paddingLeft: 16,
	},
	footer: {
		flexDirection: 'row',
		paddingRight: 16,
		paddingLeft: 16,
		backgroundColor: '#FFFFFF',
	},
	saveButtonWrapper: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'stretch',
		marginRight: 8,
	},
	deleteButtonWrapper: {

	},
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTransactionScreen);