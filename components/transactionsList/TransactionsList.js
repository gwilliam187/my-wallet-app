import React, { Component } from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { Icon } from 'expo';

import TransactionsListHeader from './TransactionsListHeader';
import TransactionsListItem from './TransactionsListItem';
import Colors from '../../constants/Colors';

class TransactionsList extends Component {
	mapTransactionsToSections = () => {
		let sections = [];

		const sortedTransactions = this.props.transactions.sort((curr, next) => {
			return moment(next.date).format('YYYYMMDDHHmmss') - 
					moment(curr.date).format('YYYYMMDDHHmmss');
		});

		sortedTransactions.forEach(transaction => {
		  const i = sections.findIndex(section => moment(section.date).format('YYYY-MM-DD') === 
		  		moment(transaction.date).format('YYYY-MM-DD'))
		  if(i !== -1 && sections.length > 0) {
			  sections[i].sum += transaction.amount;
		    sections[i].data.push(transaction);
		  } else {
		    const newObj = {
		      date: transaction.date,
		      sum: transaction.amount,
		      data: [transaction],
		    }
		    sections.push(newObj)
		  }
		});

		return sections;
	};

	renderItem = ({ item, index, section }) => (
		<TransactionsListItem 
				item={ item } 
				onPressHandler={ this.props.itemOnPressHandler } />
	);

	renderSectionHeader = ({ section }) => (
		<TransactionsListHeader section={ section } />
	);

	keyExtractor = (item) => item._id;

	render() {
		if(this.props.transactions.length > 0) {
			return (
				<SectionList
						sections={ this.mapTransactionsToSections() }
						renderItem={ this.renderItem }
						renderSectionHeader={ this.renderSectionHeader }
						keyExtractor={ this.keyExtractor }
						contentContainerStyle={{ paddingBottom: 72 }}
						style={ styles.list } />
			);
		} else {
			return (
				<View style={ styles.emptyList }>
					<Icon.MaterialIcons 
							name='library-books'
							color={ Colors.neutralFaded }
							size={ 96 } />
					<Text style={ styles.emptyText }>No Transactions</Text>
				</View>
			);
		}
	}
}

export default TransactionsList;

const styles = StyleSheet.create({
	list: {
		flex: 1,
		alignSelf: 'stretch',
		marginTop: 8,
	},
	emptyList: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'stretch',
		marginTop: 8,
	},
	emptyText: {
		color: Colors.neutralFaded,
	},
});