import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { Checkbox } from 'react-native-paper';

import Colors from '../../constants/Colors';

class BudgetRangeItem extends Component {
	state = {
		checked: false,
	};

  render() {
    return (
      <TouchableNativeFeedback
      		onPress={() => { this.props.onPress }}
      		useForeground={ true }>
      	<View style={ styles.itemWrapper }>
      		<Text style={ styles.itemName }>{ this.props.title }</Text>
      		<View style={ styles.checkboxWrapper }>
      			<Checkbox
      					onPress={ () => { this.setState({ checked: !this.state.checked }) } } 
      					status={ this.state.checked ? 'checked' : 'unchecked' }
      					uncheckedColor={ Colors.neutralFaded }
      					color={ Colors.primary } />
      			<Text style={ styles.checkboxText }>Repeat</Text>
      		</View>
      	</View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
	itemWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 16,
		paddingRight: 16,
		paddingBottom: 16,
		paddingLeft: 16,
		marginTop: 4,
		marginRight: 16,
		marginBottom: 4,
		marginLeft: 16,
		borderRadius: 8,
		backgroundColor: '#FFF',
		elevation: 1,
	},
	itemName: {
		fontSize: 16,
		color: Colors.neutral,
	},
	checkboxWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 'auto',
	},
	checkboxText: {
		fontSize: 12,
		color: Colors.neutralSlightFaded,
	},
});


export default BudgetRangeItem;