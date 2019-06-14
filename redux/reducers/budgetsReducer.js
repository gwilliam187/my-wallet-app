
export default(state = defaultState, action) => {
	switch(action.type) {
		default:
			return state;
	}
};

const defaultState = 
[
	{
		_id: '1',
		wallet: {
			_id: '1',
			name: 'German Wallet',
			currency: 'eur',
		},
		name: 'Necessities',
		amount: '240',
		categories: ['Food'],
		month: 5,
	},
	{
		_id: '2',
		wallet: {
			_id: '1',
			name: 'German Wallet',
			currency: 'eur',
		},
		name: 'Everything',
		amount: '400',
		categories: [],
		month: 5,
	},
];