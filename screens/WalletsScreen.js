import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import selectWallet from '../redux/actions/currWalletActions';
import WalletsList from '../components/walletsList/WalletsList';

class WalletsScreen extends Component {
	itemOnPress = () => {
		this.props.navigation.goBack();
	};

  render() {
    return (
      <View style={ styles.root }>
				<View style={ styles.container }>
      		<WalletsList wallets={ this.props.wallets } itemOnPress={ this.itemOnPress } />
      	</View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
	wallets: state.wallets,
});

const mapDispatchToProps = {
	selectWallet,
};

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
});


export default connect(mapStateToProps, mapDispatchToProps)(WalletsScreen);