import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { connect } from 'react-redux';

import BudgetRangeItem from '../../components/budgetsForm/BudgetRangeItem';
import Colors from '../../constants/Colors';

class SelectRangeScreen extends Component {
  render() {
    return (
      <View style={ styles.root }>
    		<View style={ styles.list }>
    			<BudgetRangeItem title='This month' />
		      <TouchableNativeFeedback
		      		onPress={() => { alert('woi') }}
		      		useForeground={ true }>
		      	<View style={ styles.itemWrapper }>
		      		<Text style={ styles.itemName }>Custom range</Text>
		      	</View>
		      </TouchableNativeFeedback>
		     </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#F5F5F5'
	},
	list: {
		flex: 1,
		alignSelf: 'stretch',
		marginTop: 16,
	},
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
});

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
	
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectRangeScreen);