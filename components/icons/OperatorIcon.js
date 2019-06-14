import React, { Component } from 'react';
import { Icon } from 'expo';

export default class OperatorIcon extends Component {
	render() {
		const color = this.props.color;
		const size = this.props.size;
		if(this.props.operation === 'add')
			return <Icon.MaterialCommunityIcons name='plus' color={ color } size={ size } />
		else if(this.props.operation === 'sub')
			return <Icon.MaterialCommunityIcons name='minus' color={ color } size={ size } />
		else
			return null;
	}
}