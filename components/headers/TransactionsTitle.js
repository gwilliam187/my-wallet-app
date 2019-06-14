import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import CurrencyText from '../CurrencyText';
import Colors from '../../constants/Colors';

class TransactionsTitle extends Component {
  render() {
  	if(Object.entries(this.props.currWallet).length > 0) {
  		const balance = this.props.wallets.find(wallet => wallet._id === this.props.currWallet._id).balance;
	    return (
	      <View style={ styles.titleWrapper }>
	      	<Text style={ styles.walletName }>{ this.props.currWallet.name }</Text>
	      	<CurrencyText 
	      			amount={ balance.toFixed(4) }
	      			currency={ this.props.currWallet.currency }
	      			color={ Colors.neutral } 
	      			size={ 20 }
	      			hidePlusSign={ true } />
	      </View>
	    );
	   } else {
	   	return (
	      <View />
	    );
	   }
  }
}

mapStateToProps = state => ({
	currWallet: state.currWallet,
	wallets: state.wallets,
});

mapDispatchToProps = {

};

const styles = StyleSheet.create({
	titleWrapper: {
		paddingLeft: 16,
	},
	walletName: {
		color: Colors.neutral,
		fontSize: 12,
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsTitle);
