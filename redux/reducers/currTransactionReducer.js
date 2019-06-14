import { 
	SET_CURRTRANSACTION_ID, 
	SET_CURRTRANSACTION_AMOUNT, 
	SET_CURRTRANSACTION_CATEGORY, 
	SET_CURRTRANSACTION_DATE, 
	SET_CURRTRANSACTION_NOTE, 
	RESET_CURRTRANSACTION 
} from '../actions/actionTypes';

export default(state = defaultState, action) => {
	switch(action.type) {
		case SET_CURRTRANSACTION_ID:
			return { ...state, _id: action.payload };
		case SET_CURRTRANSACTION_AMOUNT:
			return { ...state, amount: action.payload };
		case SET_CURRTRANSACTION_CATEGORY:
			return { ...state, category: action.payload };
		case SET_CURRTRANSACTION_DATE:
			return { ...state, date: action.payload };
		case SET_CURRTRANSACTION_NOTE:
			return { ...state, note: action.payload };
		case RESET_CURRTRANSACTION:
			return defaultState;
		default:
			return state;
	}
};

const defaultState = {
	_id: null,
	amount: null,
	category: null,
	date: null,
	note: null,
};