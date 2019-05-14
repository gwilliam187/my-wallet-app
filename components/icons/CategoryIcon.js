import React, { Component } from 'react';
import { Icon } from 'expo';

export default class CategoryIcon extends Component {
	render() {
		const color = this.props.color;
		const size = this.props.size;

		if(this.props.category === 'Food')
			return <Icon.MaterialCommunityIcons name='silverware-fork-knife' color={ color } size={ size } />
		else if(this.props.category === 'Groceries')
			return <Icon.MaterialIcons name='shopping-cart' color={ color } size={ size } />
	}
}