import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';

import BudgetNameInput from '../../components/budgetsForm/BudgetNameInput';
import AmountInput from '../../components/baseForm/AmountInput';
import BudgetCategoryButton from '../../components/budgetsForm/BudgetCategoryButton';
import BudgetRangeButton from '../../components/budgetsForm/BudgetRangeButton';
import SaveButton from '../../components/baseForm/SaveButton';
import { addBudget } from '../../redux/actions/budgetsActions';
import { setWallet, setName, setAmount, } from '../../redux/actions/currBudgetActions';
import { setCategories as setCheckboxCategories } from '../../redux/actions/categoriesCheckboxActions';

class AddBudgetScreen extends Component {
	nameOnChange = val => { this.props.setName(val) };
	amountOnChange = val => { this.props.setAmount(val) };
	categoryOnPress = () => { 
		this.props.setCheckboxCategories(this.props.currBudget.categories);
		this.props.navigation.navigate('SelectCategories'); 
	};
	rangeOnPress = () => { this.props.navigation.navigate('SelectRange') };
	saveOnPress = () => { 
		const id = uuidv1();
		this.props.addBudget({ _id: id, ...this.props.currBudget });
		this.props.navigation.goBack(); 
	}

	componentDidMount() {
		this.props.setWallet(this.props.currWallet);
		console.log('currBudget');
		console.log(this.props.currBudget);
	}

	componentDidUpdate() {
		console.log('currBudget');
		console.log(this.props.currBudget);
	}

  render() {
    return (
      <View style={ styles.root }>
      	<View style={ styles.container }>
      		<BudgetNameInput 
  						onChange={ this.nameOnChange }
  						value={ this.props.currBudget.name } />
  				<AmountInput 
  						onChange={ this.amountOnChange } 
  						value={ this.props.currBudget.amount }
  						currency={ this.props.currWallet.currency } />
      		<BudgetCategoryButton 
      				onPress={ this.categoryOnPress } />
      		<BudgetRangeButton 
      				onPress={ this.rangeOnPress }
      				startDate={ this.props.currBudget.startDate }
      				endDate={ this.props.currBudget.endDate }
      				type={ this.props.currBudget.type }
      				repeat={ this.props.currBudget.repeat } />
      	</View>
      	<View style={ styles.footer }>
					<SaveButton onPress={ this.saveOnPress } title='Add Budget' />
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
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 16,
		paddingRight: 16,
		paddingBottom: 16,
		paddingLeft: 16,
	},
	footer: {
		paddingRight: 12,
		paddingLeft: 12,
		backgroundColor: '#FFF',
	},
});

const mapStateToProps = state => ({
	currBudget: state.currBudget,
	currWallet: state.currWallet,
});

const mapDispatchToProps = {
	addBudget, setWallet, setName, setAmount, 
	setCheckboxCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBudgetScreen);