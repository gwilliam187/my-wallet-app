import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import OperatorIcon from './icons/OperatorIcon';
import CurrencyIcon from './icons/CurrencyIcon';
import Colors from '../constants/Colors';

class CurrencyText extends Component {
  render() {
    let operation = this.props.amount < 0 ? 'sub' : 'add';
    operation = (operation === 'add' && this.props.hidePlusSign || 
        operation === 'sub' && this.props.hideMinusSign) ? null : operation;
    const amount = Math.abs(this.props.amount);
    const currency = this.props.currency;
    let color = this.props.color || Colors.neutral;
    color = (this.props.accent && this.props.amount < 0) ? Colors.error : color;
    color = (this.props.accent && this.props.amount >= 0) ? Colors.primary : color; 
    const size = this.props.size || 16;

    return (
      <View style={ styles.wrapper }>
      	<OperatorIcon
            operation={ operation }
            color={ color }
            size={ size * 0.75 } />
      	<CurrencyIcon 
      			currency={ currency }
      			color={ color }
      			size={ size } />
      	<Text style={{ fontSize: size, color: color }}>{ amount }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
	},
	operatorText: {
    fontSize: 8,
	},
	currencyIcon: {

	},
	amountText: {
    fontSize: 16,
	},
});


export default CurrencyText;