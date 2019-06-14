import { SELECT_WALLET, } from './actionTypes';

export const selectWallet = (wallet) => {
	return {
		type: SELECT_WALLET,
		payload: { 
			_id: wallet._id,
			name: wallet.name,
			// balance: wallet.balance,
			currency: wallet.currency,
		},
	};
};