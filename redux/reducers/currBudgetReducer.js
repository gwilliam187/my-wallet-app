import { 
	SET_CURRBUDGET_WALLET,
	SET_CURRBUDGET_NAME,
	SET_CURRBUDGET_AMOUNT,
	SET_CURRBUDGET_CATEGORIES,
	SET_CURRBUDGET_STARTDATE, 
	SET_CURRBUDGET_ENDDATE,
	SET_CURRBUDGET_TYPE,
	SET_CURRBUDGET_REPEAT 
} from '../actions/actionTypes';

export default(state = defaultState, action) => {
	switch(action.type) {
		case SET_CURRBUDGET_WALLET:
			return { ...state, wallet: action.payload };
		case SET_CURRBUDGET_NAME:
			return { ...state, name: action.payload };
		case SET_CURRBUDGET_AMOUNT:
			return { ...state, amount: action.payload };
		case SET_CURRBUDGET_CATEGORIES:
			return { ...state, categories: action.payload };
		case SET_CURRBUDGET_STARTDATE:
			return { ...state, startDate: action.payload };
		case SET_CURRBUDGET_ENDDATE:
			return { ...state, endDate: action.payload };
		case SET_CURRBUDGET_TYPE:
			return { ...state, type: action.payload };
		case SET_CURRBUDGET_REPEAT:
			return { ...state, repeat: action.payload };
		default:
			return state;
	}
};

const defaultState = {
	_id: null,
	wallet: {},
	name: null,
	amount: null,
	categories: [],
	startDate: null,
	endDate: null,
	type: null,
	repeat: null,
};