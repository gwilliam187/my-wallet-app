import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { setId, setAmount, setCategory, setDate, setNote } from '../../redux/actions/currTransactionActions'
import CategoryIcon from '../icons/CategoryIcon';
import CurrencyIcon from '../icons/CurrencyIcon';
import CurrencyText from '../CurrencyText';
import Colors from '../../constants/Colors';

class TransactionsListItem extends Component { 
	handleItemClick = () => {
		const item = this.props.item;

		this.props.setId(item._id);
		this.props.setAmount(Math.abs(item.amount));
		this.props.setCategory(item.category);
		this.props.setDate(item.date);
		this.props.setNote(item.note);

		this.props.onPressHandler();
	}

	renderNote() {
		if(this.props.item.note) {
			return (
				<View style={ styles.noteWrapper }>
					<Text style={ styles.noteText }>{ this.props.item.note }</Text>
				</View>
			);
		}
	}

	render() {
		const color = this.props.item.category.color;
		return (
			<TouchableNativeFeedback
					useForeground={ true }
					onPress={ this.handleItemClick } >
				<View style={ styles.itemWrapper }>
					<View style={ styles.detailsWrapper }>
						<View style={styles.iconWrapper}>
							<CategoryIcon 
									category={ this.props.item.category }
									color={ color }
									size={ 24 } />
							<Text style={ styles.iconText }>{ this.props.item.category._id }</Text>
						</View>
						<View style={ styles.amountWrapper }>
							<CurrencyText
									operation={ this.props.item.amount < 0 ? 'sub' : null }
									amount={ this.props.item.amount }
									currency={ this.props.currWallet.currency }
									color={ Colors.neutral }
									size={ 16 }
									accent={ true }
									style={ styles.amountWrapper } />
						</View>
					</View>
					{ this.renderNote() }
				</View>
			</TouchableNativeFeedback>
		);
	}
}

const mapStateToProps = state => ({
	currWallet: state.currWallet,
});

const mapDispatchToProps = {
	setId, setAmount, setCategory, setDate, setNote,
};

const styles = StyleSheet.create({
	itemWrapper: {
		flexDirection: 'column',
		paddingTop: 8,
		paddingBottom: 8,
		marginRight: 16,
		marginBottom: 8,
		marginLeft: 16,
		borderRadius: 8,
		backgroundColor: '#FFF',
		elevation: 1,
	},
	detailsWrapper: {
		flexDirection: 'row',
		marginTop: 8,
		marginRight: 16,
		marginBottom: 8,
		marginLeft: 16,
	},
	iconWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconText: {
		paddingLeft: 8,
		color: Colors.neutral,
		fontSize: 16,
	},
	amountWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 'auto',
	},
	noteWrapper: {
		paddingLeft: 16,
		paddingBottom: 4,
		paddingRight: 16,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
	},
	noteText: {
		color: Colors.neutralSlightFaded,
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsListItem);