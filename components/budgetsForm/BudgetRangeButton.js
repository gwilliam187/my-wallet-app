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
	renderUnselectedButton() {
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

	renderSelectedButton() {
		let text = this.props.type === 'monthly' ? 'This month' : null;
		let subText = '';
		if(this.props.type !== 'custom') {
			subText = this.props.repeat ? '(Repeating)' : subText;
		} else {
			subText = 'asdf'
		}

		return (
			<TouchableNativeFeedback 
					onPress={ this.props.onPress }
					useForeground={ true }>
				<View style={ styles.selectedButton }>
					<Icon.MaterialCommunityIcons 
						name='calendar'
						color={ Colors.neutral }
						size={ 24 } />
					<Text style={ styles.selectedButtonText }>{ text }</Text>
					<Text style={ styles.selectedButtonSubtext }>{ subText }</Text>
				</View>
			</TouchableNativeFeedback>
		);
	}

  render() {
    if(this.props.type) {
    	return this.renderSelectedButton();
    } else {
    	return this.renderUnselectedButton();
    }
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
	selectedButton: {
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
	selectedButtonText: {
		marginLeft: 20,
		color: Colors.neutral,
		fontSize: 20,
	},
	selectedButtonSubtext: {
		marginLeft: 8,
		color: Colors.neutralSlightFaded,
	},
});

export default BudgetRangeButton;