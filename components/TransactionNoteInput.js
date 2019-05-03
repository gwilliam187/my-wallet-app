import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TransactionNoteInput extends Component {
	state = {
		inputVal: null
	};

	render() {
		return (
			<View style={ styles.inputWrapper }>
				<View style={{ marginRight: 20 }}>
					<Icon.MaterialCommunityIcons 
							name='notebook' 
							color={ Colors.neutral } 
							size={ 24 } />
				</View>
				<TextInput 
						onChangeText={ val => this.setState({ inputVal: val }) }
						value={ this.state.inputVal }
						placeholder='Write note'
						multiline={ true }
						style={ styles.input } />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	inputWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 8,
		paddingRight: 20,
		paddingBottom: 8,
		paddingLeft: 20,
		marginBottom: 8,
		borderRadius: 8,
		backgroundColor: '#FFFFFF',
	},
	input: {
		flex: 1,
		fontSize: 14,
		color: Colors.neutral
	}
})