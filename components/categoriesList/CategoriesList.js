import React, { Component } from 'react';
import {
	FlatList,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import CategoriesListItem from './CategoriesListItem';

class CategoriesList extends Component {
	keyExtractor = (item, index) => item._id;

	renderItem = ({ item }) => (
		<CategoriesListItem item={ item } onPress={ this.props.itemOnPress }/>
	)

  render() {
    return (
      <FlatList 
      		data={ this.props.categories }
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

const mapStateToProps = state => ({
	categories: state.categories,
});

const mapDispatchToProps = {
	
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);