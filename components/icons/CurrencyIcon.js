import React, { Component } from 'react';
import { Text } from 'react-native';
import { Icon } from 'expo';

export default class CurrencyIcon extends Component {
	render() {
		const color = this.props.color;
		const size = this.props.size;
		if(this.props.currency === 'eur')
			return <Icon.MaterialCommunityIcons name='currency-eur' color={ color } size={ size } />
		else if(this.props.currency === 'idr')
			return <Text style={{ color: color, fontSize: size * 0.9 }}>Rp </Text>
	}
}