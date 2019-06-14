import React, { Component } from 'react';
import {
	FlatList,
  StyleSheet,
  View,
} from 'react-native';

import BudgetsListItem from './BudgetsListItem';

class BudgetsList extends Component {
	keyExtractor = (item, index) => item._id;

	renderItem = ({ item }) => (
		<BudgetsListItem item={ item } onPress={ this.props.itemOnPress }/>
	)

	componentDidMount() {
		console.log('budgets');
		console.log(this.props.budgets);
	}

  render() {
    return (
      <FlatList 
      		data={ this.props.budgets }
      		keyExtractor={ this.keyExtractor }
      		renderItem={ this.renderItem }
      		style={ styles.list } />
    );
  }
}

const styles = StyleSheet.create({
	list: {
		flex: 1, 
		alignSelf: 'stretch',
		marginTop: 16,
	},
});

export default BudgetsList;