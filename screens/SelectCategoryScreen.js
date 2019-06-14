import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, } from 'react-native';
import { connect } from 'react-redux';

// import CategoryButton from '../components/categoriesList/CategoryButton';
import CategoriesList from '../components/categoriesList/CategoriesList';
import { setCategory } from '../redux/actions/currTransactionActions';
import Colors from '../constants/Colors';

class SelectCategoryScreen extends Component {
	handleCategorySelect = val => {
		this.props.setCategory(val);
		this.props.navigation.goBack();
	};

	render() {
		return (
			<View style={ styles.root }>
				<View style={ styles.container }>
					<CategoriesList itemOnPress={ this.handleCategorySelect } />
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
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCategoryScreen);