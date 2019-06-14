import { 
	ADD_WALLET, 
	DELETE_WALLET, 
	ADD_TRANSACTION, 
	EDIT_TRANSACTION, 
	DELETE_TRANSACTION 
} from '../actions/actionTypes';

export default(state = defaultState, action) => {
	switch(action.type) {
		case ADD_WALLET:
			return [...state, action.payload];
		case DELETE_WALLET:
			return state.filter(curr => curr._id !== action.payload._id);
		case ADD_TRANSACTION:
			return state.map(wallet => {
				if(wallet._id === action.payload.wallet._id) {
					return { 
						...wallet, 
						balance: wallet.balance + action.payload.transaction.amount,
						transactions: [...wallet.transactions, action.payload.transaction] 
					};
				}
				return wallet;
			});
		case EDIT_TRANSACTION:
			return state.map(wallet => {
				if(wallet._id === action.payload.wallet._id) {
					return { 
						...wallet, 
						balance: wallet.balance - 
								wallet.transactions.find(transaction => 
										transaction._id === action.payload.transaction._id).amount +
								action.payload.transaction.amount,
						transactions: wallet.transactions.map(transaction => {
							if(transaction._id === action.payload.transaction._id) {
								return action.payload.transaction;
							}
							return transaction;
						}) 
					}
				}
				return wallet;
			})
		case DELETE_TRANSACTION:
			return state.map(curr => {
				if(curr._id === action.payload.wallet._id) {
					return { 
						...curr, 
						balance: wallet.balance - action.payload.amount,
						transactions: curr.transactions.filter(transaction => 
							transaction._id !== action.payload.transaction._id) };
				}
				return curr;
			})
		default:
			return state;
	}	
};

const defaultState = 
[
	{
		_id: '1',
		name: 'German Wallet',
		balance: 0,
		currency: 'eur',
		transactions: [],
	},
	{
		_id: '2',
		name: 'Indo Wallet',
		balance: 0,
		currency: 'idr',
		transactions: [],
	},
];