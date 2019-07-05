import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import CategoriesCheckboxList from '../../components/categoriesList/CategoriesCheckboxList';
import SaveButton from '../../components/baseForm/SaveButton';
import { setCategories } from '../../redux/actions/currBudgetActions';

class SelectCategoriesScreen extends Component {
  saveOnPress = () => {
    this.props.setCategories(this.props.categoriesCheckbox);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={ styles.root }>
      	<CategoriesCheckboxList />
      	<View style={ styles.footer }>
      		<SaveButton onPress={ this.saveOnPress } title='Select Categories' />
      	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#F5F5F5',
	},
	footer: {
		paddingRight: 12,
		paddingLeft: 12,
		backgroundColor: '#FFF',
	},
});

const mapStateToProps = state => ({
  categoriesCheckbox: state.categoriesCheckbox,
});

const mapDispatchToProps = {
  setCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCategoriesScreen);