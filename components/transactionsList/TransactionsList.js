import React, { Component } from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import TransactionsListHeader from './TransactionsListHeader';
import TransactionsListItem from './TransactionsListItem';

class TransactionsList extends Component {
	mapTransactionsToSections = () => {
		let sections = [];

		this.props.transactions.forEach(transaction => {
		  const i = sections.findIndex(section => section.date === transaction.date)
		  if(i !== -1 && sections.length > 0) {
		  	transaction.category.type === 'expense' ? 
			  		sections[i].sum -= transaction.amount :
			  		sections[i].sum += transaction.amount;
		    sections[i].data.push(transaction);
		  } else {
		    const newObj = {
		      date: transaction.date,
		      sum: transaction.category.type === 'expense' ? -transaction.amount : +transaction.amount,
		      data: [transaction]
		    }
		    sections.push(newObj)
		  }
		});

		return sections;
	}

	render() {
		if(this.props.transactions.length > 0) {
			return (
				<SectionList 
						renderItem={({ item, index, section }) => <TransactionsListItem item={ item } 
								onPressHandler={ this.props.itemOnPressHandler } /> }
						renderSectionHeader={({ section }) => <TransactionsListHeader section={ section } />}
						sections={ this.mapTransactionsToSections() }
						keyExtractor={ item => item._id }
						style={ styles.list } />
			);
		} else {
			return <Text>Empty</Text>
		}
	}
}

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);

const styles = StyleSheet.create({
	list: {
		flex: 1,
		alignSelf: 'stretch',
		paddingLeft: 16,
		paddingRight: 16,
		marginTop: 8,
	}
})