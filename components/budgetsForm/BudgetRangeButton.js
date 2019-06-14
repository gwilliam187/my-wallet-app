import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { Icon } from 'expo';

import Colors from '../../constants/Colors';

class BudgetRangeButton extends Component {
  render() {
    return (
			<TouchableNativeFeedback 
					onPress={ this.props.onPress }
					useForeground={ true }>
				<View style={ styles.unselectedButton }>
					<Icon.MaterialCommunityIcons 
						name='calendar'
						color={ Colors.neutral }
						size={ 24 } />
					<Text style={ styles.unselectedButtonText }>Date Range</Text>
				</View>
			</TouchableNativeFeedback>
		);
  }
}

const styles = StyleSheet.create({
	unselectedButton: {
		flexDirection: 'row',
		alignSelf: 'stretch',
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
	unselectedButtonText: {
		marginLeft: 20,
		color: Colors.neutralFaded,
		fontSize: 20,
	},
});

export default BudgetRangeButton;