import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import CategoryButton from '../components/categories/CategoryButton';
import { setCategory } from '../redux/actions/currTransactionActions';
import Colors from '../constants/Colors';

class SelectCategoryScreen extends Component {
	handleCategorySelect = val => {
		this.props.setCategory(val);
		this.props.navigation.goBack();
	};

	renderList() {
		const categories = this.props.categories;
		return categories.map(category => {
			return (
				<CategoryButton 
						onPressHandler={ this.handleCategorySelect } 
						category={ category } 
						key={ category._id } />
			);
		})
	}

	render() {
		return (
			<View style={ styles.root }>
				<View style={ styles.container }>
					{ this.renderList() }
				</View>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		categories: state.categories
	};
};

const mapDispatchToProps = {
	setCategory
};

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
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCategoryScreen);