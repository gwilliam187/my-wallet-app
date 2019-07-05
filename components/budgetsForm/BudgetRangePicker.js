import React, { Component } from 'react';
import {
	Button,
	Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Calendar } from 'react-native-calendars';

class BudgetRangePicker extends Component {
  render() {
    return (
    	<Modal 
    			visible={ this.props.isVisible }
    			transparent={ true }
    			onRequestClose={() =>{}}>
    			<View style={ styles.wrapper }>
	      		<Calendar 
	      			markedDates={{

	      			}}
	      			markingType={'period'} />
	      		<Button title='Save' onPress={ this.props.onPress }/>
      		</View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: 'center',
		marginRight: 16,
		marginLeft: 16,
	},
});


export default BudgetRangePicker;