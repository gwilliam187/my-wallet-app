import React, { Component } from 'react';
import { Icon } from 'expo';

export default class BaseIcon extends Component {
	render() {
		if(this.props.iconFamily === 'MaterialCommunityIcons') {
			return <Icon.MaterialCommunityIcons name={ this.props.iconName } color={ this.props.color } size={ this.props.size } />
		} else if(this.props.iconFamily === 'MaterialIcons') {
			return <Icon.MaterialIcons name={ this.props.iconName } color={ this.props.color } size={ this.props.size } />
		} else if(this.props.iconFamily === 'AntDesign') {
			return <Icon.AntDesign name={ this.props.iconName } color={ this.props.color } size={ this.props.size } />			
		} 
	}
}