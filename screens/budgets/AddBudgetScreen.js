import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import BudgetNameInput from '../../components/budgetsForm/BudgetNameInput';
import BudgetCategoryButton from '../../components/budgetsForm/BudgetCategoryButton';
import BudgetRangeButton from '../../components/budgetsForm/BudgetRangeButton';
import SaveButton from '../../components/baseForm/SaveButton';

class AddBudgetScreen extends Component {
	rangeOnPress = () => {
		this.props.navigation.navigate('SelectRange');
	};

  render() {
    return (
      <View style={ styles.root }>
      	<View style={ styles.container }>
      		<BudgetNameInput />
      		<BudgetCategoryButton />
      		<BudgetRangeButton onPress={ this.rangeOnPress }/>
      	</View>
      	<View style={ styles.footer }>
					<View>
						<SaveButton onPress={ this.saveOnPress } title='Add Budget' />
					</View>
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
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 16,
		paddingRight: 16,
		paddingBottom: 16,
		paddingLeft: 16
	},
	footer: {
		paddingRight: 12,
		paddingLeft: 12,
		backgroundColor: '#FFF',
	},
});

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
	
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBudgetScreen);