import React, { Component } from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

import TransactionsListHeader from './TransactionsListHeader';
import TransactionsListItem from './TransactionsListItem';

export default class TransactionsList extends Component {
	sections = [
		{
			date: '14 May 2019',
			data: [
				{
					_id: 1,
					amount: 100,
					category: 'Food',
					note: 'asdfjljk alksdjf oaiekl askldjflkajsdklf aksj asjelfaksdj flak sdjflajldskf klasdj faj welfjdlsf j'
				},
				{
					_id: 2,
					amount: 20,
					category: 'Groceries',
					note: ''
				}
			]
		},
		{
			date: '15 May 2019',
			data: [
				{
					_id: 3,
					amount: 70,
					category: 'Food',
					note: ''
				}
			]
		}
	];

	render() {
		return (
			<SectionList 
					renderItem={({ item, index, section }) => <TransactionsListItem value={ item } /> }
					renderSectionHeader={({ section }) => <TransactionsListHeader section={ section } />}
					sections={ this.sections }
					keyExtractor={ item => item._id }
					style={ styles.list } />
		);
	}
}

const styles = StyleSheet.create({
	list: {
		flex: 1,
		alignSelf: 'stretch',
		paddingLeft: 16,
		paddingRight: 16,
		marginTop: 8,
	}
})