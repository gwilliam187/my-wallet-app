import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { RadioButton } from 'react-native-paper';

import CurrencyText from '../CurrencyText';
import BaseIcon from '../icons/BaseIcon';
import { selectWallet } from '../../redux/actions/currWalletActions';
import Colors from '../../constants/Colors';

class WalletsListItem extends Component {
	radioOnPress = () => {
		this.props.onPress();
		this.props.selectWallet(this.props.item);
	};

  render() {
  	const checked = this.props.currWallet._id === this.props.item._id ? 'checked' : 'unchecked';
    return (
      <TouchableNativeFeedback
      		onPress={() => { alert('woi') }}
      		useForeground={ true }>
      	<View style={ styles.itemWrapper }>
      		<RadioButton 
      				onPress={ this.radioOnPress } 
      				status={ checked }
      				color={ Colors.primary } />
      		<Text style={ styles.walletName }>{ this.props.item.name }</Text>
      		<View style={ styles.balanceWrapper }>
      			<CurrencyText 
      					amount={ this.props.item.balance } 
      					currency={ this.props.item.currency } 
      					color={ this.props.item.balance >= 0 ? Colors.primary : Colors.error } 
      					size={ 20 }
      					hidePlusSign={ true } />
      		</View>
      	</View>
      </TouchableNativeFeedback>
    );
  }
}

const mapStateToProps = state => ({
	currWallet: state.currWallet,
});

const mapDispatchToProps = {
	selectWallet, 
};

const styles = StyleSheet.create({
	itemWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 12,
		paddingRight: 16,
		paddingBottom: 12,
		paddingLeft: 8,
		marginTop: 4,
		marginRight: 16,
		marginBottom: 4,
		marginLeft: 16,
		borderRadius: 8,
		elevation: 2,
	},
	iconWrapper: {
		marginRight: 16,
	},
	walletName: {
		fontSize: 16,
		color: Colors.neutral,
	},
	balanceWrapper: {
		marginLeft: 'auto',
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletsListItem);
