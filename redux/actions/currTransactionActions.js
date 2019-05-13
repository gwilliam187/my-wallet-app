import { SET_CURRTRANSACTION_AMOUNT, SET_CURRTRANSACTION_CATEGORY, 
		SET_CURRTRANSACTION_DATE, SET_CURRTRANSACTION_NOTE } from './actionTypes'

export const setAmount = amount => {
	console.log('setAmount');
	return {
		type: SET_CURRTRANSACTION_AMOUNT,
		payload: amount
	};
};

export const setCategory = category => {
	return {
		type: SET_CURRTRANSACTION_CATEGORY,
		payload: category
	};
};

export const setDate = date => {
	return {
		type: SET_CURRTRANSACTION_DATE,
		payload: date
	};
};

export const setNote = note => {
	return {
		type: SET_CURRTRANSACTION_NOTE,
		payload: note
	};
};