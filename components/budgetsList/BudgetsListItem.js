import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'expo';

import CurrencyText from '../CurrencyText';
import BaseIcon from '../icons/BaseIcon';
import Colors from '../../constants/Colors';

class BudgetsListItem extends Component {
	renderCategoryIcons = () => {
		if(this.props.item.categories.length > 0) {
			return this.props.item.categories.map(budgetCategory => {
				const budgetCategoryDetails = this.props.categories.find(category => category._id === budgetCategory);
				return (
					<BaseIcon 
	  					iconFamily={ budgetCategoryDetails.iconFamily }
	  					iconName={ budgetCategoryDetails.iconName }
	  					color={ budgetCategoryDetails.color }
	  					size={ 20 }
	  					key={ budgetCategory } />
	  		);
	  	});
		} else {
			return (
				<View style={ styles.allExpensesWrapper }>
					<Icon.Ionicons name='md-globe' color={ Colors.neutralSlightFaded } size={ 20 } />
					<Text style={ styles.allExpensesText }>All Expenses</Text>
				</View>
			);
		}
	}

  render() {
    return (
      <TouchableNativeFeedback useForeground={ true }>
      	<View style={ styles.wrapper }>
      		<View style={ styles.nameAmountWrapper }>
      			<Text style={ styles.budgetName }>{ this.props.item.name }</Text>
      			<View style={ styles.spentTotalWrapper }>
	      			<View style={ styles.spentWrapper }>
		      			<CurrencyText
		      					amount={ 5 }
		      					currency={ this.props.item.wallet.currency } 
		      					color={ Colors.primary } 
		      					size={ 22 }
		      					hidePlusSign={ true } />
		      		</View>
		      		<Text style={ styles.totalText }>/{ this.props.item.amount }</Text>
		      	</View>
      		</View>
      		<View style={ styles.categoriesWrapper }>
      			{ this.renderCategoryIcons() }
      		</View>
      	</View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'column',
		paddingTop: 12,
		paddingRight: 16,
		paddingBottom: 16,
		paddingLeft: 16,
		marginTop: 4,
		marginRight: 16,
		marginBottom: 8,
		marginLeft: 16,
		borderRadius: 8,
		backgroundColor: '#FFF',
		elevation: 1,
	},
	nameAmountWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 8,
	},
	budgetName: {
		fontSize: 20,
	},
	spentTotalWrapper: {
		flexDirection: 'row',
		alignItems: 'flex-end',
	},
	totalText: {
		color: Colors.neutralSlightFaded,
		fontSize: 14,
	},
	categoriesWrapper: {
		flexDirection: 'row',
	},
	allExpensesWrapper: {
		flexDirection: 'row',
	},
	allExpensesText: {
		marginLeft: 4,
		color: Colors.neutralSlightFaded,
	},
});

const mapStateToProps = state => ({
	categories: state.categories,
	wallets: state.wallets,
	currWallet: state.currWallet,
});

const mapDispatchToProps = {
	
};

export default connect(mapStateToProps, mapDispatchToProps)(BudgetsListItem);