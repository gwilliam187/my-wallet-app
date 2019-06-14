import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import { setAmount, setCategory, setDate, setNote } from '../redux/actions/currTransactionActions';
import { editTransaction, deleteTransaction } from '../redux/actions/walletsActions';
import { IoniconsHeaderButtons, Item } from '../components/headers/IoniconsHeaderButtons';
import TransactionCategoryButton from '../components/transactionForm/TransactionCategoryButton';
import TransactionAmountInput from '../components/transactionForm/TransactionAmountInput';
import TransactionDateInput from '../components/transactionForm/TransactionDateInput';
import TransactionNoteInput from '../components/transactionForm/TransactionNoteInput';
import TransactionSaveButton from '../components/transactionForm/TransactionSaveButton';
import TransactionDeleteButton from '../components/transactionForm/TransactionDeleteButton';
import Colors from '../constants/Colors';

class EditTransactionScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
	  headerRight: (
	    <IoniconsHeaderButtons>
	      <Item 
	      		onPress={ () => navigation.navigate('Wallets') }
	      		title="wallets" 
	      		iconName="md-trash" />
	    </IoniconsHeaderButtons>
	  ),
	});

	handleAmountInput = val => this.props.setAmount(val);
	handleDateInput = val => {
		const parsed = moment(val, 'D MMM YYYY');
		this.props.setDate(parsed);
	}
	handleNoteInput = val => this.props.setNote(val);

	handleCategorySelect = () => {
		this.props.navigation.navigate('SelectCategory');
	};

	handleSaveClick = () => {
		if(this.checkIfComplete()) {
			if(this.checkIfValid()) {
				const formattedTransaction = {
					_id: this.props.currTransaction._id,
					amount: this.props.currTransaction.category.type === 'expense' ? 
							-parseFloat(this.props.currTransaction.amount) : 
							parseFloat(this.props.currTransaction.amount),
					date: moment(this.props.currTransaction.date),
					note: this.props.currTransaction.note || "",
					category: this.props.currTransaction.category,
				};

				this.props.editTransaction(formattedTransaction, this.props.currWallet);
				this.props.navigation.goBack();
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

	handleDeleteClick = () => {
		this.props.deleteTransaction(this.props.currTransaction, this.props.currWallet);
		this.props.navigation.goBack();
	};

	componentDidMount() {
		console.log('this.props.currTrans');
		console.log(this.props.currTransaction);
	}

	render() {
		return (
			<View style={ styles.root }>
				<View style={ styles.container }>
					<TransactionCategoryButton 
							onPressHandler={ this.handleCategorySelect }
							value={ this.props.currTransaction.category } />
					<TransactionAmountInput 
							onChangeHandler={ this.handleAmountInput } 
							currency={ this.props.currWallet.currency } 
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
		currTransaction: state.currTransaction,
		currWallet: state.currWallet, 
	};
};

const mapDispatchToProps = {
	setAmount, setCategory, setDate, setNote, 
	editTransaction, deleteTransaction,
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