import { SET_CURRTRANSACTION_AMOUNT, SET_CURRTRANSACTION_CATEGORY, 
		SET_CURRTRANSACTION_DATE, SET_CURRTRANSACTION_NOTE } from '../actions/actionTypes';

export default(state = defaultState, action) => {
	switch(action.type) {
		case SET_CURRTRANSACTION_AMOUNT:
			return { ...state, amount: action.payload };
		case SET_CURRTRANSACTION_CATEGORY:
			return { ...state, category: action.payload };
		case SET_CURRTRANSACTION_DATE:
			return { ...state, date: action.payload };
		case SET_CURRTRANSACTION_NOTE:
			return { ...state, note: action.payload };
		default:
			return state;
	}
};

const defaultState = {
	amount: null,
	category: null,
	date: null,
	note: null,
};