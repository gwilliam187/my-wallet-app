import React, { Component } from 'react';
import { Icon } from 'expo';

export default class CurrencyIcon extends Component {
	render() {
		const color = this.props.color;
		const size = this.props.size;
		if(this.props.currency === 'euro')
			return <Icon.MaterialCommunityIcons name='currency-eur' color={ color } size={ size }/>
	}
}