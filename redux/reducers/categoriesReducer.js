
export default(state = defaultState, action) => {
	switch(action.type) {
		default:
			return state;
	}	
}

const defaultState = 
[
	{
		_id: 'Food',
		type: 'expense',
		color: '#F38181',
		iconFamily: 'MaterialCommunityIcons',
		iconName: 'silverware-fork-knife',
	},
	{
		_id: 'Groceries',
		type: 'expense',
		color: '#FFDE7D',
		iconFamily: 'MaterialIcons',
		iconName: 'shopping-cart',
	},
]