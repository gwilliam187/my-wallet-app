import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { Icon } from 'expo';

import { setTransactionsCurrMonth } from '../redux/actions/transactionsCurrMonthActions';
import Colors from '../constants/Colors';

class TransactionMonthPicker extends Component {
	onPreviousButtonPress = () => {
		const prevMonth = this.props.transactionsCurrMonth.clone().subtract(1, 'month');
		this.props.setTransactionsCurrMonth(prevMonth);
	};

	onNextButtonPress = () => {
		const nextMonth = this.props.transactionsCurrMonth.clone().add(1, 'month');
		this.props.setTransactionsCurrMonth(nextMonth);
	};

	onNowButtonPress = () => {
		const nowMonth = moment();
		this.props.setTransactionsCurrMonth(nowMonth);
	};

	renderPreviousButton() {
		return (
			<TouchableNativeFeedback
					onPress={ this.onPreviousButtonPress } 
					background={ TouchableNativeFeedback.Ripple('#B4B4B4', true) }>
				<View style={ styles.buttonWrapper }>
					<Icon.Entypo
							name='chevron-thin-left'
							color={ Colors.neutral }
							size={ 24 } />
				</View>
			</TouchableNativeFeedback>
		);
	}

	renderNextButton() {
		return (
			<TouchableNativeFeedback
					onPress={ this.onNextButtonPress } 
					background={ TouchableNativeFeedback.Ripple('#B4B4B4', true) }>
				<View style={ styles.buttonWrapper }>
					<Icon.Entypo
							name='chevron-thin-right'
							color={ Colors.neutral }
							size={ 24 } />
				</View>
			</TouchableNativeFeedback>
		);
	}

	renderNowButton() {
		return (
			<TouchableNativeFeedback
					onPress={ this.onNowButtonPress } 
					background={ TouchableNativeFeedback.Ripple('#B4B4B4', true) }>
				<View style={ styles.nowButtonWrapper }>
					<Text style={ styles.nowButtonText }>Now</Text>
				</View>
			</TouchableNativeFeedback>
		);
	}

  render() {
    return (
    	<View style={ styles.wrapper }>
	      <View style={ styles.pickerWrapper }>
	      	{ this.renderPreviousButton() }
	      	<Text style={ styles.monthText }>{ moment(this.props.transactionsCurrMonth).format('MMMM YYYY') }</Text>
	      	{ this.renderNextButton() }
	      </View>
	      { this.props.transactionsCurrMonth.format('MMMM YYYY') !== moment().format('MMMM YYYY') ? 
	      		this.renderNowButton() : null }
	     </View>
    );
  }
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'column',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	pickerWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		alignSelf: 'stretch',
		paddingRight: 8,
		paddingLeft: 8,
		marginTop: 12,
	},
	monthText: {
		color: Colors.neutral,
		fontSize: 20,
	},
	nowButtonWrapper: {
		marginTop: 4,
	},
	nowButtonText: {
		color: Colors.primary,
	},
});

const mapStateToProps = state => ({
	transactionsCurrMonth: state.transactionsCurrMonth,
});

const mapDispatchToProps = {
	setTransactionsCurrMonth,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionMonthPicker);