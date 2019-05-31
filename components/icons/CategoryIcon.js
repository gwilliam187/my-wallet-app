import React, { Component } from 'react';

import BaseIcon from './BaseIcon';
import Colors from '../../constants/Colors';

export default class CategoryIcon extends Component {
	render() {
		if(this.props.category) {
			const color = this.props.color || '#FFF';
			const size = this.props.size || 32;

			return <BaseIcon 
					iconFamily={ this.props.category.iconFamily } 
					iconName={ this.props.category.iconName }
					color={ color } 
					size={ size } />;
		} else {
			return <BaseIcon
					iconFamily='AntDesign'
					iconName='question'
					color={ Colors.neutralSlightFaded }
					size={ 32 } />;
		}
	}
}