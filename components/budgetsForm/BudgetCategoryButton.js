import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'expo';

import CategoryIcon from '../../components/icons/CategoryIcon';
import Colors from '../../constants/Colors';

class BudgetCategoryButton extends Component {
	renderUnselectedButton() {
		return (
			<TouchableNativeFeedback 
					onPress={ this.props.onPress }
					useForeground={ true }>
				<View style={ styles.unselectedButton }>
					<Icon.AntDesign 
						name='question'
						color={ Colors.neutral }
						size={ 24 } />
					<Text style={ styles.unselectedButtonText }>Select Categories</Text>
				</View>
			</TouchableNativeFeedback>
		);
	}

	renderOneSelectedButton() {
		return (
			<TouchableNativeFeedback 
					onPress={ this.props.onPress }
					useForeground={ true }>
				<View style={ styles.unselectedButton }>
					<Icon.AntDesign 
						name='question'
						color={ Colors.neutral }
						size={ 24 } />
					<Text style={ styles.unselectedButtonText }>Select Categories</Text>
				</View>
			</TouchableNativeFeedback>
		);
	}

	renderMultipleSelectedButton() {
		return (
			<TouchableNativeFeedback useForeground={ true }>
				<View style={ styles.multipleSelectedButton }>
					<View style={ styles.multipleSelectedNameWrapper }>
						<Icon.MaterialCommunityIcons 
								name='checkbox-multiple-marked'
								color={ Colors.neutral }
								size={ 24 } />
						<Text style={ styles.multipleSelectedNameText }>Multiple Categories</Text>
					</View>
					<View style={ styles.multipleSelectedIconWrapper }>
						<Icon.AntDesign 
								name='question'
								color={ Colors.neutral }
								size={ 20 } />
						<Icon.AntDesign 
								name='question'
								color={ Colors.neutral }
								size={ 20 } />
					</View>
				</View>
			</TouchableNativeFeedback>
		);
	}

  render() {
  	if(this.props.currBudget.categories.length === 0) {
    	return this.renderUnselectedButton();
    } else if(this.props.currBudget.categories.length === 1) {
    	return this.renderOneSelectedButton();
    } else if(this.props.currBudget.categories.length > 1) {
    	return this.renderMultipleSelectedButton();
    }
  }
}

const styles = StyleSheet.create({
	unselectedButton: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		alignItems: 'center',
		paddingTop: 16,
		paddingRight: 20,
		paddingBottom: 16,
		paddingLeft: 20,
		marginBottom: 8,
		borderRadius: 8,
		backgroundColor: '#FFF',
		elevation: 1,
	},
	unselectedButtonText: {
		marginLeft: 20,
		color: Colors.neutralFaded,
		fontSize: 20,
	},
	multipleSelectedButton: {
		flexDirection: 'column',
		alignSelf: 'stretch',
		paddingTop: 16,
		paddingRight: 20,
		paddingBottom: 16,
		paddingLeft: 20,
		marginBottom: 8,
		borderRadius: 8,
		backgroundColor: '#FFF',
		elevation: 1,
	},
	multipleSelectedNameWrapper: {
		flexDirection: 'row',
		marginBottom: 4,
	},
	multipleSelectedNameText: {
		marginLeft: 20,
		color: Colors.neutral,
		fontSize: 20,
	},
	multipleSelectedIconWrapper: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
});

const mapStateToProps = state => ({
	currBudget: state.currBudget,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(BudgetCategoryButton);