import React, { Component } from 'react';
import {
	Button,
	Modal,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Checkbox } from 'react-native-paper';
import { connect } from 'react-redux';
import moment from 'moment';

import BudgetRangeItem from '../../components/budgetsForm/BudgetRangeItem';
import BudgetRangePicker from '../../components/budgetsForm/BudgetRangePicker';
import { setStartDate, setEndDate, setType, setRepeat } from '../../redux/actions/currBudgetActions';
import Colors from '../../constants/Colors';

class SelectRangeScreen extends Component {
	state = {
		modalVisible: false,
	};

	saveOnPress = () => {
		this.setState({ modalVisible: false });
	};

	itemOnPress = (startDate, endDate, type, repeat) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
		this.props.setType(type);
		this.props.setRepeat(repeat);
		this.props.navigation.goBack();
	};

  render() {
    return (
      <View style={ styles.root }>
    		<View style={ styles.list }>
    			<BudgetRangeItem 
    					onPress={ this.itemOnPress } 
    					startDate={ moment().startOf('month') }
    					endDate={ moment().endOf('month') }
    					type='monthly' 
    					title='This month' />
		      <TouchableNativeFeedback
		      		onPress={() => { this.setState({modalVisible: true}) }}
		      		useForeground={ true }>
		      	<View style={ styles.itemWrapper }>
		      		<Text style={ styles.itemName }>Custom range</Text>
		      	</View>
		      </TouchableNativeFeedback>
		      <BudgetRangePicker isVisible={ this.state.modalVisible } onPress={ this.saveOnPress } />
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
	currBudget: state.currBudget,
});

const mapDispatchToProps = {
	setStartDate, setEndDate, setType, setRepeat,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectRangeScreen);