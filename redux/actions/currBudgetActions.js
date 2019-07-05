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

export const setWallet = wallet => {
	return {
		type: SET_CURRBUDGET_WALLET,
		payload: wallet,
	};
};

export const setName = name => {
	return {
		type: SET_CURRBUDGET_NAME,
		payload: name,
	};
};

export const setAmount = amount => {
	return {
		type: SET_CURRBUDGET_AMOUNT,
		payload: amount,
	};
};

export const setCategories = categories => {
	return {
		type: SET_CURRBUDGET_CATEGORIES,
		payload: categories,
	};
};

export const setStartDate = startDate => {
	return {
		type: SET_CURRBUDGET_STARTDATE,
		payload: startDate,
	};
};

export const setEndDate = endDate => {
	return {
		type: SET_CURRBUDGET_ENDDATE,
		payload: endDate,
	};
};

export const setType = type => {
	return {
		type: SET_CURRBUDGET_TYPE,
		payload: type,
	};
};

export const setRepeat = repeat => {
	return {
		type: SET_CURRBUDGET_REPEAT,
		payload: repeat,
	};
};