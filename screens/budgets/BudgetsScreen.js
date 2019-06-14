import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { FAB } from 'react-native-paper';
import { connect } from 'react-redux';

import TransactionsMonthPicker from '../../components/TransactionsMonthPicker';
import BudgetsList from '../../components/budgetsList/BudgetsList';
import Colors from '../../constants/Colors';

class BudgetsScreen extends Component {
  fabOnPressHandler = () => {
    // this.props.resetCurrTransaction();
    this.props.navigation.navigate('AddBudget');
  };

  getCurrWalletBudgets = () => {
    return this.props.budgets.filter(budget => budget.wallet._id === this.props.currWallet._id);
  }

  render() {
    if(Object.entries(this.props.currWallet).length > 0) {
      return (
        <View style={ styles.root }>
        	<View style={ styles.container }>
        		<TransactionsMonthPicker />
        		<BudgetsList budgets={ this.getCurrWalletBudgets() } />
            <FAB 
                onPress={ this.fabOnPressHandler }
                icon='add'
                style={ styles.fab } />
        	</View>
        </View>
      );
     } else {
       return (
        <View style={ styles.noWalletWrapper }>
          <Text style={ styles.noWalletText }>Please Select a Wallet</Text>
        </View>
      );
     }
  }
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#F5F5F5'
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.primary
  },
  noWalletWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  noWalletText: {
    fontSize: 16,
    color: Colors.neutralFaded,
  },
});

const mapStateToProps = state => ({
	budgets: state.budgets,
	currWallet: state.currWallet,
});

const mapDispatchToProps = {
	
};

export default connect(mapStateToProps, mapDispatchToProps)(BudgetsScreen);