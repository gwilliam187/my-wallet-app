import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, } from 'react-native';

import BaseIcon from '../icons/BaseIcon';
import Colors from '../../constants/Colors';

export default class TransactionDeleteButton extends Component {
  render() {
    return (
      <TouchableNativeFeedback
					onPress={ this.props.onPressHandler }
					useForeground={ true } >
					<View style={ styles.button }>
						<BaseIcon 
								iconFamily='MaterialIcons'
								iconName='delete'
								color={ Colors.error }
								size={ 20 } />
					</View>
			</TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
	button: {
		alignSelf: 'stretch',
		alignItems: 'center',
		padding: 16,
		marginTop: 8,
		marginBottom: 8,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: Colors.error,
		// backgroundColor: Colors.error,
	},
});