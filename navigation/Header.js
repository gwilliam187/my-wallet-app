import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';

export default class Header extends Component {
	render() {
		return (
			<Appbar.Header style={{ backgroundColor: '#FFFFFF' }}>
				<Appbar.BackAction onPress={ console.log('back') } />
				<Appbar.Content title='Add Transaction' />
			</Appbar.Header>
		);
	}
}