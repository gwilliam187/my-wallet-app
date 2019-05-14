import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'expo';

import Colors from '../../constants/Colors';

export default class CategoryIcon extends Component {
	renderIcon() {
		let color = !this.props.dark ? '#FFFFFF' : Colors.neutral;
		color = this.props.tinted ? this.props.tinted : color;
		const size = 32;

		if(this.props.iconFamily === 'MaterialCommunityIcons') {
			return <Icon.MaterialCommunityIcons name={ this.props.iconName } color={ color } size={ size } />
		} else if(this.props.iconFamily === 'MaterialIcons') {
			return <Icon.MaterialIcons name={ this.props.iconName } color={ color } size={ size } />
		} else if(this.props.iconFamily === 'AntDesign') {
			return <Icon.AntDesign name={ this.props.iconName } color={ color } size={ size } />			
		} 
	}

	render() {
		return(
			<View>
			{ this.renderIcon() }
			</View>
		)
	}
}

const styles = StyleSheet.create({
	iconWrapper: {
		marginRight: 16
	},
});