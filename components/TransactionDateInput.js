import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'expo';
import DatePicker from 'react-native-datepicker';

import Colors from '../constants/Colors';

export default class TransactionDateInput extends Component {
	state = {
		dateVal: null
	}

	render() {
		return (
			<View style={ styles.dateInputWrapper }>
				<View style={ styles.dateInputIcon }>
					<Icon.MaterialCommunityIcons 
							name='calendar' 
							color={ Colors.neutral } 
							size={ 24 } />
				</View>
				<DatePicker
						onDateChange={ date => this.props.onChangeHandler(date) }
						date={ this.props.value }
						placeholder=' '
						format='D MMM YYYY'
						showIcon={ false } 
						customStyles={{ dateInput: styles.dateInput, dateText: styles.dateText }}
						style={{ flex: 1 }} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	dateInputWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'stretch',
		paddingTop: 8,
		paddingRight: 20,
		paddingBottom: 8,
		paddingLeft: 20,
		marginBottom: 8,
		borderRadius: 8,
		backgroundColor: '#FFFFFF'
	},
	dateInput: {
		alignItems: 'flex-start',
		height: 20,
		paddingTop: 0,
		paddingBottom: 0,
		borderWidth: 0
	},
	dateText: {
		fontSize: 16,
		fontWeight: '400'
	},
	dateInputIcon: {
		marginRight: 20
	}
})