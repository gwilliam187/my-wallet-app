
export const getCategories = () => { return categories; }
export const getOneCategory = _id => {
	return categories.find(category => category._id === _id);
};

const categories = [
	{
		_id: 'Food',
		color: '#FF0000',
		icon_family: 'MaterialCommunityIcons',
		icon_name: 'silverware-fork-knife'
	},
	{
		_id: 'Groceries',
		color: '#FFC600',
		icon_family: 'MaterialIcons',
		icon_name: 'shopping-cart'
	}
];
