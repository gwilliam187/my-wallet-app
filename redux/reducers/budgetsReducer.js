import { ADD_BUDGET } from '../actions/actionTypes';

export default(state = defaultState, action) => {
	switch(action.type) {
		case ADD_BUDGET:
			return [ action.payload, ...state ];
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
		startDate: '1-6-19',
		endDate: '30-6-19',
		type: 'monthly',
		repeat: true,
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
		startDate: '1-6-19',
		endDate: '30-6-19',
		type: 'monthly',
		repeat: true,
	},
];