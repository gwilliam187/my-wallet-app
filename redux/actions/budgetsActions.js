import { ADD_BUDGET } from './actionTypes';

export const addBudget = budget => {
	return {
		type: ADD_BUDGET,
		payload: budget,
	};
};
