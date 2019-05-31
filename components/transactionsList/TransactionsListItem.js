import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { setAmount, setCategory, setDate, setNote } from '../../redux/actions/currTransactionActions'
import CategoryIcon from '../icons/CategoryIcon';
import CurrencyIcon from '../icons/CurrencyIcon';
import Colors from '../../constants/Colors';

class TransactionsListItem extends Component { 
	handleItemClick = () => {
		const item = this.props.item;

		this.props.setAmount(item.amount);
		this.props.setCategory(item.category);
		this.props.setDate(item.date);
		this.props.setNote(item.note);

		this.props.onPressHandler();
	}

	renderAmount() {
		return (
			<View style={ styles.amountWrapper }>
				<Text style={ styles.operatorText }> { this.props.item.category.type === 'expense' ? '- ' : '+ ' }</Text>
				<CurrencyIcon currency='euro' color='#FFF' size={ 18 }/>
				<Text style={ styles.amountText }>{ this.props.item.amount }</Text>
			</View>
		);
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
		const color = this.props.item.category.color + '80';
		return (
			<TouchableNativeFeedback
					useForeground={ true }
					onPress={ this.handleItemClick } >
				<View style={ [styles.itemWrapper, { backgroundColor: color }] }>
					<View style={ styles.detailsWrapper }>
						<View style={styles.iconWrapper}>
							<CategoryIcon 
									category={ this.props.item.category }
									size={ 20 } />
							<Text style={ styles.iconText }>{ this.props.item.category._id }</Text>
						</View>
						{ this.renderAmount() }
					</View>
					{ this.renderNote() }
				</View>
			</TouchableNativeFeedback>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = {
	setAmount, setCategory, setDate, setNote
};

const styles = StyleSheet.create({
	itemWrapper: {
		flexDirection: 'column',
		paddingTop: 4,
		paddingBottom: 4,
		marginBottom: 8,
		borderRadius: 8,
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
		color: '#FFF',
		fontSize: 20,
	},
	amountWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 'auto',
	},
	operatorText: {
		color: '#FFF',
		fontSize: 20,
	},
	amountText: {
		color: '#FFF',
		fontSize: 18,
	},
	noteWrapper: {
		paddingTop: 4,
		paddingTop: 4,
		paddingLeft: 16,
		paddingBottom: 4,
		paddingRight: 16,
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
		backgroundColor: '#FFF',
	},
	noteText: {
		color: Colors.neutralSlightFaded,
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsListItem);