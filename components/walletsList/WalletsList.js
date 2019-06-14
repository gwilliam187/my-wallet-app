import React, { Component } from 'react';
import {
	FlatList,
  StyleSheet,
  View,
} from 'react-native';

import WalletsListItem from './WalletsListItem';

class WalletsList extends Component {
	keyExtractor = (item, index) => item._id;

	renderItem = ({ item }) => (
		<WalletsListItem item={ item } onPress={ this.props.itemOnPress }/>
	)

  render() {
    return (
      <FlatList 
      		data={ this.props.wallets }
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


export default WalletsList;