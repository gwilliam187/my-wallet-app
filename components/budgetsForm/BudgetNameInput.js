import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { Icon } from 'expo';

import Colors from '../../constants/Colors';

class BudgetNameInput extends Component {
  render() {
    return (
			<View style={ styles.inputWrapper }>
				<View style={{ marginRight: 28 }}>
					<Icon.MaterialCommunityIcons
							name='text-short'
							color={ Colors.neutral }
							size={ 20 } />
				</View>
				<TextInput
						onChangeText={ val => this.props.onChangeHandler(val) }
						value={ this.props.value }
						placeholder='Budget Name'
						style={ styles.input } />
			</View>
		);
  }
}

const styles = StyleSheet.create({
	inputWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 16,
		paddingRight: 20,
		paddingBottom: 16,
		paddingLeft: 20,
		marginBottom: 8,
		borderRadius: 8,
		backgroundColor: '#FFF',
		elevation: 1,
	},
	input: {
		flex: 1,
		fontSize: 20,
		color: Colors.neutral
	}
});

export default BudgetNameInput;