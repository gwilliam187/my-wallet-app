import React, { Component } from 'react';
import {
	FlatList,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import CategoriesCheckboxListItem from './CategoriesCheckboxListItem';
import Colors from '../../constants/Colors';

class CategoriesCheckboxList extends Component {
	state = {
		allChecked: false,
	};

	keyExtractor = (item, index) => item._id;
	renderItem = ({ item }) => (
		<CategoriesCheckboxListItem 
				onPress={ this.props.itemOnPress }
				item={ item }
				allChecked={ this.state.allChecked } />
	);

	selectAllOnPress = () => {
		this.setState({ allChecked: !this.state.allChecked })
	};

  render() {
    return (
    	<View style={ styles.wrapper }>
    		<TouchableNativeFeedback 
    				onPress={ this.selectAllOnPress }
    				useForeground={ true }>
    			<View style={ styles.allButtonWrapper }>
    				<Text style={ styles.allButtonText }>
    					{ this.state.allChecked ? 'Unselect All': 'Select All' }
    				</Text>
    			</View>
    		</TouchableNativeFeedback>
	      <FlatList 
	      		data={ this.props.categories }
	      		extraData={ this.state.allChecked }
	      		keyExtractor={ this.keyExtractor }
	      		renderItem={ this.renderItem }
	      		style={ styles.list } />
	     </View>
    );
  }
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	allButtonWrapper: {
		padding: 4,
		marginTop: 16,
		marginRight: 16,
		marginLeft: 'auto',
	},
	allButtonText: {
		fontSize: 16,
		color: Colors.primary,
	},
	list: {
		flex: 1, 
		alignSelf: 'stretch',
		marginTop: 16,
	},
});

const mapStateToProps = state => ({
	categories: state.categories,
	currBudget: state.currBudget,
	categoriesCheckbox: state.categoriesCheckbox,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesCheckboxList);