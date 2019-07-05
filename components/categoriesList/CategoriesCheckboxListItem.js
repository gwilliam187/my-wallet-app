import React, { Component } from 'react';
import { 
	StyleSheet, 
	Text, 
	TouchableNativeFeedback, 
	View, 
} from 'react-native';
import { connect } from 'react-redux';
import { Checkbox } from 'react-native-paper';

import CategoryIcon from '../icons/CategoryIcon';
import { addCategory, deleteCategory } from '../../redux/actions/categoriesCheckboxActions'
import Colors from '../../constants/Colors';

class CategoriesCheckboxListItem extends Component {
 	checkboxOnPress = () => {
 		if(this.categoryIsSelected()) {
 			this.props.deleteCategory(this.props.item);
 		} else {
 			this.props.addCategory(this.props.item);
 		}
 	};

 	categoryIsSelected = () => {
 		return this.props.categoriesCheckbox.includes(this.props.item);
 	};

	componentDidUpdate(prevProps) {
		if(this.props.allChecked !== prevProps.allChecked) {
			if(this.props.allChecked) {
				this.props.addCategory(this.props.item);
			} else {
				this.props.deleteCategory(this.props.item);
			}
		}
	}

	render() {
		return (
			<TouchableNativeFeedback 
					onPress={ this.checkboxOnPress }
					useForeground={ true }>
				<View style={ styles.itemWrapper }>
					<CategoryIcon 
							category={ this.props.item }
							color={ this.props.item.color }
							size={ 24 } />
					<Text style={ styles.buttonText }>{ this.props.item._id }</Text>
					<View style={{ marginLeft: 'auto' }}>
						<Checkbox 
								onPress={ this.checkboxOnPress }
								status={ this.categoryIsSelected() ? 'checked' : 'unchecked' }
								uncheckedColor={ Colors.neutralFaded }
	      				color={ Colors.primary } />
      		</View>
				</View>
			</TouchableNativeFeedback>
		);
	}
}

const mapStateToProps = state => ({
	categoriesCheckbox: state.categoriesCheckbox,
});

const mapDispatchToProps = {
	addCategory, deleteCategory,
};

const styles = StyleSheet.create({
	itemWrapper: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		alignItems: 'center',
		paddingTop: 12,
		paddingRight: 12,
		paddingBottom: 12,
		paddingLeft: 16,
		marginRight: 16,
		marginBottom: 8,
		marginLeft: 16,
		borderRadius: 8,
		backgroundColor: '#FFF',
		elevation: 1,
	},
	buttonText: {
		marginLeft: 16,
		color: Colors.neutral,
		fontSize: 20,
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesCheckboxListItem);