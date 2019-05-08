import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

import Colors from '../constants/Colors';

export default class TransactionsScreen extends Component {
	fabOnPressHandler = () => {
		this.props.navigation.navigate('AddTransaction')
	};

	render() {
		return (
			<View style={ styles.root }>
				<View style={ styles.container }>
					<Text>Hello World!</Text>
					<FAB 
							onPress={ this.fabOnPressHandler }
							icon='add'
							style={ styles.fab } />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#F5F5F5'
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 15,
	},
	fab: {
		position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.primary
	},
});